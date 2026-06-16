import { Filter, X } from 'lucide-react'
import { categories } from '../../data/categories'

const ProductFilter = ({ 
  filters, 
  setFilters, 
  isOpen, 
  setIsOpen 
}) => {
  const priceRanges = [
    { label: 'Under $20', min: 0, max: 20 },
    { label: '$20 - $40', min: 20, max: 40 },
    { label: '$40 - $60', min: 40, max: 60 },
    { label: 'Over $60', min: 60, max: 999 }
  ]

  const handleCategoryChange = (slug) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === slug ? '' : slug
    }))
  }

  const handlePriceChange = (range) => {
    setFilters(prev => ({
      ...prev,
      priceRange: prev.priceRange?.min === range.min ? null : range
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: null,
      sortBy: 'featured'
    })
  }

  return (
    <>
      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg z-40"
      >
        <Filter size={24} />
      </button>

      {/* Filter Sidebar */}
      <div className={`
        fixed lg:sticky lg:top-24 inset-y-0 left-0 z-40 w-80 bg-white shadow-xl lg:shadow-none lg:h-fit
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full lg:max-h-[calc(100vh-6rem)] overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <Filter className="mr-2" size={20} />
              Filters
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* Clear Filters */}
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-700 mb-6"
          >
            Clear All Filters
          </button>

          {/* Categories */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.category === category.slug}
                    onChange={() => handleCategoryChange(category.slug)}
                    className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
            <div className="space-y-2">
              {priceRanges.map((range, index) => (
                <label
                  key={index}
                  className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.priceRange?.min === range.min}
                    onChange={() => handlePriceChange(range)}
                    className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Sort By</h4>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </>
  )
}

export default ProductFilter