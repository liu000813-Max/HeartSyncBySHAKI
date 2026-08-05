import { Heart, Search, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import IconButton from '../components/IconButton'
import PageHeader from '../components/PageHeader'
import { categories, products } from '../data/products'
import { useApp } from '../state/useApp'

export default function ExplorePage() {
  const { favorites, toggleFavorite, navigate } = useApp()
  const [category, setCategory] = useState('全部')
  const [query, setQuery] = useState('')

  const visibleProducts = useMemo(() => products.filter((product) => {
    const categoryMatch = category === '全部' || product.category === category
    const queryMatch = `${product.name}${product.label}${product.description}`.toLowerCase().includes(query.toLowerCase())
    return categoryMatch && queryMatch
  }), [category, query])

  return (
    <main className="page explore-page">
      <PageHeader action={<IconButton label="筛选"><SlidersHorizontal size={20} /></IconButton>} />
      <section className="page-intro page-enter">
        <span className="eyebrow">CURATED FOR YOU</span>
        <h1>探索</h1>
        <p>从设计、触感和使用场景出发，找到适合自己的节奏。</p>
      </section>

      <section className="search-section">
        <label className="search-field">
          <Search size={19} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索产品或体验"
            aria-label="搜索产品或体验"
          />
        </label>
        <div className="category-tabs" role="tablist" aria-label="产品分类">
          {categories.map((item) => (
            <button
              key={item}
              role="tab"
              aria-selected={category === item}
              className={category === item ? 'is-active' : ''}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="product-grid" aria-live="polite">
        {visibleProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <button className="product-card__visual" onClick={() => navigate(`product/${product.id}`)}>
              <img src={product.image} alt={product.name} />
              <span>{product.label}</span>
            </button>
            <div className="product-card__body">
              <div>
                <strong>{product.name}</strong>
                <span>¥ {product.price.toLocaleString('zh-CN')}</span>
              </div>
              <IconButton
                label={favorites.has(product.id) ? '取消收藏' : '收藏'}
                className={favorites.has(product.id) ? 'is-selected' : ''}
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart size={18} fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
              </IconButton>
            </div>
          </article>
        ))}
        {visibleProducts.length === 0 && (
          <div className="empty-state">
            <Search size={28} />
            <strong>没有找到相关产品</strong>
            <span>试试其他关键词或分类。</span>
          </div>
        )}
      </section>
    </main>
  )
}
