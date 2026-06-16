import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import SectionTitle from '../common/SectionTitle'

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Explore"
          title="Shop by Category"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-64"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-2xl font-display font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-200">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid