import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Button from "../common/Button";
import bannerImage from "../../assets/banner1.jpg";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container-custom py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 max-w-xl lg:max-w-none">
            {/* Main Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Heading Section */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-gray-900">
                  Elevate Your Intimate Wellness
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Discover premium products designed to enhance connection,
                  pleasure, and self-care. Your journey to intimate wellness
                  starts here.
                </p>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/shop">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Shop Now
                    <ChevronRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    className="bg-white/10 hover:bg-white/20 border-2 border-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Statistics Section */}
              <div className="pt-8 lg:pt-12">
                <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      50K+
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      Happy Customers
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      500+
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      Products
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                      4.9★
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      Average Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative">
              <img
                src={bannerImage}
                alt="Featured Products"
                className="rounded-2xl shadow-2xl w-full h-full object-cover object-center"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-sm font-semibold text-primary-600 mb-1">
                  Special Offer
                </p>
                <p className="text-2xl font-bold mb-2">20% Off</p>
                <p className="text-sm text-gray-600">
                  First-time orders over $50
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
