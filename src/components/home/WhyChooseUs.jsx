import {
  Headphones,
  PackageCheck,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Quality-conscious',
    description: 'Product information and quality details should be clearly presented.',
  },
  {
    icon: PackageCheck,
    title: 'Clear product details',
    description: 'Know what you are considering before making a purchase.',
  },
  {
    icon: Truck,
    title: 'Delivery information',
    description: 'Get clear information about delivery options and timelines.',
  },
  {
    icon: Headphones,
    title: 'Customer support',
    description: 'Have a clear way to contact the store when you need assistance.',
  },
]

function WhyChooseUs() {
  return (
    <section className="section benefits-section">
      <div className="container">
        <SectionHeading
          eyebrow="THE NEXORA EXPERIENCE"
          title="Shopping made straightforward"
          description="A better shopping experience starts with clarity, useful information and support."
          alignment="center"
        />

        <div className="benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <div className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">
                  <Icon size={25} />
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs