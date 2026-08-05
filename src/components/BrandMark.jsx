export default function BrandMark({ light = false }) {
  return (
    <div className={`brand-mark ${light ? 'brand-mark--light' : ''}`} aria-label="SHAKI since 1995">
      <span>SHAKI</span>
      <i>SINCE 1995</i>
    </div>
  )
}
