import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { referenceScreens, referenceStyles } from './referenceScreens'
import { useApp } from '../state/useApp'
import { products } from '../data/products'
import { experienceProfile } from '../data/experienceProfile'

const routeToScreen = (route) => {
  if (route.startsWith('product/')) return 'explore'
  if (route === 'rhythm') return 'ai'
  return referenceScreens[route] ? route : 'home'
}

const defaultNavRoutes = ['home', 'explore', 'device', 'records', 'profile']
const homeProducts = products.filter((product) => product.category === '拾光系列').slice(0, 3)
const exploreProducts = homeProducts
const productMap = new Map(products.map((product) => [product.id, product]))

const formatPrice = (price) => `¥ ${Number(price).toLocaleString('en-US')}`

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const ReferenceCanvas = memo(function ReferenceCanvas({ screenKey, stageRef }) {
  return (
    <div
      ref={stageRef}
      className="reference-stage"
      dangerouslySetInnerHTML={{ __html: referenceScreens[screenKey] }}
    />
  )
})

export default function ReferenceApp() {
  const stageRef = useRef(null)
  const [adaptiveMode, setAdaptiveMode] = useState('自动')
  const [profileModelOpen, setProfileModelOpen] = useState(false)
  const {
    route,
    navigate,
    goBack,
    notify,
    toast,
    heartRate,
    rhythmFrequency,
    setRhythmFrequency,
    suctionLevel,
    setSuctionLevel,
    vibrationLevel,
    setVibrationLevel,
    extensionLevel,
    setExtensionLevel,
    connectedDevice,
    ringDevice,
    availableDevices,
    scanning,
    connect,
    startScan,
    favorites,
    toggleFavorite,
    rhythmActive,
    setRhythmActive,
    remoteControlAllowed,
    setRemoteControlAllowed,
  } = useApp()
  const screenKey = useMemo(() => routeToScreen(route), [route])
  const selectedProductId = useMemo(
    () => (route.startsWith('product/') ? route.slice('product/'.length) : null),
    [route],
  )

  useEffect(() => {
    const root = stageRef.current
    if (!root) return undefined

    const cleanups = []
    if (screenKey === 'home') {
      const legacySilhouette = root.querySelector('.p1 .model-silhouette')
      if (legacySilhouette) {
        const productSilhouette = document.createElement('img')
        productSilhouette.className = 'model-silhouette product-silhouette'
        productSilhouette.src = '/assets/shiguang-pleasure-source.png'
        productSilhouette.alt = '拾光·悦产品剪影'
        productSilhouette.decoding = 'async'
        legacySilhouette.replaceWith(productSilhouette)
      }
    }

    const listen = (selector, event, handler) => {
      root.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(event, handler)
        cleanups.push(() => element.removeEventListener(event, handler))
      })
    }
    const makeActivatable = (selector, handler) => {
      root.querySelectorAll(selector).forEach((element) => {
        element.tabIndex = 0
        element.setAttribute('role', 'button')
        const keyHandler = (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            handler(event)
          }
        }
        element.addEventListener('keydown', keyHandler)
        cleanups.push(() => element.removeEventListener('keydown', keyHandler))
      })
      listen(selector, 'click', handler)
    }
    const stop = (event) => event.stopPropagation()

    const navTargets = screenKey === 'ai'
      ? ['home', 'explore', 'ai', 'records', 'profile']
      : screenKey === 'couple'
        ? ['home', 'explore', 'device', 'records', 'couple']
        : defaultNavRoutes
    root.querySelectorAll('.bottom-nav .nav-item').forEach((item, index) => {
      const target = navTargets[index]
      if (!target) return
      item.tabIndex = 0
      item.setAttribute('role', 'button')
      const handleNav = () => navigate(target)
      const handleKey = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleNav()
        }
      }
      item.addEventListener('click', handleNav)
      item.addEventListener('keydown', handleKey)
      cleanups.push(() => {
        item.removeEventListener('click', handleNav)
        item.removeEventListener('keydown', handleKey)
      })
    })

    listen('.back-btn', 'click', goBack)
    listen('.p1 .btn-primary', 'click', () => navigate('explore'))
    listen('.p1 .btn-outline', 'click', () => notify('更多产品信息将在详情页开放'))

    const syncProductCard = (card, product) => {
      if (!card || !product) return
      card.dataset.productId = product.id
      const name = card.querySelector('.pname')
      const price = card.querySelector('.price')
      const imageArea = card.querySelector('.img-area')
      if (name) name.textContent = product.name
      if (price) price.textContent = formatPrice(product.price)
      if (imageArea && product.image) {
        let image = imageArea.querySelector('img.product-media')
        if (!image) {
          image = document.createElement('img')
          image.className = 'product-media'
          imageArea.append(image)
        }
        image.src = product.image
        image.alt = product.name
        image.loading = 'eager'
      }
      card.setAttribute('aria-label', `${product.name}，${formatPrice(product.price)}`)
    }
    root.querySelectorAll('.p1 .product-card').forEach((card, index) => syncProductCard(card, homeProducts[index]))
    root.querySelectorAll('.p2 .grid-card').forEach((card, index) => {
      const product = exploreProducts[index]
      if (product) syncProductCard(card, product)
      else card.remove()
    })

    makeActivatable('.p1 .product-card', (event) => {
      if (event.target.closest('.add-btn')) return
      const productId = event.currentTarget.dataset.productId
      if (productId) navigate(`product/${productId}`)
    })
    makeActivatable('.p1 .add-btn', (event) => {
      stop(event)
      const product = productMap.get(event.currentTarget.closest('.product-card')?.dataset.productId)
      notify(`${product?.name || '产品'} 已加入体验清单`, 'success')
    })

    const tagLabels = ['全部', '拾光系列', '情侣互动', '水剂护理', '推荐']
    root.querySelectorAll('.p2 .tag').forEach((tag, index) => {
      tag.textContent = tagLabels[index] || tag.textContent
      tag.dataset.category = tagLabels[index] || '全部'
      tag.setAttribute('aria-label', `筛选${tag.textContent}`)
    })

    const applyExploreFilter = (query = '', category = '全部') => {
      const normalizedQuery = query.trim().toLowerCase()
      root.querySelectorAll('.p2 .grid-card').forEach((card) => {
        const product = productMap.get(card.dataset.productId)
        const inCategory = category === '全部'
          || (category === '推荐' && ['shiguang-initial', 'shiguang-pleasure'].includes(product?.id))
          || product?.category === category
        const inQuery = !normalizedQuery || `${product?.name || ''} ${product?.category || ''}`.toLowerCase().includes(normalizedQuery)
        card.style.display = inCategory && inQuery ? '' : 'none'
      })
    }
    const searchInput = root.querySelector('.p2 .search-bar input')
    let activeCategory = root.querySelector('.p2 .tag.active')?.dataset.category || '全部'
    listen('.p2 .search-bar input', 'input', (event) => applyExploreFilter(event.currentTarget.value, activeCategory))
    makeActivatable('.p2 .tag', (event) => {
      root.querySelectorAll('.p2 .tag').forEach((tag) => {
        tag.classList.toggle('active', tag === event.currentTarget)
        tag.classList.toggle('inactive', tag !== event.currentTarget)
      })
      activeCategory = event.currentTarget.dataset.category || '全部'
      applyExploreFilter(searchInput?.value || '', activeCategory)
    })

    makeActivatable('.p2 .grid-card', (event) => {
      if (event.target.closest('.heart-btn')) return
      const productId = event.currentTarget.dataset.productId
      if (productId) navigate(`product/${productId}`)
    })
    makeActivatable('.p2 .heart-btn', (event) => {
      stop(event)
      const productId = event.currentTarget.closest('.grid-card')?.dataset.productId
      if (productId) toggleFavorite(productId)
    })

    root.querySelectorAll('.p2 .heart-btn').forEach((button) => {
      const productId = button.closest('.grid-card')?.dataset.productId
      button.classList.toggle('is-favorite', Boolean(productId && favorites.has(productId)))
      button.setAttribute('aria-label', favorites.has(productId) ? '取消收藏' : '加入收藏')
    })

    root.querySelectorAll('.p3 .device-card').forEach((card, index) => {
      const device = availableDevices[index]
      const isConnected = Boolean(device && connectedDevice?.id === device.id)
      card.dataset.deviceId = device?.id || ''
      card.style.display = device ? '' : 'none'
      card.style.opacity = scanning ? '0.62' : '1'
      card.setAttribute('aria-label', device
        ? `${isConnected ? '进入 AI 律动' : (scanning ? '搜索中' : '点击连接')}：${device.name}`
        : '暂无设备')
      const name = card.querySelector('.device-name')
      const status = card.querySelector('.device-status')
      const icon = card.querySelector('.device-icon')
      if (name) name.textContent = device?.name || '搜索中…'
      if (icon) icon.className = `device-icon ${isConnected ? 'connected' : 'disconnected'}`
      if (status) {
        status.classList.toggle('is-connected', isConnected)
        const label = status.querySelector('span')
        if (label) label.textContent = scanning ? '正在搜索…' : (isConnected ? '已连接' : '点击连接 ›')
        const dot = status.querySelector('.status-dot')
        if (dot) dot.className = `status-dot ${isConnected ? 'green' : 'gray'}`
      }

      const syncBadge = card.querySelector('.device-ai-entry')
        || [...card.querySelectorAll('div')].find((element) => element.textContent.trim() === '心率同步 ON')
      if (syncBadge) {
        syncBadge.classList.toggle('device-ai-entry', isConnected)
        if (isConnected) {
          syncBadge.innerHTML = `
            <svg class="device-ai-entry-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
              <path d="M12 3.5l1.7 5.3L19 10.5l-5.3 1.7L12 17.5l-1.7-5.3L5 10.5l5.3-1.7L12 3.5z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
              <path d="M18.5 16.5v4M16.5 18.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="device-ai-entry-text">AI</span>
          `
          syncBadge.title = '进入 AI 律动'
        } else {
          syncBadge.textContent = '心率同步 ON'
          syncBadge.removeAttribute('title')
        }
        syncBadge.setAttribute('aria-label', isConnected ? `进入 ${device.name} 的 AI 律动` : '心率同步已开启')
        syncBadge.tabIndex = isConnected ? 0 : -1
        syncBadge.setAttribute('role', isConnected ? 'button' : 'status')
        if (isConnected) {
          const handleAiEntry = (event) => {
            stop(event)
            navigate('ai')
            notify(`${device.name} 已连接，进入 AI 律动`, 'success')
          }
          const handleAiEntryKey = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              handleAiEntry(event)
            }
          }
          syncBadge.addEventListener('click', handleAiEntry)
          syncBadge.addEventListener('keydown', handleAiEntryKey)
          cleanups.push(() => {
            syncBadge.removeEventListener('click', handleAiEntry)
            syncBadge.removeEventListener('keydown', handleAiEntryKey)
          })
        }
      }
    })
    makeActivatable('.p3 .device-card', (event) => {
      if (scanning) return
      const device = availableDevices.find((item) => item.id === event.currentTarget.dataset.deviceId)
      if (device && connectedDevice?.id !== device.id) connect(device)
      else if (device) {
        navigate('ai')
        notify(`${device.name} 已连接，进入 AI 律动`, 'success')
      }
    })
    listen('.p3 .add-device-btn', 'click', () => startScan())
    const scanButton = root.querySelector('.p3 .add-device-btn')
    if (scanButton) {
      scanButton.disabled = scanning
      scanButton.classList.toggle('is-scanning', scanning)
      const label = [...scanButton.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim())
      if (label) label.textContent = scanning ? ' 正在搜索设备…' : ' 添加新设备'
    }

    makeActivatable('.p5 .mode-card', (event) => {
      const wasActive = event.currentTarget.classList.contains('active') && rhythmActive
      root.querySelectorAll('.p5 .mode-card').forEach((card) => card.classList.remove('active'))
      event.currentTarget.classList.add('active')
      setRhythmActive(!wasActive)
      notify(wasActive ? 'AI 律动已暂停' : `已切换${event.currentTarget.querySelector('.mode-name')?.textContent || 'AI'}模式`, 'success')
    })
    const bannerSub = root.querySelector('.p5 .banner-sub')
    if (bannerSub) bannerSub.textContent = rhythmActive ? '心率数据实时传输中…' : '待机中，点击律动模式开始'
    const safeStop = root.querySelector('.p5 .safe-stop-command')
    if (safeStop) {
      safeStop.classList.toggle('is-paused', !rhythmActive)
      safeStop.textContent = rhythmActive ? '安全停止' : '已暂停'
      safeStop.disabled = !rhythmActive
    }

    makeActivatable('.p6 .sync-mode-card', (event) => {
      root.querySelectorAll('.p6 .sync-mode-card').forEach((card) => card.classList.remove('active'))
      event.currentTarget.classList.add('active')
      notify(`已切换${event.currentTarget.querySelector('.sm-name')?.textContent || '同步'}模式`, 'success')
    })
    listen('.p6 .sc-toggle', 'click', () => {
      setRemoteControlAllowed(!remoteControlAllowed)
      notify(remoteControlAllowed ? '远程控制已关闭' : '远程控制已开启')
    })
    const coupleToggle = root.querySelector('.p6 .sc-toggle')
    if (coupleToggle) {
      coupleToggle.classList.toggle('is-disabled', !remoteControlAllowed)
      coupleToggle.setAttribute('aria-label', remoteControlAllowed ? '关闭远程控制' : '开启远程控制')
    }

    listen('.p7 .edit-btn-profile', 'click', () => notify('资料编辑将在账号服务接入后开放'))
    makeActivatable('.p7 .device-mini-card', (event) => {
      if (event.currentTarget.textContent.includes('添加')) startScan()
      else navigate('device')
    })
    makeActivatable('.p7 .menu-item', () => notify('账户服务将在后端接入后开放'))
    listen('.p7 .logout-btn', 'click', () => notify('演示环境不会执行真实退出'))

    root.querySelectorAll('.ai-recommend-strip, .home-rhythm-control, .adaptive-engine-card, .experience-history-card, .profile-model-card, .ring-status-card, .frequency-control-card, .actuator-control-card').forEach((element) => element.remove())

    const homeCarousel = root.querySelector('.p1 .carousel-section')
    if (homeCarousel) {
      const homeControl = document.createElement('section')
      homeControl.className = ['home-rhythm-control', rhythmActive && 'is-active', connectedDevice ? 'has-device' : 'is-disconnected']
        .filter(Boolean)
        .join(' ')
      homeControl.setAttribute('aria-label', 'AI 律动主控制')
      homeControl.innerHTML = `
        <div class="home-rhythm-main">
          <div class="home-rhythm-kicker"><span class="home-rhythm-live"></span>AI 律动控制</div>
          <div class="home-rhythm-title">${escapeHtml(experienceProfile.recommendation.title)}</div>
          <div class="home-rhythm-status"><span class="home-rhythm-status-dot"></span>${connectedDevice ? `${escapeHtml(connectedDevice.name)} · ${rhythmFrequency} Hz` : '未连接设备'}</div>
        </div>
        <div class="home-rhythm-actions">
          <button class="home-rhythm-toggle ${rhythmActive ? 'is-active' : ''}" type="button" aria-label="${rhythmActive ? '暂停 AI 律动' : '启动 AI 律动'}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
              ${rhythmActive
                ? '<path d="M8 6v12M16 6v12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>'
                : '<path d="M8 5.5v13l10-6.5-10-6.5z" fill="currentColor"/>'}
            </svg>
            <span>${rhythmActive ? '暂停' : '启动'}</span>
          </button>
          <button class="home-rhythm-detail" type="button" aria-label="打开 AI 律动详情" title="打开 AI 律动详情">›</button>
        </div>
      `
      homeCarousel.prepend(homeControl)
      const handleHomeToggle = (event) => {
        stop(event)
        if (!connectedDevice) {
          navigate('device')
          notify('请先连接设备，再启动 AI 律动')
          return
        }
        setRhythmActive(!rhythmActive)
        notify(rhythmActive ? 'AI 律动已暂停' : 'AI 律动已启动', 'success')
      }
      const handleHomeDetail = () => {
        navigate('ai')
        notify('已打开 AI 律动控制台', 'success')
      }
      homeControl.querySelector('.home-rhythm-toggle')?.addEventListener('click', handleHomeToggle)
      homeControl.querySelector('.home-rhythm-detail')?.addEventListener('click', handleHomeDetail)
      cleanups.push(() => {
        homeControl.querySelector('.home-rhythm-toggle')?.removeEventListener('click', handleHomeToggle)
        homeControl.querySelector('.home-rhythm-detail')?.removeEventListener('click', handleHomeDetail)
      })
    }

    const recordsContent = root.querySelector('.p4 .page-content')
    if (recordsContent) {
      const historyCard = document.createElement('section')
      historyCard.className = 'experience-history-card'
      historyCard.innerHTML = `
        <div class="experience-history-head">
          <div>
            <div class="experience-history-kicker">体验记录</div>
            <div class="experience-history-title">最近体验</div>
          </div>
          <span class="simulation-badge">演示数据</span>
        </div>
        <div class="history-list">
          ${experienceProfile.history.map((entry) => `
            <div class="history-row">
              <div class="history-date">${escapeHtml(entry.date)}</div>
              <div class="history-main"><strong>${escapeHtml(entry.mode)}</strong><span>${escapeHtml(entry.duration)} · ${escapeHtml(entry.feedback)}</span></div>
              <button class="history-feedback" type="button" data-feedback="${escapeHtml(entry.mode)}">记录偏好</button>
            </div>
          `).join('')}
        </div>
      `
      recordsContent.append(historyCard)
      listen('.p4 .history-feedback', 'click', (event) => {
        notify(`已记录「${event.currentTarget.dataset.feedback}」偏好，供 AI 模型学习`, 'success')
      })
    }

    const aiPageContent = root.querySelector('.p5 .page-content')
    if (aiPageContent) {
      const engineCard = document.createElement('section')
      const adaptiveCopy = {
        自动: '根据心率趋势与设备反馈动态调整',
        自定义: '保留你的手动强度与节奏设置',
        历史: '沿用最近一次收藏的体验模式',
      }
      engineCard.className = 'adaptive-engine-card'
      engineCard.innerHTML = `
        <div class="adaptive-engine-head">
          <div>
            <div class="adaptive-kicker">HeartSync AI Engine</div>
            <div class="adaptive-title">AI 自适应体验引擎</div>
          </div>
          <span class="simulation-badge">${escapeHtml(experienceProfile.dataMode)}</span>
        </div>
        <div class="adaptive-flow">
          <div><span>输入</span>${experienceProfile.inputs.map((item) => `<b>${escapeHtml(item)}</b>`).join('')}</div>
          <div class="adaptive-flow-arrow">→</div>
          <div><span>输出</span>${experienceProfile.outputs.map((item) => `<b>${escapeHtml(item)}</b>`).join('')}</div>
        </div>
        <div class="adaptive-tabs" role="tablist" aria-label="体验模式">
          ${['自动', '自定义', '历史'].map((mode) => `<button class="adaptive-tab ${adaptiveMode === mode ? 'active' : ''}" type="button" data-mode="${mode}" role="tab" aria-selected="${adaptiveMode === mode}">${mode}模式</button>`).join('')}
        </div>
        <div class="adaptive-status">${adaptiveCopy[adaptiveMode]}</div>
        <button class="adaptive-apply" type="button">采用 AI 推荐节奏</button>
      `
      const actuatorConfigs = [
        { id: 'suction', name: '吮吸', value: suctionLevel, minLabel: '轻柔', maxLabel: '增强', setter: setSuctionLevel },
        { id: 'vibration', name: '震动', value: vibrationLevel, minLabel: '细腻', maxLabel: '强劲', setter: setVibrationLevel },
        { id: 'extension', name: '伸缩', value: extensionLevel, minLabel: '短促', maxLabel: '延展', setter: setExtensionLevel },
      ]
      const actuatorCard = document.createElement('section')
      actuatorCard.className = 'actuator-control-card'
      actuatorCard.innerHTML = `
        <div class="actuator-head">
          <div>
            <div class="actuator-kicker">DEVICE CONTROL</div>
            <div class="actuator-title">动作控制</div>
          </div>
          <span class="simulation-badge">演示控制</span>
        </div>
        <div class="actuator-status">
          <span class="actuator-status-dot ${connectedDevice ? 'is-connected' : ''}"></span>
          <span>${connectedDevice ? `已连接 ${escapeHtml(connectedDevice.name)} · 三通道可调` : '未连接设备 · 先连接后调节'}</span>
        </div>
        <div class="actuator-list">
          ${actuatorConfigs.map((config) => `
            <div class="actuator-row" data-actuator="${config.id}">
              <div class="actuator-row-head">
                <div class="actuator-name-wrap"><span class="actuator-mark">${config.name.slice(0, 1)}</span><span class="actuator-name">${config.name}</span></div>
                <strong class="actuator-value">${config.value}%</strong>
              </div>
              <div class="actuator-slider ${connectedDevice ? '' : 'is-disabled'}" role="slider" aria-label="${config.name}强度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${config.value}" aria-valuetext="${config.value}%" aria-disabled="${!connectedDevice}" tabindex="0">
                <div class="actuator-fill"></div>
                <div class="actuator-thumb"></div>
              </div>
              <div class="actuator-scale"><span>${config.minLabel}</span><span>${config.maxLabel}</span></div>
            </div>
          `).join('')}
        </div>
        <div class="actuator-note">三通道调节仅作用于当前模拟律动</div>
      `
      const intensityCard = aiPageContent.querySelector('.intensity-card')
      intensityCard?.remove()
      aiPageContent.append(actuatorCard, engineCard)
      const actuatorSetters = Object.fromEntries(actuatorConfigs.map((config) => [config.id, config.setter]))
      const actuatorNames = Object.fromEntries(actuatorConfigs.map((config) => [config.id, config.name]))
      listen('.p5 .actuator-slider', 'click', (event) => {
        if (!connectedDevice) {
          notify('请先连接设备，再调节动作强度')
          return
        }
        const slider = event.currentTarget
        const actuatorId = slider.closest('.actuator-row')?.dataset.actuator
        const rect = slider.getBoundingClientRect()
        const next = Math.round(Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)) * 100)
        actuatorSetters[actuatorId]?.(next)
        notify(`${actuatorNames[actuatorId] || '动作'}已调整为 ${next}%`, 'success')
      })
      root.querySelectorAll('.p5 .actuator-slider').forEach((slider) => {
        const handleActuatorKey = (event) => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
          event.preventDefault()
          if (!connectedDevice) {
            notify('请先连接设备，再调节动作强度')
            return
          }
          const actuatorId = slider.closest('.actuator-row')?.dataset.actuator
          const current = Number(slider.getAttribute('aria-valuenow') || 0)
          const next = event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? 100
              : Math.max(0, Math.min(100, current + (event.key === 'ArrowRight' ? 1 : -1)))
          actuatorSetters[actuatorId]?.(next)
          notify(`${actuatorNames[actuatorId] || '动作'}已调整为 ${next}%`, 'success')
        }
        slider.addEventListener('keydown', handleActuatorKey)
        cleanups.push(() => slider.removeEventListener('keydown', handleActuatorKey))
      })
      makeActivatable('.p5 .adaptive-tab', (event) => {
        const mode = event.currentTarget.dataset.mode || '自动'
        setAdaptiveMode(mode)
        notify(`已切换${mode}模式`)
      })
      listen('.p5 .adaptive-apply', 'click', () => {
        setRhythmActive(true)
        setSuctionLevel(54)
        setVibrationLevel(62)
        setExtensionLevel(38)
        setRhythmFrequency(12)
        notify('已采用 AI 推荐：跟随 · 中等律动', 'success')
      })
    }

    const profileContent = root.querySelector('.p7 .page-content')
    if (profileContent) {
      const modelCard = document.createElement('section')
      modelCard.className = 'profile-model-card'
      modelCard.innerHTML = `
        <div class="profile-model-head">
          <div>
            <div class="profile-model-kicker">Personal Experience Profile</div>
            <div class="profile-model-title">个人体验模型</div>
          </div>
          <span class="simulation-badge">待学习</span>
        </div>
        <div class="profile-preference-row">
          ${experienceProfile.preferredModes.map((mode, index) => `<span class="profile-preference ${index === 0 ? 'is-primary' : ''}">${escapeHtml(mode.name)}</span>`).join('')}
        </div>
        <div class="profile-model-note">${escapeHtml(experienceProfile.recommendation.reason)}</div>
        <button class="model-insight-trigger" type="button">${profileModelOpen ? '收起洞察' : '查看洞察'}</button>
        ${profileModelOpen ? `<div class="model-insight-detail">偏好模式：${escapeHtml(experienceProfile.preferredModes[0].name)} · 最近反馈将用于下一次推荐。</div>` : ''}
      `
      const healthCard = profileContent.querySelector('.health-card')
      if (healthCard) healthCard.after(modelCard)
      else profileContent.prepend(modelCard)
      listen('.p7 .model-insight-trigger', 'click', () => setProfileModelOpen((value) => !value))
    }

    const ringCandidate = ringDevice || availableDevices.find((device) => device.type === 'ring')
    const devicesSection = root.querySelector('.p3 .devices-section')
    if (devicesSection && ringCandidate) {
      const ringCard = document.createElement('div')
      ringCard.className = 'ring-status-card'
      ringCard.innerHTML = `
        <div class="ring-status-icon">◌</div>
        <div class="ring-status-copy"><strong>Smart Ring R1</strong><span>${ringDevice ? 'PPG · HRV · 温度 · 已连接' : '扫描到 Smart Ring · 点击连接'}</span></div>
        <span class="ring-status-arrow">›</span>
      `
      devicesSection.append(ringCard)
      makeActivatable('.p3 .ring-status-card', () => {
        if (ringDevice) notify('Smart Ring R1 已连接')
        else connect(ringCandidate)
      })
    }

    const updateText = (selector, value) => {
      const element = root.querySelector(selector)
      if (element) element.textContent = value
    }
    updateText('.p4 .hr-number', String(heartRate))
    updateText('.p5 .dial-bpm-val', String(heartRate))
    updateText('.p5 .dial-freq', `〜 ${rhythmFrequency} Hz`)
    updateText('.p5 .banner-dev', connectedDevice?.name || 'SHAKI Pro S1')
    updateText('.p7 .hm-val', String(heartRate))
    updateText('.p7 .stat-col:nth-child(3) .s-val', String(heartRate))
    const actuatorLevels = { suction: suctionLevel, vibration: vibrationLevel, extension: extensionLevel }
    root.querySelectorAll('.p5 .actuator-row').forEach((row) => {
      const level = actuatorLevels[row.dataset.actuator]
      if (typeof level !== 'number') return
      const value = row.querySelector('.actuator-value')
      if (value) value.textContent = `${level}%`
      const slider = row.querySelector('.actuator-slider')
      const fill = row.querySelector('.actuator-fill')
      const thumb = row.querySelector('.actuator-thumb')
      if (slider) {
        slider.setAttribute('aria-valuenow', String(level))
        slider.setAttribute('aria-valuetext', `${level}%`)
        slider.setAttribute('aria-disabled', String(!connectedDevice))
        slider.classList.toggle('is-disabled', !connectedDevice)
      }
      if (fill) fill.style.width = `${level}%`
      if (thumb) thumb.style.left = `${level}%`
    })
    updateText('.p5 .actuator-status span:last-child', connectedDevice ? `已连接 ${connectedDevice.name} · 三通道可调` : '未连接设备 · 先连接后调节')
    root.querySelectorAll('.p5 .data-card').forEach((card) => {
      if (!card.querySelector('.dc-label')?.textContent.includes('设备频率')) return
      const value = card.querySelector('.dc-val')
      if (value) value.textContent = `${rhythmFrequency} Hz`
    })

    const pageContent = root.querySelector('.p5 .page-content')
    if (pageContent && !pageContent.querySelector('.safe-stop-command')) {
      const button = document.createElement('button')
      button.className = 'safe-stop-command'
      button.type = 'button'
      pageContent.append(button)
    }
    const safeStopButton = root.querySelector('.p5 .safe-stop-command')
    if (safeStopButton) {
      safeStopButton.textContent = rhythmActive ? '安全停止' : '已暂停'
      safeStopButton.disabled = !rhythmActive
      safeStopButton.classList.toggle('is-paused', !rhythmActive)
      const handleStop = () => {
        setRhythmActive(false)
        notify('AI 律动已安全停止')
      }
      safeStopButton.addEventListener('click', handleStop)
      cleanups.push(() => safeStopButton.removeEventListener('click', handleStop))
    }

    const detailRoot = root.querySelector('.product-detail-backdrop')
    detailRoot?.remove()
    const selectedProduct = selectedProductId ? productMap.get(selectedProductId) : null
    if (selectedProduct) {
      const backdrop = document.createElement('div')
      backdrop.className = 'product-detail-backdrop'
      const featureMarkup = (selectedProduct.features || [])
        .map((feature) => `<span class="product-detail-feature">${escapeHtml(feature)}</span>`)
        .join('')
      backdrop.innerHTML = `
        <section class="product-detail-sheet" role="dialog" aria-modal="true" aria-label="${escapeHtml(selectedProduct.name)}详情">
          <button class="product-detail-close" type="button" aria-label="关闭详情">×</button>
          <div class="product-detail-image"><img src="${selectedProduct.image}" alt="${escapeHtml(selectedProduct.name)}" /></div>
          <div class="product-detail-copy">
            <div class="product-detail-kicker">${escapeHtml(selectedProduct.category)} · ${escapeHtml(selectedProduct.label)}</div>
            <h2>${escapeHtml(selectedProduct.name)}</h2>
            <div class="product-detail-price">${formatPrice(selectedProduct.price)}</div>
            <p>${escapeHtml(selectedProduct.description)}</p>
            ${featureMarkup ? `<div class="product-detail-features" aria-label="产品功能">${featureMarkup}</div>` : ''}
            <div class="product-detail-actions">
              <button class="product-detail-favorite" type="button">${favorites.has(selectedProduct.id) ? '已收藏' : '加入收藏'}</button>
              <button class="product-detail-primary" type="button">加入体验清单</button>
            </div>
          </div>
        </section>
      `
      root.append(backdrop)
      const close = () => navigate('explore')
      backdrop.addEventListener('click', (event) => { if (event.target === backdrop) close() })
      backdrop.querySelector('.product-detail-close')?.addEventListener('click', close)
      backdrop.querySelector('.product-detail-favorite')?.addEventListener('click', () => {
        toggleFavorite(selectedProduct.id)
        notify(favorites.has(selectedProduct.id) ? '已取消收藏' : '已加入收藏', 'success')
      })
      backdrop.querySelector('.product-detail-primary')?.addEventListener('click', () => {
        notify(`${selectedProduct.name} 已加入体验清单`, 'success')
        close()
      })
    }

    applyExploreFilter(searchInput?.value || '', activeCategory)
    return () => cleanups.forEach((cleanup) => cleanup())
  }, [screenKey, selectedProductId, navigate, goBack, notify, heartRate, rhythmFrequency, setRhythmFrequency, suctionLevel, setSuctionLevel, vibrationLevel, setVibrationLevel, extensionLevel, setExtensionLevel, connectedDevice, ringDevice, availableDevices, scanning, connect, startScan, favorites, toggleFavorite, rhythmActive, setRhythmActive, remoteControlAllowed, setRemoteControlAllowed, adaptiveMode, profileModelOpen])

  return (
    <div className="reference-app">
      <style dangerouslySetInnerHTML={{ __html: referenceStyles }} />
      <ReferenceCanvas screenKey={screenKey} stageRef={stageRef} />
      {toast ? <div className={`reference-toast reference-toast--${toast.tone || 'default'}`} role="status">{toast.message}</div> : null}
    </div>
  )
}
