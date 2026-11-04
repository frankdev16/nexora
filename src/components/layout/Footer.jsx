import { Link } from 'react-router-dom'
import { footerNavigation } from '../../config/navigation'
import { siteConfig } from '../../config/siteConfig'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            NEXORA<span>.</span>
          </Link>

          <p>
            Technology. Elevated. Discover thoughtfully selected
            technology for modern living.
          </p>

          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
        </div>

        <div className="footer-column">
          <h3>Shopping</h3>
          {footerNavigation.shopping.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h3>Information</h3>
          {footerNavigation.information.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h3>Customer Care</h3>
          {footerNavigation.policies.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact">Get in touch</Link>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>{siteConfig.city}, {siteConfig.country}</p>
      </div>
    </footer>
  )
}

export default Footer