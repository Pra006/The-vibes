import { useState, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { categories } from '../data/categories'
import ProductCard from '../components/products/ProductCard'
import ProductFilter from '../components/products/ProductFilter'
import SectionTitle from '../components/common/SectionTitle'

const Shop = () => {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search')
  
  const [filters, setFilters] = useState({
    category: category || '',
    priceRange: null,
    sortBy: 'featured'
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by price range
    if (filters.priceRange) {
      filtered = filtered.filter(p =>
        p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
      )
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    return filtered
  }, [filters, category, searchQuery])

  const currentCategory = categories.find(c => c.slug === filters.category)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold mb-2">
            {searchQuery
              ? `Search Results for "${searchQuery}"`
              : currentCategory
              ? currentCategory.name
              : 'All Products'}
          </h1>
          <p className="text-primary-100">
            {filteredProducts.length} products found
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex gap-8">
          <ProductFilter
            filters={filters}
            setFilters={setFilters}
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
          />

          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg mb-4">No products found</p>
                <button
                  onClick={() => setFilters({ category: '', priceRange: null, sortBy: 'featured' })}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop