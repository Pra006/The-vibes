import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Heart, Share2, Check, Truck, Shield, ChevronLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'
import Button from '../components/common/Button'
import ProductCard from '../components/products/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/shop" className="text-primary-600 hover:text-primary-700">
          Return to shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  // Mock multiple images (in real app, product would have image array)
  const productImages = [product.image, product.image, product.image]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <Link to="/shop" className="text-primary-600 hover:text-primary-700 inline-flex items-center">
            <ChevronLeft size={20} />
            Back to Shop
          </Link>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg overflow-hidden shadow ${
                    selectedImage === index ? 'ring-2 ring-primary-600' : ''
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.badge && (
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {product.badge}
              </span>
            )}
            
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary-600">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:text-gray-900"
                >
                  -
                </button>
                <span className="px-6 py-3 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-600 hover:text-gray-900"
                >
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} size="lg" className="flex-1 bg-amber-600 hover:bg-amber-700 ">
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="flex-1 btn-outline">
                <Heart className="mr-2" size={20} />
                Add to Wishlist
              </button>
              <button className="flex-1 btn-outline">
                <Share2 className="mr-2" size={20} />
                Share
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="text-primary-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Free Shipping</p>
                  <p>Orders over $50</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Shield className="text-primary-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Secure Payment</p>
                  <p>100% Protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check className="text-primary-600" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Quality Guaranteed</p>
                  <p>Premium products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail