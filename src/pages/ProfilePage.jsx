import { Bluetooth, ChevronRight, Gift, Heart, LockKeyhole, LogOut, Package, Settings, ShieldCheck, Users } from 'lucide-react'
import IconButton from '../components/IconButton'
import PageHeader from '../components/PageHeader'
import { useApp } from '../state/useApp'

const menuItems = [
  { icon: Package, title: '我的订单', detail: '购买记录与物流', badge: '2 件待收' },
  { icon: Heart, title: '我的收藏', detail: '已收藏的产品与内容' },
  { icon: LockKeyhole, title: '隐私与安全', detail: '权限、数据与安全停止' },
  { icon: Gift, title: '会员权益', detail: '积分与专属服务', badge: 'VIP' },
]

export default function ProfilePage() {
  const { favorites, connectedDevice, coupleLinked, navigate, notify } = useApp()

  return (
    <main className="page profile-page">
      <section className="profile-cover">
        <PageHeader
          transparent
          action={<IconButton label="设置"><Settings size={20} /></IconButton>}
        />
        <div className="profile-cover__mirror" />
      </section>

      <section className="profile-identity page-enter">
        <div className="profile-avatar">A<span>VIP</span></div>
        <button className="button button--quiet" onClick={() => notify('资料编辑将在账号 API 接入后开放')}>编辑资料</button>
        <h1>Aria S.</h1>
        <p>@aria_shaki · 上海</p>
        <div className="profile-tags"><span>VIP 会员</span><span>SINCE 2022</span></div>
      </section>

      <section className="profile-stats">
        <div><strong>128</strong><span>使用天数</span></div>
        <div><strong>{connectedDevice ? 1 : 0}</strong><span>在线设备</span></div>
        <div><strong>{favorites.size}</strong><span>收藏</span></div>
      </section>

      <section className="content-section profile-device">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MY DEVICE</span>
            <h2>我的设备</h2>
          </div>
          <button className="text-button" onClick={() => navigate('device')}>管理</button>
        </div>
        <button className="profile-device__row" onClick={() => navigate('device')}>
          <div className="device-symbol"><Bluetooth size={21} /></div>
          <div>
            <strong>{connectedDevice?.name || '连接新设备'}</strong>
            <span>{connectedDevice ? `${connectedDevice.model} · 在线` : '开始扫描附近设备'}</span>
          </div>
          <ChevronRight size={20} />
        </button>
      </section>

      <section className="content-section product-entry">
        <div>
          <span className="eyebrow">PRODUCTS</span>
          <h2>探索 SHAKI 产品</h2>
          <p>查看拾光系列、情侣互动与护理产品。</p>
        </div>
        <button className="icon-button" aria-label="进入产品探索" title="进入产品探索" onClick={() => navigate('explore')}><ChevronRight size={20} /></button>
      </section>

      <section className="content-section couple-entry">
        <div className="couple-entry__icon"><Users size={22} /></div>
        <div>
          <span className="eyebrow">COUPLE SYNC</span>
          <h2>{coupleLinked ? 'Ta 正在线' : '情侣同步'}</h2>
          <p>{coupleLinked ? '查看本次授权和连接状态。' : '在双方确认后建立远程连接。'}</p>
        </div>
        <button className="icon-button" aria-label="进入情侣同步" title="进入情侣同步" onClick={() => navigate('couple')}><ChevronRight size={20} /></button>
      </section>

      <section className="content-section account-menu">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ACCOUNT</span>
            <h2>账户</h2>
          </div>
        </div>
        {menuItems.map(({ icon: Icon, title, detail, badge }) => (
          <button className="menu-row" key={title} onClick={() => notify(`${title}将在后端 API 接入后开放`)}>
            <span className="menu-row__icon"><Icon size={19} /></span>
            <span className="menu-row__copy"><strong>{title}</strong><small>{detail}</small></span>
            {badge && <i>{badge}</i>}
            <ChevronRight size={18} />
          </button>
        ))}
      </section>

      <section className="privacy-note profile-trust">
        <ShieldCheck size={20} />
        <p><strong>隐私优先</strong> App 原型不会上传或持久化敏感生理数据。</p>
      </section>

      <button className="logout-command" onClick={() => notify('演示环境不会执行真实退出')}><LogOut size={17} />退出登录</button>
    </main>
  )
}
