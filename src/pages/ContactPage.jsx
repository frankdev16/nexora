import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from 'lucide-react'

import { siteConfig } from '../config/siteConfig'
import Breadcrumbs from '../components/common/Breadcrumbs'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    setSubmitted(true)
  }

  return (
    <main className="content-page">
      <section className="page-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact' }]} />

          <span className="page-eyebrow">WE'RE HERE TO HELP</span>
          <h1>Let's talk.</h1>

          <p>
            Have a question about a product or need assistance?
            Send us a message.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-information">
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2>We'd love to hear from you.</h2>

            <p>
              Use the contact form to send an enquiry. The contact
              information below contains demonstration details
              and must be replaced with the client's real details.
            </p>

            <div className="contact-info-item">
              <Mail size={21} />
              <div>
                <span>Email</span>
                <strong>{siteConfig.contact.email}</strong>
              </div>
            </div>

            <div className="contact-info-item">
              <Phone size={21} />
              <div>
                <span>Phone</span>
                <strong>{siteConfig.contact.phone}</strong>
              </div>
            </div>

            <div className="contact-info-item">
              <MapPin size={21} />
              <div>
                <span>Location</span>
                <strong>{siteConfig.address.city}, {siteConfig.country}</strong>
              </div>
            </div>

            <div className="contact-info-item">
              <Clock size={21} />
              <div>
                <span>Business hours</span>
                <strong>{siteConfig.businessHours.weekdays}</strong>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a message</h2>

            {submitted ? (
              <div className="form-success">
                <h3>Thank you for your message.</h3>
                <p>
                  This demonstration form is not connected to an
                  email service, so your message has not been sent.
                </p>

                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      message: '',
                    })
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your name *</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
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
                  <label htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="button button-primary"
                >
                  Send message <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage