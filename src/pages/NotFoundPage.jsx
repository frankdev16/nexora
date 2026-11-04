import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'

function NotFoundPage() {
  return (
    <main className="content-page">
      <section className="section">
        <div className="container not-found-container">
          <span className="not-found-code">404</span>

          <div className="not-found-icon">
            <Search size={34} />
          </div>

          <span className="page-eyebrow">PAGE NOT FOUND</span>

          <h1>Looks like you've lost your way.</h1>

          <p>
            The page you're looking for doesn't exist, may have
            been moved, or the address may be incorrect.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="button button-primary">
              <ArrowLeft size={18} />
              Back to home
            </Link>

            <Link to="/shop" className="button button-outline">
              Explore products
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage