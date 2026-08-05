import { CheckCircle2, Info } from 'lucide-react'
import { useApp } from '../state/useApp'

export default function Toast() {
  const { toast } = useApp()
  if (!toast) return null
  const Icon = toast.tone === 'success' ? CheckCircle2 : Info

  return (
    <div className={`toast toast--${toast.tone}`} role="status">
      <Icon size={18} />
      <span>{toast.message}</span>
    </div>
  )
}
