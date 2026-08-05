import { ArrowLeft, Menu } from 'lucide-react'
import BrandMark from './BrandMark'
import IconButton from './IconButton'
import { useApp } from '../state/useApp'

export default function PageHeader({ title, eyebrow, action, back = false, transparent = false }) {
  const { goBack } = useApp()

  return (
    <header className={`page-header ${transparent ? 'page-header--transparent' : ''}`}>
      {back ? (
        <IconButton label="返回" onClick={goBack}><ArrowLeft size={20} /></IconButton>
      ) : (
        <button className="header-menu" aria-label="打开菜单"><Menu size={20} /></button>
      )}
      <div className="page-header__title">
        {title ? <strong>{title}</strong> : <BrandMark light={transparent} />}
        {title && eyebrow && <span>{eyebrow}</span>}
      </div>
      <div className="page-header__action">{action}</div>
    </header>
  )
}
