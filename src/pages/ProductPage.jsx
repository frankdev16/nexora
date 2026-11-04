import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  ShieldCheck,
} from 'lucide-react'

import { products } from '../data/products'
import { categories } from '../data/categories'
import { formatPrice } from '../config/siteConfig'

import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

import ProductGrid from '../components/products/ProductGrid'
import Breadcrumbs from '../components/common/Breadcrumbs'

function ProductPage() {
  const { slug } = useParams()

  const product = products.find((item) => item.slug === slug)

  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()

  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <main className="content-page">
        <div className="container empty-state">
          <h1>Product not found</h1>
          <p>This product may no longer be available in our catalogue.</p>

          <Link to="/shop" className="button button-primary">
            <ArrowLeft size={17} />
            Return to shop
          </Link>
        </div>
      </main>
    )
  }

  const category = categories.find(
    (item) => item.slug === product.category
  )

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4)

  const saved = isInWishlist(product.id)

  return (
    <main className="product-page">
      <section className="section">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Shop', to: '/shop' },
              {
                label: category?.name || product.category,
                to: `/category/${product.category}`,
              },
              { label: product.name },
            ]}
          />

          <div className="product-details-layout">
            <div className="product-gallery">
              <div className="product-main-image">
                <img src={product.image} alt={product.name} />
              </div>
            </div>

            <div className="product-information">
              <span className="product-category">
                {category?.name || product.category}
              </span>

              <h1>{product.name}</h1>

              {product.badge && (
                <span className="product-badge">
                  {product.badge}
                </span>
              )}

              <div className="product-detail-price">
                <strong>{formatPrice(product.price)}</strong>

                {product.oldPrice && (
                  <del>{formatPrice(product.oldPrice)}</del>
                )}
              </div>

              <p className="product-description">
                {product.description ||
                  `Discover the ${product.name} and explore its features.`}
              </p>

              {product.specifications &&
                Object.keys(product.specifications).length > 0 && (
                  <div className="product-specifications">
                    <h3>Product specifications</h3>

                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div className="specification-row" key={key}>
                          <span>{key}</span>
                          <strong>{value}</strong>
                        </div>
                      )
                    )}
                  </div>
                )}

              <div className="product-purchase-actions">
                <div className="quantity-control">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) => Math.max(1, current - 1))
                    }
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} />
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) => current + 1)
                    }
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} />
                  </button>
                </div>

                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => addToCart(product, quantity)}
                >
                  <ShoppingBag size={18} />
                  Add to cart
                </button>

                <button
                  type="button"
                  className={`wishlist-button ${saved ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product)}
                  aria-label="Toggle wishlist"
                >
                  <Heart
                    size={20}
                    fill={saved ? 'currentColor' : 'none'}
                  />
                </button>
              </div>

              <div className="product-assurance">
                <ShieldCheck size={19} />

                <p>
                  Contact the store for product availability,
                  warranty and delivery information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-top-row">
              <div>
                <span className="section-eyebrow">YOU MAY ALSO LIKE</span>
                <h2>Related products</h2>
              </div>
            </div>

            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </main>
  )
}

export default ProductPage