import { Activity, ChevronRight, Clock3, Gauge, Play, SlidersHorizontal, Sparkles, Waves } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useApp } from '../state/useApp'

const modes = [
  {
    id: 'auto',
    icon: Sparkles,
    label: '自动模式',
    title: 'AI 自适应',
    description: '综合模拟生理信号与当前偏好，动态调整节奏。',
  },
  {
    id: 'custom',
    icon: SlidersHorizontal,
    label: '自定义模式',
    title: '我的节奏',
    description: '手动设置强度、节奏和安全上限。',
  },
  {
    id: 'history',
    icon: Clock3,
    label: '历史模式',
    title: '上次舒缓',
    description: '从最近反馈良好的设置继续。',
  },
]

export default function AIModePage() {
  const { connectedDevice, ringDevice, heartRate, setRhythmMode, setIntensity, navigate, notify } = useApp()

  const chooseMode = (id) => {
    if (id === 'auto') {
      setRhythmMode('舒缓')
      setIntensity(42)
      navigate('rhythm')
      return
    }
    if (id === 'custom') {
      setRhythmMode('自定义')
      navigate('rhythm')
      return
    }
    setRhythmMode('渐进')
    setIntensity(36)
    notify('已恢复上次舒缓设置', 'success')
    navigate('rhythm')
  }

  return (
    <main className="page ai-page">
      <PageHeader back title="AI律动 · 同步中" action={<span className="ai-connected-pill"><i />已连接</span>} />

      <section className="ai-engine-stage">
        <div className="ai-engine-stage__top">
          <span className="simulation-badge simulation-badge--dark">MVP 模拟引擎</span>
          <span className={`engine-status ${connectedDevice ? 'is-ready' : ''}`}><i />{connectedDevice ? '设备就绪' : '等待设备'}</span>
        </div>
        <div className="ai-engine-stage__core">
          <Sparkles size={28} />
          <strong>HeartSync AI</strong>
          <span>当前建议 · 舒缓 42%</span>
        </div>
        <div className="engine-signals">
          <div><Activity size={16} /><span>模拟心率</span><strong>{heartRate}</strong></div>
          <div><Gauge size={16} /><span>偏好强度</span><strong>42%</strong></div>
          <div><Waves size={16} /><span>推荐节奏</span><strong>舒缓</strong></div>
        </div>
      </section>

      <section className="content-section ai-mode-section">
        <div className="section-heading">
          <div><span className="eyebrow">CHOOSE MODE</span><h2>选择体验</h2></div>
        </div>
        <div className="ai-mode-list">
          {modes.map(({ id, icon: Icon, label, title, description }) => (
            <button key={id} className="ai-mode-item" onClick={() => chooseMode(id)}>
              <span className="ai-mode-item__icon"><Icon size={20} /></span>
              <span className="ai-mode-item__copy"><small>{label}</small><strong>{title}</strong><i>{description}</i></span>
              <ChevronRight size={19} />
            </button>
          ))}
        </div>
      </section>

      <section className="content-section experience-profile">
        <div className="experience-profile__heading">
          <div><span className="eyebrow">PERSONAL MODEL</span><h2>个人体验模型</h2></div>
          <strong>68%</strong>
        </div>
        <div className="learning-track"><i /></div>
        <p>已基于 12 次模拟反馈形成初步偏好；接入真实账号与同意机制后才会保存个人数据。</p>
        <div className="profile-inputs">
          <span>{connectedDevice ? '玩具在线' : '玩具离线'}</span>
          <span>{ringDevice ? 'Ring 在线' : 'Ring 未连接'}</span>
          <span>历史反馈 12</span>
        </div>
      </section>

      <button className="button button--primary ai-quick-start" onClick={() => chooseMode('auto')}>
        <Play size={18} fill="currentColor" />启动推荐模式
      </button>
    </main>
  )
}
