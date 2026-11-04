import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Headphones,
  Laptop,
} from 'lucide-react'

import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionHeading from '../components/common/SectionHeading'
import { siteConfig } from '../config/siteConfig'

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust and transparency',
    description:
      'Clear product information and straightforward communication should be at the heart of every purchase.',
  },
  {
    icon: Smartphone,
    title: 'Technology for everyone',
    description:
      'Technology should make everyday life, work and communication easier.',
  },
  {
    icon: Headphones,
    title: 'Customer experience',
    description:
      'A good shopping experience goes beyond selecting a product. Information and support matter too.',
  },
  {
    icon: Laptop,
    title: 'A world of possibilities',
    description:
      'From personal devices to work essentials, technology creates opportunities to do more.',
  },
]

function AboutPage() {
  return (
    <main className="content-page">
      <section className="page-banner">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'About Us' },
            ]}
          />

          <span className="page-eyebrow">GET TO KNOW US</span>

          <h1>Technology for the way you live.</h1>

          <p>
            Welcome to {siteConfig.name}, a technology retail
            concept focused on connecting people with the devices
            and accessories they need.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-intro">
          <div className="about-intro-content">
            <span className="section-eyebrow">OUR STORY</span>

            <h2>More than just gadgets.</h2>

            <p>
              Technology is part of almost everything we do.
              It helps us communicate, learn, work, create and
              stay connected.
            </p>

            <p>
              At {siteConfig.name}, our goal is to make discovering
              technology products a straightforward and enjoyable
              experience. Our catalogue is designed to bring
              smartphones, computers, audio devices and accessories
              together in one place.
            </p>

            <p>
              We believe customers should have access to useful
              product information and clear communication when
              making purchasing decisions.
            </p>

            <Link to="/shop" className="button button-primary">
              Explore our products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="about-intro-image">
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=85"
              alt="Collection of modern electronic devices"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT MATTERS TO US"
            title="The principles behind NEXORA"
            description="The experience we want to create for every customer."
            alignment="center"
          />

          <div className="benefits-grid">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <article className="benefit-card" key={value.title}>
                  <div className="benefit-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-cta">
          <span className="section-eyebrow">DISCOVER NEXORA</span>

          <h2>Find the technology that moves you forward.</h2>

          <p>
            Explore our product catalogue and discover what's
            available.
          </p>

          <Link to="/shop" className="button button-primary">
            Shop now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AboutPage