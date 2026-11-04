import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { categories } from '../data/categories'
import { products } from '../data/products'
import ProductGrid from '../components/products/ProductGrid'
import Breadcrumbs from '../components/common/Breadcrumbs'

function CategoryPage() {
  const { slug } = useParams()

  const category = categories.find(
    (item) => item.slug === slug
  )

  const categoryProducts = products.filter(
    (product) => product.category === slug
  )

  if (!category) {
    return (
      <main className="content-page">
        <div className="container empty-state">
          <h1>Category not found</h1>
          <p>
            We couldn't find the category you're looking for.
          </p>
          <Link to="/shop" className="button button-primary">
            <ArrowLeft size={17} />
            Browse all products
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Shop', to: '/shop' },
              { label: category.name },
            ]}
          />

          <span className="page-eyebrow">EXPLORE COLLECTIONS</span>

          <h1>{category.name}</h1>

          <p>
            {category.description ||
              `Explore our ${category.name.toLowerCase()} collection.`}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-top-row">
            <div>
              <h2>{category.name}</h2>
              <p className="results-count">
                {categoryProducts.length}{' '}
                {categoryProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>

            <Link to="/shop" className="text-link">
              View all products <ArrowLeft size={17} />
            </Link>
          </div>

          <ProductGrid products={categoryProducts} />
        </div>
      </section>
    </main>
  )
}

export default CategoryPage