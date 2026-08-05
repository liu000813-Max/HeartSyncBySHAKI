export const experienceProfile = Object.freeze({
  dataMode: 'simulation',
  recommendation: {
    title: '跟随 · 中等律动',
    reason: '结合当前心率趋势与最近偏好生成的演示推荐',
  },
  inputs: ['心率趋势', '设备反馈', '历史偏好'],
  outputs: ['模式推荐', '强度调整', '节奏优化'],
  preferredModes: [
    { name: '跟随', note: '实时跟随心率变化' },
    { name: '渐强', note: '循序调整节奏' },
    { name: '节拍', note: '按心跳保持同步' },
  ],
  history: [
    { date: '昨晚', mode: '跟随', duration: '12 分钟', feedback: '舒适' },
    { date: '周二', mode: '渐强', duration: '18 分钟', feedback: '已收藏' },
  ],
})
