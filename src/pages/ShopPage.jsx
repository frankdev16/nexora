import { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'

import { products } from '../data/products'
import { categories } from '../data/categories'
import ProductGrid from '../components/products/ProductGrid'
import Breadcrumbs from '../components/common/Breadcrumbs'

function ShopPage() {
  const [searchParams] = useSearchParams()

  const initialSearch = searchParams.get('search') || ''

  const [search, setSearch] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (search.trim()) {
      const query = search.toLowerCase()

      result = result.filter((product) =>
        `${product.name} ${product.category} ${product.description || ''}`
          .toLowerCase()
          .includes(query)
      )
    }

    if (selectedCategory !== 'all') {
      result = result.filter(
        (product) => product.category === selectedCategory
      )
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break

      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break

      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break

      default:
        break
    }

    return result
  }, [search, selectedCategory, sortBy])

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Shop' }]} />

          <span className="page-eyebrow">THE NEXORA COLLECTION</span>
          <h1>Explore our products.</h1>

          <p>
            Discover technology for work, entertainment and everyday life.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="shop-toolbar">
            <div className="shop-search">
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search products"
              />
            </div>

            <div className="shop-sort">
              <SlidersHorizontal size={18} />

              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div className="shop-layout">
            <aside className="shop-sidebar">
              <h3>Categories</h3>

              <button
                type="button"
                className={selectedCategory === 'all' ? 'active' : ''}
                onClick={() => setSelectedCategory('all')}
              >
                All products
              </button>

              {categories.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  className={
                    selectedCategory === category.slug ? 'active' : ''
                  }
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </aside>

            <div className="shop-results">
              <div className="shop-results-heading">
                <div>
                  <h2>Our products</h2>
                  <p className="results-count">
                    Showing {filteredProducts.length} products
                  </p>
                </div>

                <Link to="/shop" className="text-link">
                  Reset filters
                </Link>
              </div>

              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShopPage