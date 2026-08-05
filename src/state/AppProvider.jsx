import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AppContext } from './app-context'
import { connectDevice, disconnectDevice, scanDevices } from '../services/deviceService'

const mainRoutes = new Set(['home', 'explore', 'device', 'records', 'ai', 'couple', 'profile'])

function getInitialRoute() {
  const route = window.location.hash.replace('#', '')
  return route || 'home'
}

export default function AppProvider({ children }) {
  const [route, setRoute] = useState(getInitialRoute)
  const [previousRoute, setPreviousRoute] = useState('home')
  const [favorites, setFavorites] = useState(() => new Set(JSON.parse(localStorage.getItem('shaki-favorites') || '[]')))
  const [connectedDevice, setConnectedDevice] = useState({
    id: 'pro-s1',
    type: 'toy',
    name: 'SHAKI Pro S1',
    model: '拾光·悦',
    battery: 82,
    signal: 4,
  })
  const [ringDevice, setRingDevice] = useState(null)
  const [availableDevices, setAvailableDevices] = useState([
    { id: 'pro-s1', type: 'toy', name: 'SHAKI Pro S1', model: '智能律动设备', battery: 82, signal: 4 },
    { id: 'mini', type: 'toy', name: 'SHAKI Mini', model: '便携智能设备', battery: 64, signal: 3 },
  ])
  const [scanning, setScanning] = useState(false)
  const [heartRate, setHeartRate] = useState(86)
  const [monitoring, setMonitoring] = useState(true)
  const [intensity, setIntensity] = useState(48)
  const [rhythmFrequency, setRhythmFrequency] = useState(12)
  const [suctionLevel, setSuctionLevel] = useState(46)
  const [vibrationLevel, setVibrationLevel] = useState(58)
  const [extensionLevel, setExtensionLevel] = useState(32)
  const [rhythmMode, setRhythmMode] = useState('舒缓')
  const [rhythmActive, setRhythmActive] = useState(false)
  const [coupleLinked, setCoupleLinked] = useState(false)
  const [remoteControlAllowed, setRemoteControlAllowed] = useState(false)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  useEffect(() => {
    const handleHash = () => setRoute(getInitialRoute())
    window.addEventListener('hashchange', handleHash)
    if (!window.location.hash) window.location.hash = 'home'
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  useEffect(() => {
    localStorage.setItem('shaki-favorites', JSON.stringify([...favorites]))
  }, [favorites])

  useEffect(() => {
    if (!monitoring || !connectedDevice) return undefined
    const timer = window.setInterval(() => {
      setHeartRate((value) => Math.max(72, Math.min(104, value + Math.round(Math.random() * 6 - 3))))
    }, 1800)
    return () => window.clearInterval(timer)
  }, [connectedDevice, monitoring])

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  const notify = useCallback((message, tone = 'default') => {
    window.clearTimeout(toastTimer.current)
    setToast({ message, tone })
    toastTimer.current = window.setTimeout(() => setToast(null), 2400)
  }, [])

  const navigate = useCallback((nextRoute) => {
    setPreviousRoute(route)
    window.location.hash = nextRoute
  }, [route])

  const goBack = useCallback(() => {
    window.location.hash = previousRoute || 'home'
  }, [previousRoute])

  const activeMainRoute = mainRoutes.has(route) ? route : previousRoute

  const toggleFavorite = useCallback((productId) => {
    setFavorites((current) => {
      const next = new Set(current)
      if (next.has(productId)) next.delete(productId)
      else next.add(productId)
      return next
    })
  }, [])

  const startScan = useCallback(async () => {
    setScanning(true)
    setAvailableDevices([])
    const found = await scanDevices()
    setAvailableDevices(found)
    setScanning(false)
    notify(`发现 ${found.length} 台设备`, 'success')
  }, [notify])

  const connect = useCallback(async (device) => {
    notify(`正在连接 ${device.name}`)
    const result = await connectDevice(device)
    if (result.type === 'ring') setRingDevice(result)
    else setConnectedDevice(result)
    notify(`${device.name} 已连接`, 'success')
  }, [notify])

  const disconnect = useCallback(async () => {
    const name = connectedDevice?.name
    await disconnectDevice()
    setConnectedDevice(null)
    setRhythmActive(false)
    notify(`${name || '设备'} 已断开`)
  }, [connectedDevice, notify])

  const value = useMemo(() => ({
    route,
    activeMainRoute,
    navigate,
    goBack,
    favorites,
    toggleFavorite,
    connectedDevice,
    ringDevice,
    availableDevices,
    scanning,
    startScan,
    connect,
    disconnect,
    heartRate,
    monitoring,
    setMonitoring,
    intensity,
    setIntensity,
    rhythmFrequency,
    setRhythmFrequency,
    suctionLevel,
    setSuctionLevel,
    vibrationLevel,
    setVibrationLevel,
    extensionLevel,
    setExtensionLevel,
    rhythmMode,
    setRhythmMode,
    rhythmActive,
    setRhythmActive,
    coupleLinked,
    setCoupleLinked,
    remoteControlAllowed,
    setRemoteControlAllowed,
    toast,
    notify,
  }), [
    route, activeMainRoute, navigate, goBack, favorites, toggleFavorite, connectedDevice, ringDevice,
    availableDevices, scanning, startScan, connect, disconnect, heartRate, monitoring,
    intensity, rhythmFrequency, suctionLevel, vibrationLevel, extensionLevel, rhythmMode, rhythmActive, coupleLinked, remoteControlAllowed, toast, notify,
  ])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
