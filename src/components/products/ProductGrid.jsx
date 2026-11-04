import ProductCard from './ProductCard'

function ProductGrid({ products = [] }) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <h3>No products found</h3>
        <p>Try another search or browse our available products.</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid