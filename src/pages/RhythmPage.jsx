import { Bluetooth, Pause, Play, Shield, Square } from 'lucide-react'
import MirrorPulse from '../components/MirrorPulse'
import PageHeader from '../components/PageHeader'
import Toggle from '../components/Toggle'
import { useApp } from '../state/useApp'

const modes = ['舒缓', '渐进', '脉冲', '自定义']

export default function RhythmPage() {
  const {
    connectedDevice,
    heartRate,
    monitoring,
    setMonitoring,
    intensity,
    setIntensity,
    rhythmMode,
    setRhythmMode,
    rhythmActive,
    setRhythmActive,
    notify,
  } = useApp()

  const stop = () => {
    setRhythmActive(false)
    setIntensity(0)
    notify('律动已安全停止')
  }

  return (
    <main className={`page focus-page rhythm-page ${rhythmActive ? 'is-running' : ''}`}>
      <PageHeader
        back
        transparent
        title="AI 律动"
        eyebrow={rhythmActive ? '同步中' : '待机'}
        action={<span className={`connection-dot ${connectedDevice ? 'is-on' : ''}`}><Bluetooth size={15} /></span>}
      />

      <section className="rhythm-stage page-enter">
        <span className="simulation-badge simulation-badge--dark">模拟控制</span>
        <MirrorPulse active={rhythmActive} value={intensity} label="强度 %" size="large" />
        <div className="rhythm-stage__signal">
          <span>模拟心率</span>
          <strong>{heartRate} BPM</strong>
        </div>
      </section>

      <section className="rhythm-controls">
        <div className="control-heading">
          <div>
            <span className="eyebrow eyebrow--light">RHYTHM MODE</span>
            <h1>{rhythmMode}</h1>
          </div>
          <strong>{intensity}%</strong>
        </div>

        <div className="mode-segments" role="tablist" aria-label="律动模式">
          {modes.map((mode) => (
            <button
              key={mode}
              role="tab"
              aria-selected={rhythmMode === mode}
              className={rhythmMode === mode ? 'is-active' : ''}
              onClick={() => setRhythmMode(mode)}
            >
              {mode}
            </button>
          ))}
        </div>

        <label className="intensity-control">
          <span>律动强度</span>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={intensity}
            onChange={(event) => setIntensity(Number(event.target.value))}
          />
          <div><span>轻柔</span><span>强烈</span></div>
        </label>

        <div className="setting-row setting-row--dark">
          <div>
            <strong>随模拟心率调节</strong>
            <span>自动调整不超过当前强度上限</span>
          </div>
          <Toggle checked={monitoring} onChange={setMonitoring} label="随模拟心率调节" />
        </div>

        <div className="rhythm-actions">
          <button
            className="rhythm-play"
            onClick={() => {
              if (!connectedDevice) return notify('请先连接设备')
              if (intensity === 0) setIntensity(35)
              setRhythmActive(!rhythmActive)
            }}
          >
            {rhythmActive ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
            <span>{rhythmActive ? '暂停' : '开始'}</span>
          </button>
          <button className="rhythm-stop" onClick={stop}>
            <Square size={20} fill="currentColor" />
            <span>停止</span>
          </button>
        </div>

        <div className="safety-line"><Shield size={16} /> 点击“停止”会立即将模拟强度归零。</div>
      </section>
    </main>
  )
}
