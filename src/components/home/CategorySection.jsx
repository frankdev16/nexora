import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import SectionHeading from '../common/SectionHeading'

function CategorySection() {
  const featuredCategories = categories.slice(0, 6)

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="BROWSE COLLECTIONS"
          title="Shop by category"
          description="Explore technology for work, entertainment and everyday life."
        />

        <div className="category-grid">
          {featuredCategories.map((category) => (
            <Link
              to={`/category/${category.slug}`}
              className="category-card"
              key={category.id}
            >
              <img src={category.image} alt={category.name} />

              <div className="category-card-content">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>

                <span className="category-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection