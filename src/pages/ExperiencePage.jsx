import { Activity, ChevronRight, HeartPulse, Info, MessageSquare, TrendingUp } from 'lucide-react'
import MirrorPulse from '../components/MirrorPulse'
import PageHeader from '../components/PageHeader'
import Toggle from '../components/Toggle'
import { useApp } from '../state/useApp'

const trend = [76, 82, 79, 88, 84, 81, 86]
const days = ['一', '二', '三', '四', '五', '六', '日']
const sessions = [
  { date: '今天 22:14', mode: 'AI 舒缓', duration: '12 分钟', feedback: '良好' },
  { date: '7月28日', mode: '自定义渐进', duration: '18 分钟', feedback: '偏强' },
  { date: '7月26日', mode: '情侣同步', duration: '9 分钟', feedback: '良好' },
]

export default function ExperiencePage() {
  const { heartRate, monitoring, setMonitoring, connectedDevice, navigate, notify } = useApp()

  return (
    <main className="page records-page">
      <PageHeader />
      <section className="page-intro page-enter page-intro--inline">
        <div><span className="eyebrow">HEART RATE</span><h1>心率监测</h1></div>
        <span className="simulation-badge"><Activity size={13} /> 直播中</span>
      </section>

      <section className="heart-stage">
        <div className="heart-stage__top">
          <div><span>当前信号</span><strong>{monitoring && connectedDevice ? '实时预览' : '已暂停'}</strong></div>
          <Toggle checked={monitoring} onChange={setMonitoring} label="模拟心率监测" />
        </div>
        <div className="heart-value"><strong>{heartRate}</strong><span>BPM</span></div>
        <MirrorPulse active={monitoring && Boolean(connectedDevice)} value={heartRate} label="BPM" size="large" />
        <svg className="heart-wave" viewBox="0 0 360 56" aria-label="模拟心率波形">
          <path d="M0 29h45l10-15 12 30 16-42 17 27h38l12-10 14 20 18-36 18 26h46l10-14 14 28 16-40 18 26h56" />
        </svg>
        <div className="heart-stats">
          <div><span>最低</span><strong>72</strong></div>
          <div><span>平均</span><strong>82</strong></div>
          <div><span>最高</span><strong>104</strong></div>
        </div>
      </section>

      <section className="content-section trend-section">
        <div className="section-heading">
          <div><span className="eyebrow">7 DAYS</span><h2>信号趋势</h2></div>
          <span className="trend-up"><TrendingUp size={15} /> +4%</span>
        </div>
        <div className="bar-chart" aria-label="七日模拟平均心率">
          {trend.map((value, index) => (
            <div className="bar-chart__item" key={days[index]}>
              <span>{value}</span>
              <i style={{ height: `${Math.max(30, value - 35)}px` }} className={index === trend.length - 1 ? 'is-today' : ''} />
              <small>{days[index]}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section session-history">
        <div className="section-heading">
          <div><span className="eyebrow">RECENT SESSIONS</span><h2>最近体验</h2></div>
          <button className="text-button" onClick={() => notify('完整记录将在账号 API 接入后开放')}>全部</button>
        </div>
        <div className="session-list">
          {sessions.map((session) => (
            <button key={`${session.date}-${session.mode}`} className="session-row" onClick={() => notify(`${session.mode} · ${session.feedback}`)}>
              <span className="session-row__icon"><HeartPulse size={19} /></span>
              <span className="session-row__copy"><strong>{session.mode}</strong><small>{session.date} · {session.duration}</small></span>
              <i className={session.feedback === '良好' ? 'is-good' : ''}>{session.feedback}</i>
              <ChevronRight size={18} />
            </button>
          ))}
        </div>
      </section>

      <section className="feedback-band">
        <MessageSquare size={19} />
        <div><strong>反馈帮助 AI 学习</strong><p>反馈只在获得同意后进入个人体验模型。</p></div>
        <button onClick={() => navigate('ai')}>去反馈</button>
      </section>

      <section className="data-disclaimer">
        <Info size={17} />
        <p>本页为 MVP 模拟数据，不用于诊断、治疗或健康决策。</p>
      </section>
    </main>
  )
}
