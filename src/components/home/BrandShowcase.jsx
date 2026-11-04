import { brands } from '../../data/brands'
import SectionHeading from '../common/SectionHeading'

function BrandShowcase() {
  return (
    <section className="section brand-section">
      <div className="container">
        <SectionHeading
          eyebrow="EXPLORE TECHNOLOGY"
          title="Brands in our sample catalogue"
          description="Discover products from familiar technology brands."
          alignment="center"
        />

        <div className="brand-grid">
          {brands.map((brand) => (
            <div className="brand-item" key={brand.id}>
              <span>{brand.name}</span>
            </div>
          ))}
        </div>

        <p className="brand-disclaimer">
          Brand names are shown for catalogue demonstration only.
          This does not imply an authorised dealership or partnership.
        </p>
      </div>
    </section>
  )
}

export default BrandShowcase