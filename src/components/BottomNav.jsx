import { Bluetooth, Heart, Home, Search, Sparkles, UserRound, Users } from 'lucide-react'
import { useApp } from '../state/useApp'

const defaultItems = [
  { id: 'home', label: '首页', icon: Home },
  { id: 'explore', label: '探索', icon: Search },
  { id: 'device', label: '蓝牙', icon: Bluetooth },
  { id: 'records', label: '心率', icon: Heart },
  { id: 'profile', label: '我的', icon: UserRound },
]

const aiItems = [
  { id: 'home', label: '首页', icon: Home },
  { id: 'explore', label: '探索', icon: Search },
  { id: 'ai', label: 'AI律动', icon: Sparkles },
  { id: 'records', label: '心率', icon: Heart },
  { id: 'profile', label: '我的', icon: UserRound },
]

const coupleItems = [
  { id: 'home', label: '首页', icon: Home },
  { id: 'explore', label: '探索', icon: Search },
  { id: 'device', label: '蓝牙', icon: Bluetooth },
  { id: 'records', label: '心率', icon: Heart },
  { id: 'couple', label: '情侣', icon: Users },
]

export default function BottomNav() {
  const { route, activeMainRoute, navigate } = useApp()
  const items = route === 'ai' ? aiItems : route === 'couple' ? coupleItems : defaultItems

  return (
    <nav className="bottom-nav" aria-label="主导航">
      {items.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          className={activeMainRoute === id ? 'is-active' : ''}
          aria-current={activeMainRoute === id ? 'page' : undefined}
          onClick={() => navigate(id)}
        >
          <Icon size={21} strokeWidth={activeMainRoute === id ? 2.4 : 1.8} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  )
}
