import { Link, useLocation } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ShoppingBag } from 'lucide-react'

import { formatPrice } from '../config/siteConfig'

function OrderSuccessPage() {
  const location = useLocation()

  let order = location.state?.order

  if (!order) {
    try {
      const savedOrder = sessionStorage.getItem('nexora-demo-order')
      order = savedOrder ? JSON.parse(savedOrder) : null
    } catch {
      order = null
    }
  }

  if (!order) {
    return (
      <main className="content-page">
        <div className="container empty-state">
          <h1>No order information found</h1>
          <p>There is no recent demonstration order to display.</p>

          <Link to="/shop" className="button button-primary">
            Explore products
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="content-page">
      <section className="section">
        <div className="container order-success-container">
          <div className="order-success-card">
            <div className="success-icon">
              <CheckCircle2 size={58} />
            </div>

            <span className="page-eyebrow">CHECKOUT DEMONSTRATION</span>

            <h1>Thank you!</h1>

            <p className="success-message">
              Your demonstration checkout has been completed.
            </p>

            <div className="order-reference">
              <span>Reference number</span>
              <strong>{order.reference}</strong>
            </div>

            <div className="order-success-details">
              <div>
                <span>Customer</span>
                <strong>
                  {order.customer.firstName} {order.customer.lastName}
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{order.customer.email}</strong>
              </div>

              <div>
                <span>Items</span>
                <strong>{order.items.length}</strong>
              </div>

              <div>
                <span>Order total</span>
                <strong>{formatPrice(order.total)}</strong>
              </div>
            </div>

            <div className="demo-notice">
              <ShoppingBag size={19} />

              <p>
                This is a frontend demonstration. No real order
                has been submitted, no payment has been collected
                and the store has not received these details.
              </p>
            </div>

            <Link to="/shop" className="button button-primary">
              Continue shopping <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OrderSuccessPage