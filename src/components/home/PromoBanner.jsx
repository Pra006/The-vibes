import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { Gift } from 'lucide-react'

const PromoBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100">
      <div className="container-custom">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                <Gift className="mr-2" size={18} />
                Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                Gift Sets Starting at $39.99
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Perfect for any occasion. Beautifully packaged and ready to give. Free gift wrapping included!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop/gift-sets">
                  <Button size="lg">
                    Shop Gift Sets
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop"
                alt="Gift Sets"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner