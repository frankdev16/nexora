import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
} from 'lucide-react'

import { mainNavigation } from '../../config/navigation'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const { cartCount } = useCart()
  const { wishlistItems } = useWishlist()
  const navigate = useNavigate()

  function handleSearch(event) {
    event.preventDefault()

    const query = searchTerm.trim()

    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`)
      setSearchTerm('')
      setSearchOpen(false)
      setMenuOpen(false)
    }
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner container">
        <button
          className="mobile-menu-button icon-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <Link to="/" className="brand-logo" onClick={closeMenu}>
          tech solutions Uganda <span>.</span>
        </Link>

        <nav className={`main-navigation ${menuOpen ? 'menu-open' : ''}`}>
          {mainNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button search-toggle"
            aria-label="Toggle search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search />
          </button>

          <Link
            to="/wishlist"
            className="icon-button wishlist-header"
            aria-label="Wishlist"
          >
            <Heart />
            {wishlistItems.length > 0 && (
              <span className="header-count">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="icon-button cart-header"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingBag />
            <span className="header-count">{cartCount}</span>
          </Link>
        </div>
      </div>

      {searchOpen && (
        <form className="header-search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search smartphones, laptops, accessories..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            autoFocus
          />
          <button type="submit">
            Search
          </button>
        </form>
      )}
    </header>
  )
}

export default Header