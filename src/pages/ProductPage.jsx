import { Heart, ShieldCheck, ShoppingBag, Sparkles, Waves } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import IconButton from '../components/IconButton'
import { products } from '../data/products'
import { useApp } from '../state/useApp'

export default function ProductPage({ productId }) {
  const { favorites, toggleFavorite, notify } = useApp()
  const product = products.find((item) => item.id === productId) || products[0]
  const isFavorite = favorites.has(product.id)

  return (
    <main className="page focus-page product-page">
      <section className="product-hero">
        <PageHeader
          back
          transparent
          action={(
            <IconButton label={isFavorite ? '取消收藏' : '收藏'} onClick={() => toggleFavorite(product.id)}>
              <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
            </IconButton>
          )}
        />
        <img src={product.image} alt={product.name} />
        <div className="product-hero__shade" />
        <div className="product-hero__label"><span>{product.category}</span><strong>{product.name}</strong></div>
      </section>

      <section className="product-detail page-enter">
        <div className="product-detail__heading">
          <div><span className="eyebrow">{product.label}</span><h1>{product.name}</h1></div>
          <strong>¥ {product.price.toLocaleString('zh-CN')}</strong>
        </div>
        <p>{product.description}</p>

        <div className="feature-list">
          <div><span><Waves size={19} /></span><strong>多档律动</strong><small>在 App 中调节并保存偏好</small></div>
          <div><span><Sparkles size={19} /></span><strong>柔和材质</strong><small>优先考虑触感与清洁体验</small></div>
          <div><span><ShieldCheck size={19} /></span><strong>隐私保护</strong><small>权限与停止操作始终可见</small></div>
        </div>

        <button className="button button--primary product-buy" onClick={() => notify('已加入演示购物袋', 'success')}>
          <ShoppingBag size={18} />加入购物袋
        </button>
        <p className="product-footnote">产品信息用于 App 交互原型，最终规格、价格和合规文案需以正式商品资料为准。</p>
      </section>
    </main>
  )
}
