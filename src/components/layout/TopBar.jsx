import { Truck, Shield, Phone } from 'lucide-react'

const TopBar = () => {
  return (
    <div className="bg-primary-600 text-gray-900 text-center px-4 sm:px-6 py-2">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm gap-2 sm:gap-4">
          {/* Left Section */}
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1 sm:gap-2">
              <Truck size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Free Shipping Over $50</span>
              <span className="xs:hidden">Free Shipping</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <Shield size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden md:inline">Discreet Packaging</span>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Phone size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">Questions? Call 1-800-23478</span>
            <span className="sm:hidden">1-800-23478</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar