import { encodeLegacyCommand } from './legacyBleProtocol'

export const DEVICE_DATA_MODE = 'web-bluetooth-or-simulation'
export const DEVICE_PROTOCOL_MODE = 'reverse-engineered-reference'

export const SHAKI_BLE_SERVICE_UUID = '0000ffa0-0000-1000-8000-00805f9b34fb'
export const SHAKI_BLE_WRITE_UUID = '0000ffa1-0000-1000-8000-00805f9b34fb'
export const SHAKI_BLE_NOTIFY_UUID = '0000ffa2-0000-1000-8000-00805f9b34fb'
export const SHAKI_BLE_AUX_SERVICE_UUID = '0000ff12-0000-1000-8000-00805f9b34fb'
export const SHAKI_BLE_AUX_WRITE_UUID = '0000ff15-0000-1000-8000-00805f9b34fb'
export const SHAKI_BLE_AUX_NOTIFY_UUID = '0000ff14-0000-1000-8000-00805f9b34fb'

let activeConnection = null

export function supportsWebBluetooth() {
  return typeof window !== 'undefined'
    && window.isSecureContext
    && typeof navigator !== 'undefined'
    && 'bluetooth' in navigator
}

const getCharacteristic = async (service, uuid) => {
  try {
    return await service.getCharacteristic(uuid)
  } catch {
    return null
  }
}

const findWritableCharacteristic = async (service) => {
  const preferred = await getCharacteristic(service, SHAKI_BLE_WRITE_UUID)
  if (preferred) return preferred
  const characteristics = await service.getCharacteristics()
  return characteristics.find((characteristic) =>
    characteristic.properties.write || characteristic.properties.writeWithoutResponse,
  ) || null
}

const findNotifyCharacteristic = async (service) => {
  const preferred = await getCharacteristic(service, SHAKI_BLE_NOTIFY_UUID)
  if (preferred) return preferred
  const characteristics = await service.getCharacteristics()
  return characteristics.find((characteristic) => characteristic.properties.notify) || null
}

const readBattery = async (server) => {
  try {
    const batteryService = await server.getPrimaryService('battery_service')
    const batteryCharacteristic = await batteryService.getCharacteristic('battery_level')
    const value = await batteryCharacteristic.readValue()
    return value.getUint8(0)
  } catch {
    return null
  }
}

export async function scanDevices() {
  if (!supportsWebBluetooth()) return []

  const nativeDevice = await navigator.bluetooth.requestDevice({
    filters: [{ namePrefix: 'XQ_' }],
    optionalServices: [SHAKI_BLE_SERVICE_UUID, SHAKI_BLE_AUX_SERVICE_UUID, 'battery_service'],
  })

  return [{
    id: nativeDevice.id,
    type: 'toy',
    name: nativeDevice.name || 'SHAKI BLE 设备',
    model: 'XQ_ 系列 · 待验证能力',
    battery: null,
    signal: null,
    mode: 'hardware',
    nativeDevice,
  }]
}

export async function connectDevice(device, { onDisconnected, onNotification } = {}) {
  if (!device?.nativeDevice?.gatt) {
    return {
      ...device,
      mode: 'simulation',
      connectedAt: new Date().toISOString(),
    }
  }

  const nativeDevice = device.nativeDevice
  const server = await nativeDevice.gatt.connect()
  const service = await server.getPrimaryService(SHAKI_BLE_SERVICE_UUID)
  const writeCharacteristic = await findWritableCharacteristic(service)
  const notifyCharacteristic = await findNotifyCharacteristic(service)

  if (!writeCharacteristic) {
    nativeDevice.gatt.disconnect()
    throw new Error('已连接，但未找到可写特征')
  }

  const disconnectHandler = () => {
    if (activeConnection?.nativeDevice?.id === nativeDevice.id) activeConnection = null
    onDisconnected?.()
  }
  nativeDevice.addEventListener('gattserverdisconnected', disconnectHandler)

  if (notifyCharacteristic && onNotification) {
    await notifyCharacteristic.startNotifications()
    notifyCharacteristic.addEventListener('characteristicvaluechanged', (event) => {
      onNotification(new Uint8Array(event.target.value.buffer))
    })
  }

  const battery = await readBattery(server)
  activeConnection = {
    nativeDevice,
    writeCharacteristic,
    notifyCharacteristic,
    serviceUuid: service.uuid,
    writeCharacteristicUuid: writeCharacteristic.uuid,
    notifyCharacteristicUuid: notifyCharacteristic?.uuid || null,
    disconnectHandler,
  }

  return {
    ...device,
    id: nativeDevice.id,
    name: nativeDevice.name || device.name,
    model: `${nativeDevice.name || 'XQ_ 设备'} · FFA0 已识别`,
    battery,
    signal: null,
    mode: 'hardware',
    serviceUuid: service.uuid,
    writeCharacteristicUuid: writeCharacteristic.uuid,
    notifyCharacteristicUuid: notifyCharacteristic?.uuid || null,
    connectedAt: new Date().toISOString(),
  }
}

export async function disconnectDevice(device) {
  if (activeConnection?.nativeDevice?.id === device?.id) {
    activeConnection.nativeDevice.removeEventListener('gattserverdisconnected', activeConnection.disconnectHandler)
    if (activeConnection.nativeDevice.gatt?.connected) activeConnection.nativeDevice.gatt.disconnect()
    activeConnection = null
  }
}

export async function writeDeviceCommand({ motorType = 'default', motorId = 1, level = 1, strength = 1 } = {}) {
  if (!activeConnection?.writeCharacteristic) throw new Error('尚未连接真实设备')

  const frame = encodeLegacyCommand({ motorType, motorId, level, strength })
  const characteristic = activeConnection.writeCharacteristic
  if (characteristic.properties.writeWithoutResponse) await characteristic.writeValueWithoutResponse(frame)
  else await characteristic.writeValue(frame)

  return {
    frame: [...frame],
    hex: [...frame].map((value) => value.toString(16).padStart(2, '0').toUpperCase()).join(' '),
    characteristicUuid: characteristic.uuid,
  }
}

export async function stopDeviceCommand() {
  return writeDeviceCommand({ motorType: 'default', motorId: 1, level: 0, strength: 0 })
}

export function getActiveConnectionInfo() {
  if (!activeConnection) return null
  return {
    serviceUuid: activeConnection.serviceUuid,
    writeCharacteristicUuid: activeConnection.writeCharacteristicUuid,
    notifyCharacteristicUuid: activeConnection.notifyCharacteristicUuid,
    deviceId: activeConnection.nativeDevice.id,
  }
}
