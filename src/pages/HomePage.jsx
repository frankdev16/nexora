import Hero from '../components/home/Hero'
import CategorySection from '../components/home/CategorySection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import PromotionalBanner from '../components/home/PromotionalBanner'
import BrandShowcase from '../components/home/BrandShowcase'
import WhyChooseUs from '../components/home/WhyChooseUs'

function HomePage() {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <PromotionalBanner />
      <BrandShowcase />
      <WhyChooseUs />
    </>
  )
}

export default HomePage