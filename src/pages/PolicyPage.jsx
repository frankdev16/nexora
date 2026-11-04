import { useParams, Link } from 'react-router-dom'
import {
  FileText,
  ShieldCheck,
  Truck,
  RefreshCcw,
  ArrowLeft,
} from 'lucide-react'

const policies = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Your privacy matters to us. Here is how we handle your information.',
    icon: ShieldCheck,
    sections: [
      {
        heading: 'Information We Collect',
        content:
          'We may collect personal information you provide when using our website, making enquiries, creating an account or placing an order. This may include your name, email address, phone number and delivery address.',
      },
      {
        heading: 'How We Use Your Information',
        content:
          'We use the information provided to process orders, respond to enquiries, provide customer support, communicate important updates and improve our services.',
      },
      {
        heading: 'Sharing Your Information',
        content:
          'We do not sell your personal information. Where necessary, information may be shared with delivery partners or payment service providers to fulfil your requests.',
      },
      {
        heading: 'Data Security',
        content:
          'We take reasonable measures to protect the information entrusted to us against unauthorised access, alteration, disclosure or loss.',
      },
      {
        heading: 'Your Privacy Rights',
        content:
          'You may contact us to request access to, correction of or deletion of your personal information, subject to applicable legal requirements.',
      },
      {
        heading: 'Contact Us',
        content:
          'If you have questions about this Privacy Policy, please contact our support team through the Contact page.',
      },
    ],
  },

  shipping: {
    title: 'Shipping & Delivery Policy',
    subtitle: 'Everything you need to know about receiving your NEXORA order.',
    icon: Truck,
    sections: [
      {
        heading: 'Order Processing',
        content:
          'Orders are processed after the order details and payment have been verified. Processing times may vary depending on product availability.',
      },
      {
        heading: 'Delivery Locations',
        content:
          'Delivery availability depends on your location. Please confirm that delivery is available to your area before completing your purchase.',
      },
      {
        heading: 'Delivery Timeframes',
        content:
          'Estimated delivery times will be communicated during order confirmation. Actual delivery times may vary because of location, courier availability and other circumstances.',
      },
      {
        heading: 'Delivery Charges',
        content:
          'Delivery charges depend on the destination and delivery arrangement. Any applicable charges should be communicated before an order is confirmed.',
      },
      {
        heading: 'Tracking Your Order',
        content:
          'Where order tracking is available, customers will receive the relevant tracking information after dispatch.',
      },
      {
        heading: 'Delayed Deliveries',
        content:
          'If your delivery is delayed, please contact our customer support team with your order reference for assistance.',
      },
    ],
  },

  returns: {
    title: 'Returns & Refunds Policy',
    subtitle: 'Our guidelines for returns, replacements and refunds.',
    icon: RefreshCcw,
    sections: [
      {
        heading: 'Damaged or Defective Products',
        content:
          'If a product arrives damaged or defective, contact our support team as soon as possible. Include your order reference and relevant photographs to help us assess the issue.',
      },
      {
        heading: 'Incorrect Products',
        content:
          'If you receive a product different from the one you ordered, contact us so that we can investigate and arrange an appropriate resolution.',
      },
      {
        heading: 'Return Conditions',
        content:
          'Products submitted for return may be inspected. Original packaging, accessories, receipts and proof of purchase may be required.',
      },
      {
        heading: 'Refunds',
        content:
          'Refunds are subject to review and approval. Once approved, the refund method and expected processing timeframe will be communicated to the customer.',
      },
      {
        heading: 'Exclusions',
        content:
          'Certain products may have specific return conditions. Any applicable exclusions must be clearly communicated before purchase.',
      },
      {
        heading: 'Contact for Returns',
        content:
          'Please contact our customer support team before sending any product back. Unauthorised returns may not be accepted.',
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    subtitle: 'Please read these terms before using the NEXORA website.',
    icon: FileText,
    sections: [
      {
        heading: 'Acceptance of Terms',
        content:
          'By accessing or using the NEXORA website, you agree to comply with these Terms and Conditions. If you do not agree, please discontinue use of the website.',
      },
      {
        heading: 'Website Information',
        content:
          'We aim to provide accurate product descriptions, specifications, images and prices. However, errors may occasionally occur, and information may be updated without prior notice.',
      },
      {
        heading: 'Product Availability',
        content:
          'Products displayed on the website are subject to availability. Displaying a product does not guarantee that it is currently in stock.',
      },
      {
        heading: 'Orders and Payments',
        content:
          'Orders are subject to verification and acceptance. An order confirmation does not necessarily mean that the order has been dispatched.',
      },
      {
        heading: 'Pricing',
        content:
          'Prices are displayed in Ugandan Shillings (UGX), unless otherwise stated. Applicable delivery charges and other fees should be communicated before purchase.',
      },
      {
        heading: 'Intellectual Property',
        content:
          'Website content, branding, design elements and original materials may not be copied, reproduced or commercially used without appropriate permission.',
      },
      {
        heading: 'Changes to These Terms',
        content:
          'NEXORA reserves the right to update these Terms and Conditions when necessary. Updated terms will be published on this page.',
      },
    ],
  },
}

function PolicyPage() {
  const { type } = useParams()
  const policy = policies[type]

  if (!policy) {
    return (
      <main className="content-page">
        <section className="section">
          <div className="container policy-not-found">
            <h1>Policy not found</h1>
            <p>The policy you are looking for does not exist.</p>
            <Link to="/" className="button button-primary">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const PolicyIcon = policy.icon

  return (
    <main className="content-page">
      <section className="section">
        <div className="container policy-container">
          <div className="policy-header">
            <div className="policy-icon">
              <PolicyIcon size={30} />
            </div>

            <span className="page-eyebrow">NEXORA CUSTOMER INFORMATION</span>

            <h1>{policy.title}</h1>

            <p>{policy.subtitle}</p>
          </div>

          <div className="policy-draft-notice">
            <strong>Policy review required:</strong> This is draft website
            content. Business-specific details and legal requirements must
            be reviewed and approved before launch.
          </div>

          <div className="policy-sections">
            {policy.sections.map((section, index) => (
              <article className="policy-section" key={section.heading}>
                <span className="policy-section-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="policy-section-content">
                  <h2>{section.heading}</h2>
                  <p>{section.content}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="policy-contact">
            <h2>Need more information?</h2>
            <p>
              If you have questions about this policy, our team is available
              to assist you.
            </p>

            <Link to="/contact" className="button button-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PolicyPage