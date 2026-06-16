import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import { Home, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg">
              <Home className="mr-2" size={20} />
              Go Home
            </Button>
          </Link>
          <Link to="/shop">
            <Button size="lg" variant="outline">
              <Search className="mr-2" size={20} />
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound