import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import Breadcrumbs from '../components/common/Breadcrumbs'

const faqItems = [
  {
    question: 'What products does NEXORA offer?',
    answer:
      'The sample catalogue includes smartphones, laptops, tablets, audio devices, wearables, gaming accessories and other technology products.',
  },
  {
    question: 'How can I place an order?',
    answer:
      'Browse the catalogue, select your products, add them to your cart and proceed to checkout. The current checkout is a frontend demonstration and does not submit real orders.',
  },
  {
    question: 'Which payment methods are accepted?',
    answer:
      'Payment methods have not yet been confirmed by the store. Contact the business for the available payment options.',
  },
  {
    question: 'Do you offer delivery?',
    answer:
      'Delivery arrangements and coverage areas have not yet been confirmed. Please contact the store for current delivery information.',
  },
  {
    question: 'Are the products covered by a warranty?',
    answer:
      'Warranty coverage depends on the actual product and supplier. Confirm the warranty terms with the store before purchasing.',
  },
  {
    question: 'Can I return a product?',
    answer:
      'The official return and refund policy is yet to be provided by the business. Please contact the store for its current terms.',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'You can use the contact page. The contact details currently displayed are demonstration placeholders and will need to be replaced.',
  },
]

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  function toggleQuestion(index) {
    setActiveIndex((current) => current === index ? null : index)
  }

  return (
    <main className="content-page">
      <section className="page-banner">
        <div className="container">
          <Breadcrumbs items={[{ label: 'FAQs' }]} />

          <span className="page-eyebrow">NEED SOME ANSWERS?</span>
          <h1>Frequently asked questions.</h1>

          <p>
            Find answers to common questions about shopping with NEXORA.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-container">
          <div className="faq-intro">
            <h2>How can we help?</h2>
            <p>
              Here are some answers to questions you may have.
              Business policies and arrangements should be confirmed
              with the store.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index

              return (
                <article
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>

                    <ChevronDown
                      size={20}
                      className={isOpen ? 'rotated' : ''}
                    />
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FAQPage