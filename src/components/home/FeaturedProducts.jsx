import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '../../data/products'
import ProductGrid from '../products/ProductGrid'
import SectionHeading from '../common/SectionHeading'

function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="section featured-products-section">
      <div className="container">
        <div className="section-top-row">
          <SectionHeading
            eyebrow="HANDPICKED FOR YOU"
            title="Featured products"
            description="Explore a selection of products from our sample catalogue."
          />

          <Link to="/shop" className="text-link">
            View all products <ArrowRight size={17} />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  )
}

export default FeaturedProducts