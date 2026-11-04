import { Link } from 'react-router-dom'
import {
  Heart,
  ShoppingBag,
  Trash2,
  ArrowRight,
} from 'lucide-react'

import { useWishlist } from '../context/WishlistContext'
import ProductGrid from '../components/products/ProductGrid'

function WishlistPage() {
  const {
    wishlistItems,
    wishlistCount,
    clearWishlist,
  } = useWishlist()

  const hasItems = wishlistItems.length > 0

  return (
    <main className="content-page">
      <section className="section">
        <div className="container wishlist-container">

          <div className="wishlist-header">
            <div>
              <span className="page-eyebrow">YOUR COLLECTION</span>

              <h1>My Wishlist</h1>

              <p>
                Save your favourite products and find them easily
                whenever you're ready to shop.
              </p>
            </div>

            {hasItems && (
              <div className="wishlist-count">
                <Heart size={18} />
                <span>
                  {wishlistCount} {wishlistCount === 1 ? 'Item' : 'Items'}
                </span>
              </div>
            )}
          </div>

          {hasItems ? (
            <>
              <div className="wishlist-toolbar">
                <p>
                  You have {wishlistCount}{' '}
                  {wishlistCount === 1 ? 'product' : 'products'} saved.
                </p>

                <button
                  type="button"
                  className="wishlist-clear-button"
                  onClick={clearWishlist}
                >
                  <Trash2 size={17} />
                  Clear Wishlist
                </button>
              </div>

              <ProductGrid products={wishlistItems} />
            </>
          ) : (
            <div className="wishlist-empty">
              <div className="wishlist-empty-icon">
                <Heart size={42} strokeWidth={1.5} />
              </div>

              <h2>Your wishlist is empty</h2>

              <p>
                You haven't saved any products yet. Browse our collection
                and tap the heart icon on products you love.
              </p>

              <Link to="/shop" className="button button-primary">
                <ShoppingBag size={18} />
                Explore Products
                <ArrowRight size={17} />
              </Link>

              <Link to="/" className="wishlist-home-link">
                Back to Home
              </Link>
            </div>
          )}

        </div>
      </section>
    </main>
  )
}

export default WishlistPage