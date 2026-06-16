import { useState } from 'react'
import { products } from '../../data/products'
import ProductCard from '../products/ProductCard'
import SectionTitle from '../common/SectionTitle'
import Button from '../common/Button'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('bestsellers')
  
  const tabs = [
    { id: 'bestsellers', label: 'Bestsellers' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'sale', label: 'On Sale' }
  ]

  const getFilteredProducts = () => {
    switch (activeTab) {
      case 'bestsellers':
        return products.filter(p => p.badge === 'Bestseller').slice(0, 4)
      case 'new':
        return products.filter(p => p.badge === 'New').slice(0, 4)
      case 'sale':
        return products.filter(p => p.originalPrice).slice(0, 4)
      default:
        return products.slice(0, 4)
    }
  }

  const filteredProducts = getFilteredProducts()

  return (
    <section className="py-16">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Featured"
          title="Popular Products"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Products
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts