import { ArrowRight, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85"
          alt="Modern technology workspace"
        />
      </div>

      <div className="hero-overlay" />

      <div className="container hero-content">
        <span className="hero-eyebrow">
          DISCOVER WHAT'S NEXT
        </span>

        <h1>
          Technology
          <br />
          <span>Elevated.</span>
        </h1>

        <p>
          Discover smartphones, computers, audio devices and
          everyday technology designed to keep you connected.
        </p>

        <div className="hero-actions">
          <Link to="/shop" className="button button-primary">
            Explore products <ArrowRight size={18} />
          </Link>

          <Link to="/about" className="hero-secondary-link">
            Discover NEXORA
          </Link>
        </div>

        <div className="hero-trust">
          <span><ShieldCheck size={17} /> Quality-focused shopping</span>
          <span><Truck size={17} /> Delivery information available</span>
        </div>
      </div>
    </section>
  )
}

export default Hero