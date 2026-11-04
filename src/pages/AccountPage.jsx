import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserRound, LockKeyhole, Mail, ArrowRight } from 'lucide-react'
import Breadcrumbs from '../components/common/Breadcrumbs'

function AccountPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [message, setMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    setMessage(
      'Account authentication is not yet connected. This is a frontend demonstration.'
    )
  }

  return (
    <main className="content-page">
      <section className="page-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'My Account' }]} />

          <span className="page-eyebrow">YOUR NEXORA ACCOUNT</span>
          <h1>Welcome back.</h1>
          <p>Sign-in functionality will be available when account services are connected.</p>
        </div>
      </section>

      <section className="section">
        <div className="container account-container">
          <div className="account-card">
            <div className="account-heading">
              <div className="account-icon">
                <UserRound size={28} />
              </div>

              <h2>Sign in</h2>
              <p>Enter your details below.</p>
            </div>

            <form onSubmit={handleSubmit} className="account-form">
              <div className="form-group">
                <label htmlFor="email">Email address</label>

                <div className="input-with-icon">
                  <Mail size={18} />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <div className="input-with-icon">
                  <LockKeyhole size={18} />

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="button button-primary account-submit"
              >
                Sign in <ArrowRight size={18} />
              </button>

              {message && (
                <p className="form-message" role="status">
                  {message}
                </p>
              )}
            </form>

            <div className="account-divider">
              <span>NEW TO NEXORA?</span>
            </div>

            <p className="account-register">
              You can continue exploring our products without an account.
            </p>

            <Link to="/shop" className="account-shop-link">
              Browse the shop
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AccountPage