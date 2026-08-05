import { Activity, BatteryMedium, Bluetooth, Check, Power, Radio, RefreshCw, ShieldCheck, Wifi } from 'lucide-react'
import MirrorPulse from '../components/MirrorPulse'
import PageHeader from '../components/PageHeader'
import Toggle from '../components/Toggle'
import { useApp } from '../state/useApp'

export default function DevicePage() {
  const {
    connectedDevice,
    ringDevice,
    availableDevices,
    scanning,
    startScan,
    connect,
    disconnect,
    monitoring,
    setMonitoring,
  } = useApp()

  return (
    <main className="page device-page">
      <PageHeader back title="设备连接" />

      <section className="device-stage">
        <span className="simulation-badge">模拟连接</span>
        <MirrorPulse active={Boolean(connectedDevice)} label={connectedDevice ? '已安全连接' : '等待连接'} size="large" />
        <strong>{connectedDevice?.name || '附近没有已连接设备'}</strong>
        <span>{connectedDevice?.model || '扫描并选择你的 SHAKI 设备'}</span>
      </section>

      {connectedDevice && (
        <section className="connected-panel page-enter">
          <div className="connected-panel__row">
            <div className="device-symbol"><Bluetooth size={22} /></div>
            <div>
              <strong>{connectedDevice.name}</strong>
              <span><Wifi size={14} /> 信号稳定</span>
            </div>
            <div className="battery-value"><BatteryMedium size={18} /> {connectedDevice.battery}%</div>
          </div>
          <div className="setting-row">
            <div>
              <strong>同步模拟心率</strong>
              <span>用于预览 AI 自动调节流程</span>
            </div>
            <Toggle checked={monitoring} onChange={setMonitoring} label="同步模拟心率" />
          </div>
          <button className="button button--quiet" onClick={disconnect}>
            <Power size={17} />断开设备
          </button>
        </section>
      )}

      <section className="sensor-summary">
        <div className="sensor-summary__icon"><Activity size={21} /></div>
        <div>
          <strong>{ringDevice?.name || 'HeartSync Ring'}</strong>
          <span>{ringDevice ? `${ringDevice.model} · 电量 ${ringDevice.battery}%` : '未连接 · Phase 2 增强设备'}</span>
        </div>
        <span className={`sensor-state ${ringDevice ? 'is-on' : ''}`}>{ringDevice ? '在线' : '待连接'}</span>
      </section>

      <section className="content-section nearby-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">NEARBY</span>
            <h2>附近设备</h2>
          </div>
          <button className="text-button" onClick={startScan} disabled={scanning}>
            <RefreshCw size={15} className={scanning ? 'spin' : ''} />
            {scanning ? '扫描中' : '重新扫描'}
          </button>
        </div>

        {availableDevices.length === 0 ? (
          <button className="scan-empty" onClick={startScan} disabled={scanning}>
            <Radio size={28} />
            <strong>{scanning ? '正在寻找设备…' : '扫描附近设备'}</strong>
            <span>请确保设备已开机并靠近手机。</span>
          </button>
        ) : (
          <div className="device-list">
            {availableDevices.map((device) => {
              const isConnected = device.type === 'ring' ? ringDevice?.id === device.id : connectedDevice?.id === device.id
              return (
                <article className="device-list-item" key={device.id}>
                  <div className="device-symbol"><Bluetooth size={20} /></div>
                  <div>
                    <strong>{device.name}</strong>
                    <span>{device.model} · 电量 {device.battery}%</span>
                  </div>
                  <button className={`mini-command ${isConnected ? 'is-connected' : ''}`} onClick={() => !isConnected && connect(device)}>
                    {isConnected ? <Check size={16} /> : '连接'}
                  </button>
                </article>
              )
            })}
          </div>
        )}
        <button className="add-device-command" onClick={startScan}>
          <span>+</span> 添加新设备
        </button>
      </section>

      <section className="privacy-note">
        <ShieldCheck size={19} />
        <p><strong>隐私连接</strong> 当前为前端模拟，未读取或上传真实蓝牙与生理数据。</p>
      </section>
    </main>
  )
}
