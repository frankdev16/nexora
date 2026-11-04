import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, LockKeyhole } from 'lucide-react'

import { useCart } from '../context/CartContext'
import { formatPrice, siteConfig } from '../config/siteConfig'
import Breadcrumbs from '../components/common/Breadcrumbs'

function CheckoutPage() {
  const navigate = useNavigate()

  const { cartItems, cartTotal } = useCart()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
  })

  const [error, setError] = useState('')

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />
  }

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    const customer = {
      ...formData,
    }

    const order = {
      reference: `NEX-${Date.now()}`,
      customer,
      items: cartItems,
      total: cartTotal,
      createdAt: new Date().toISOString(),
    }

    try {
      sessionStorage.setItem(
        'nexora-demo-order',
        JSON.stringify(order)
      )

      navigate('/order-success', {
        state: { order },
      })
    } catch {
      setError('Unable to continue. Please try again.')
    }
  }

  return (
    <main className="content-page">
      <section className="page-banner">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Cart', to: '/cart' },
              { label: 'Checkout' },
            ]}
          />

          <span className="page-eyebrow">ALMOST THERE</span>
          <h1>Checkout</h1>
          <p>Provide your details to review your sample order.</p>
        </div>
      </section>

      <section className="section">
        <div className="container checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="checkout-form-section">
              <h2>Customer information</h2>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First name *</label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last name *</label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="checkout-form-section">
              <h2>Delivery information</h2>

              <div className="form-group">
                <label htmlFor="address">Delivery address *</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City / Town *</label>
                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="notes">Additional notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Any additional delivery instructions?"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>

            {error && (
              <p className="form-message" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="button button-primary checkout-submit"
            >
              Continue <ArrowRight size={18} />
            </button>
          </form>

          <aside className="checkout-summary">
            <h2>Your order</h2>

            {cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>
                <div className="checkout-item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="checkout-item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                </div>

                <strong>
                  {formatPrice(item.price * item.quantity)}
                </strong>
              </div>
            ))}

            <div className="summary-divider" />

            <div className="summary-row summary-total">
              <strong>Subtotal</strong>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>To be confirmed</span>
            </div>

            <p className="summary-note">
              Final delivery charges and payment arrangements
              will be confirmed by the store.
            </p>

            <div className="checkout-security">
              <LockKeyhole size={17} />
              <span>Demonstration checkout. No payment is collected.</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage