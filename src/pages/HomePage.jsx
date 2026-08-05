import { Activity, Bell, Bluetooth, ChevronRight, HeartPulse, Play, Sparkles, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import IconButton from '../components/IconButton'
import { products } from '../data/products'
import { useApp } from '../state/useApp'

export default function HomePage() {
  const { connectedDevice, heartRate, navigate, rhythmActive } = useApp()

  return (
    <main className="page home-page">
      <section className="home-hero">
        <PageHeader
          transparent
          action={<IconButton label="通知"><Bell size={20} /></IconButton>}
        />
        <img src="/assets/shiguang-initial.webp" alt="SHAKI 拾光系列产品" />
        <div className="home-hero__shade" />
        <div className="home-hero__copy page-enter">
          <span className="eyebrow eyebrow--light">HEARTSYNC BY SHAKI</span>
          <h1>FEEL THE<br />PLEASURE</h1>
          <p>DISCOVER YOUR DESIRE</p>
          <button className="button button--light" onClick={() => navigate('ai')}>
            <Play size={17} fill="currentColor" />
            {rhythmActive ? '继续 AI 律动' : '探索系列'}
          </button>
        </div>
      </section>

      <section className="status-band" aria-label="设备状态">
        <div className="status-band__icon"><Bluetooth size={19} /></div>
        <div>
          <strong>{connectedDevice ? connectedDevice.name : '未连接设备'}</strong>
          <span>{connectedDevice ? `已连接 · 电量 ${connectedDevice.battery}%` : '前往设备页开始连接'}</span>
        </div>
        <button className="inline-arrow" aria-label="查看设备" onClick={() => navigate('device')}>
          <ChevronRight size={20} />
        </button>
      </section>

      <section className="content-section home-signal">
        <div className="section-heading">
          <div>
            <span className="eyebrow">TODAY</span>
            <h2>今日信号</h2>
          </div>
          <span className="simulation-badge">模拟数据</span>
        </div>
        <div className="signal-grid">
          <button className="signal-tile signal-tile--heart" onClick={() => navigate('records')}>
            <HeartPulse size={21} />
            <strong>{heartRate}</strong>
            <span>BPM 心率</span>
          </button>
          <button className="signal-tile" onClick={() => navigate('ai')}>
            <Activity size={21} />
            <strong>{rhythmActive ? '进行中' : '12 Hz'}</strong>
            <span>AI 律动</span>
          </button>
          <button className="signal-tile" onClick={() => navigate('couple')}>
            <Users size={21} />
            <strong>双人</strong>
            <span>情侣同步</span>
          </button>
        </div>
      </section>

      <section className="content-section insight-band">
        <Sparkles size={20} />
        <div>
          <strong>适合慢慢开始</strong>
          <p>今天的模拟信号较平稳，建议从舒缓模式与 40% 强度开始。</p>
        </div>
      </section>

      <section className="content-section featured-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SHIGUANG SERIES</span>
            <h2>热门产品</h2>
          </div>
          <button className="text-button" onClick={() => navigate('explore')}>查看全部</button>
        </div>
        <div className="featured-scroll">
          {products.slice(0, 3).map((product) => (
            <button key={product.id} className="featured-card" onClick={() => navigate(`product/${product.id}`)}>
              <img src={product.image} alt={product.name} />
              <span>{product.label}</span>
              <strong>{product.name}</strong>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
