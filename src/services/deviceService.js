import { LEGACY_BLE_PROTOCOL } from './legacyBleProtocol'

export const DEVICE_DATA_MODE = 'simulation'
export const DEVICE_PROTOCOL_MODE = 'reverse-engineered-reference'
export { LEGACY_BLE_PROTOCOL }

const devices = [
  { id: 'pro-s1', type: 'toy', name: 'HeartSync Toy S1', model: '拾光·悦', battery: 82, signal: 4 },
  { id: 'ring-r1', type: 'ring', name: 'HeartSync Ring R1', model: 'PPG · HRV · 温度', battery: 74, signal: 4 },
  { id: 'mini', type: 'toy', name: 'SHAKI Mini', model: '轻巧随行', battery: 64, signal: 3 },
]

const wait = (result, delay = 700) =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(result), delay)
  })

export function scanDevices() {
  return wait(devices)
}

export function connectDevice(device) {
  return wait({ ...device, connectedAt: new Date().toISOString() }, 900)
}

export function disconnectDevice() {
  return wait(null, 350)
}
