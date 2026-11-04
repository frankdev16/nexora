import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from 'lucide-react'

import Breadcrumbs from '../components/common/Breadcrumbs'
import { useCart } from '../context/CartContext'
import { formatPrice, siteConfig } from '../config/siteConfig'

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart()

  const shipping = 0
  const orderTotal = cartTotal + shipping

  return (
    <main className="content-page">
      <section className="page-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Shopping Cart' }]} />

          <span className="page-eyebrow">YOUR SELECTION</span>
          <h1>Shopping cart</h1>
          <p>Review your selected products before checkout.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="empty-state cart-empty">
              <div className="empty-state-icon">
                <ShoppingBag size={42} />
              </div>

              <h2>Your cart is empty</h2>

              <p>
                You haven't added any products to your cart yet.
                Explore our catalogue and find something you like.
              </p>

              <Link to="/shop" className="button button-primary">
                Explore products <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items-section">
                <div className="cart-section-heading">
                  <h2>Your items</h2>
                  <span>
                    {cartItems.length}{' '}
                    {cartItems.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <article className="cart-item" key={item.id}>
                      <Link
                        to={`/product/${item.slug}`}
                        className="cart-item-image"
                      >
                        <img src={item.image} alt={item.name} />
                      </Link>

                      <div className="cart-item-details">
                        <Link
                          to={`/product/${item.slug}`}
                          className="cart-item-name"
                        >
                          {item.name}
                        </Link>

                        <span className="cart-item-category">
                          {item.category}
                        </span>

                        <strong className="cart-item-price">
                          {formatPrice(item.price)}
                        </strong>

                        <div className="cart-item-actions">
                          <div className="quantity-control">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              disabled={item.quantity <= 1}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus size={14} />
                            </button>

                            <span>{item.quantity}</span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <button
                            type="button"
                            className="remove-cart-item"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 size={15} />
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="cart-item-subtotal">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </article>
                  ))}
                </div>

                <Link to="/shop" className="continue-shopping">
                  <ArrowLeft size={17} />
                  Continue shopping
                </Link>
              </div>

              <aside className="cart-summary">
                <h2>Order summary</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? 'Calculated later' : formatPrice(shipping)}
                  </span>
                </div>

                <div className="summary-divider" />

                <div className="summary-row summary-total">
                  <strong>Estimated total</strong>
                  <strong>{formatPrice(orderTotal)}</strong>
                </div>

                <p className="summary-note">
                  Final delivery charges and payment arrangements
                  will be confirmed before an order is completed.
                </p>

                <Link
                  to="/checkout"
                  className="button button-primary checkout-button"
                >
                  Proceed to checkout <ArrowRight size={18} />
                </Link>

                <div className="cart-security-note">
                  <ShoppingBag size={17} />
                  <span>
                    Your cart is saved in this browser.
                  </span>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default CartPage