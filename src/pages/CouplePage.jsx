import { Check, Copy, Link2, MessageCircle, ShieldCheck, Square, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Toggle from '../components/Toggle'
import { useApp } from '../state/useApp'

export default function CouplePage() {
  const {
    coupleLinked,
    setCoupleLinked,
    remoteControlAllowed,
    setRemoteControlAllowed,
    setRhythmActive,
    notify,
  } = useApp()

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText('SHAKI-7286')
      notify('邀请口令已复制', 'success')
    } catch {
      notify('邀请口令：SHAKI-7286')
    }
  }

  const stopRemote = () => {
    setRhythmActive(false)
    setRemoteControlAllowed(false)
    notify('远程控制已停止')
  }

  return (
    <main className="page focus-page couple-page">
      <PageHeader back title="情侣同步" eyebrow={coupleLinked ? '已连接' : '等待邀请'} />

      <section className="couple-hero page-enter">
        <div className="couple-orbit">
          <div className="couple-avatar">A</div>
          <span><Link2 size={22} /></span>
          <div className="couple-avatar couple-avatar--partner">T</div>
        </div>
        <span className="eyebrow">CONSENT FIRST</span>
        <h1>{coupleLinked ? '双向连接已建立' : '共同决定每一次连接'}</h1>
        <p>{coupleLinked ? '双方都可以随时暂停、撤回权限或结束连接。' : '邀请只建立关系，不会自动开放设备控制权限。'}</p>
      </section>

      {!coupleLinked ? (
        <section className="invite-panel">
          <span>我的邀请口令</span>
          <div className="invite-code">
            <strong>SHAKI-7286</strong>
            <button className="icon-button" aria-label="复制邀请口令" title="复制邀请口令" onClick={copyCode}><Copy size={19} /></button>
          </div>
          <p>口令将在 15 分钟后失效，仅供本次交互演示。</p>
          <button className="button button--primary" onClick={() => setCoupleLinked(true)}>
            <Users size={18} />模拟接受邀请
          </button>
        </section>
      ) : (
        <section className="partner-panel">
          <div className="partner-panel__identity">
            <div className="couple-avatar couple-avatar--partner">T</div>
            <div><strong>Ta 已在线</strong><span><Check size={14} /> 双向确认完成</span></div>
            <MessageCircle size={20} />
          </div>
          <div className="setting-row">
            <div>
              <strong>允许远程控制</strong>
              <span>本次连接有效，可随时关闭</span>
            </div>
            <Toggle checked={remoteControlAllowed} onChange={setRemoteControlAllowed} label="允许远程控制" />
          </div>
          <div className="setting-row">
            <div>
              <strong>共享模拟心率</strong>
              <span>只显示趋势，不展示历史记录</span>
            </div>
            <Toggle checked={false} onChange={() => notify('模拟心率共享保持关闭')} label="共享模拟心率" />
          </div>
          <button className="button button--danger" onClick={stopRemote}>
            <Square size={17} fill="currentColor" />立即停止远程控制
          </button>
          <button className="text-button text-button--center" onClick={() => {
            setCoupleLinked(false)
            setRemoteControlAllowed(false)
          }}>解除本次配对</button>
        </section>
      )}

      <section className="privacy-note couple-privacy">
        <ShieldCheck size={20} />
        <p><strong>授权边界</strong> 对方不能绕过你的开关；停止与撤回权限始终在本机生效。</p>
      </section>
    </main>
  )
}
