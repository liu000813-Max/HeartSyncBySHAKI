import { Activity, Bluetooth } from 'lucide-react'

export default function MirrorPulse({ active = false, value, label = '设备就绪', size = 'medium' }) {
  return (
    <div className={`mirror-pulse mirror-pulse--${size} ${active ? 'is-active' : ''}`}>
      <span className="mirror-pulse__ring mirror-pulse__ring--one" />
      <span className="mirror-pulse__ring mirror-pulse__ring--two" />
      <span className="mirror-pulse__ring mirror-pulse__ring--three" />
      <div className="mirror-pulse__core">
        {value ? <Activity size={22} /> : <Bluetooth size={22} />}
        {value && <strong>{value}</strong>}
        <small>{label}</small>
      </div>
    </div>
  )
}
