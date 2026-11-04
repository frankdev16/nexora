import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function PromotionalBanner() {
  return (
    <section className="container promotional-section">
      <div className="promotion-banner">
        <div className="promotion-content">
          <span className="promotion-eyebrow">THE NEXORA COLLECTION</span>

          <h2>Upgrade your everyday technology.</h2>

          <p>
            Find the devices and accessories that make your
            everyday experience better.
          </p>

          <Link to="/shop" className="button button-light">
            Explore the collection <ArrowRight size={17} />
          </Link>
        </div>

        <div className="promotion-image">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=85"
            alt="Modern electronic devices"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default PromotionalBanner