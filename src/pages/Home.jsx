import Hero from '../components/home/Hero'
import CategoryGrid from '../components/home/CategoryGrid'
import FeaturedProducts from '../components/home/FeaturedProducts'
import PromoBanner from '../components/home/PromoBanner'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

const Home = () => {
  return (
    <div className="px-6">
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanner />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Home