/**
 * Reverse-engineered reference for the legacy SHAKI / Rongshengquan BLE path.
 * This module only encodes and inspects frames. It does not call wx.* APIs.
 */

export const LEGACY_BLE_PROTOCOL = Object.freeze({
  serviceUuidFragment: 'FFA0',
  writeCharacteristic: 'first characteristic returned by getBLEDeviceCharacteristics',
  connectionTimeoutMs: 1500,
  scanNameFragments: Object.freeze(['RSQ-APP01', 'XQ_']),
  brandCodes: Object.freeze({ default: 0xaa, SHAKI: 0xab }),
  motorTypes: Object.freeze({ default: 0x0b, heat: 0x0c, clock: 0x10, electric: 0x0d, strike: 0x0f }),
  clockAdvertisementMarker: 0x99,
})

const clampByte = (value, label) => {
  const numeric = Number(value)
  if (!Number.isFinite(numeric)) throw new TypeError(`${label} must be a byte-like number`)
  return Math.max(0, Math.min(255, Math.round(numeric)))
}

const resolveCode = (table, value, label) => {
  if (typeof value === 'string' && Object.prototype.hasOwnProperty.call(table, value)) return table[value]
  return clampByte(value, label)
}

export function encodeLegacyCommand({
  brand = 'SHAKI',
  motorType = 'default',
  motorId = '01',
  level = 5,
  strength = 1,
} = {}) {
  const brandCode = resolveCode(LEGACY_BLE_PROTOCOL.brandCodes, brand, 'brand')
  const functionCode = resolveCode(LEGACY_BLE_PROTOCOL.motorTypes, motorType, 'motorType')
  return Uint8Array.from([
    brandCode,
    functionCode,
    clampByte(motorId, 'motorId'),
    clampByte(level, 'level'),
    clampByte(strength, 'strength'),
  ])
}

export function encodeLegacyCommandHex(options = {}) {
  return [...encodeLegacyCommand(options)]
    .map((value) => value.toString(16).padStart(2, '0').toUpperCase())
    .join(' ')
}

export function encodeLegacyClockAdvertisement(options = {}) {
  return Uint8Array.from([
    ...encodeLegacyCommand({ ...options, motorType: 'clock' }),
    LEGACY_BLE_PROTOCOL.clockAdvertisementMarker,
  ])
}

export function decodeLegacyCommand(input) {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input)
  if (bytes.length < 5) return null

  const brand = Object.entries(LEGACY_BLE_PROTOCOL.brandCodes)
    .find(([, code]) => code === bytes[0])?.[0] || 'unknown'
  const motorType = Object.entries(LEGACY_BLE_PROTOCOL.motorTypes)
    .find(([, code]) => code === bytes[1])?.[0] || 'unknown'

  return {
    brand,
    brandCode: bytes[0],
    motorType,
    motorCode: bytes[1],
    motorId: bytes[2],
    level: bytes[3],
    strength: bytes[4],
    clockAdvertisement: bytes.length > 5 && bytes[5] === LEGACY_BLE_PROTOCOL.clockAdvertisementMarker,
    raw: Uint8Array.from(bytes),
  }
}

export function matchesLegacyService(uuid) {
  return typeof uuid === 'string' && uuid.toUpperCase().includes(LEGACY_BLE_PROTOCOL.serviceUuidFragment)
}

export function selectLegacyWriteCharacteristic(characteristics = []) {
  return characteristics[0]?.uuid || null
}

export function getLegacyScanNameFragments(appCode = 'SHAKI') {
  return appCode === 'SHAKI' ? [...LEGACY_BLE_PROTOCOL.scanNameFragments] : ['RSQ-APP01', 'MY_']
}
