import { Link } from 'react-router-dom'
import { Heart, ShoppingBag } from 'lucide-react'
import { formatPrice } from '../../config/siteConfig'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()

  const saved = isInWishlist(product.id)

  return (
    <article className="product-card">
      <div className="product-card-image">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </Link>

        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        <button
          type="button"
          className={`wishlist-button ${saved ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
          aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="product-card-content">
        <span className="product-category">{product.category}</span>

        <Link
          to={`/product/${product.slug}`}
          className="product-card-title"
        >
          {product.name}
        </Link>

        <div className="product-price">
          <strong>{formatPrice(product.price)}</strong>

          {product.oldPrice && (
            <del>{formatPrice(product.oldPrice)}</del>
          )}
        </div>

        <button
          type="button"
          className="product-add-button"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag size={16} />
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard