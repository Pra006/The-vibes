import { Heart, Users, Award, Shield } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'

const About = () => {
  const values = [
    {
      icon: <Heart className="text-primary-600" size={40} />,
      title: 'Empowerment',
      description: 'We believe in empowering individuals to take control of their intimate wellness.'
    },
    {
      icon: <Users className="text-primary-600" size={40} />,
      title: 'Community',
      description: 'Building a supportive community where everyone feels welcome and valued.'
    },
    {
      icon: <Award className="text-primary-600" size={40} />,
      title: 'Quality',
      description: 'Premium products that meet the highest standards of quality and safety.'
    },
    {
      icon: <Shield className="text-primary-600" size={40} />,
      title: 'Privacy',
      description: 'Your privacy and discretion are our top priorities in everything we do.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-black py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-display font-bold mb-6">About Pure Romance</h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto">
            Dedicated to enhancing intimacy and wellness through quality products and education
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="container-custom ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                subtitle="Our Story"
                title="Passionate About Wellness"
                align="left"
              />
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a mission to create a judgment-free space for intimate wellness, Pure Romance has been empowering individuals and couples for over two decades.
                </p>
                <p>
                  We believe that everyone deserves access to quality products and education that enhance their intimate experiences and overall well-being.
                </p>
                <p>
                  Through our carefully curated selection of products and our commitment to education, we've helped millions of people discover new ways to connect with themselves and their partners.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Values"
            title="What We Stand For"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-custom mt-12">

         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">20+</p>
              <p className="text-gray-600">Years in Business</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">500+</p>
              <p className="text-gray-600">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">1M+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600 mb-2">4.9</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
   

      {/* Mission */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-black">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-primary-50 leading-relaxed">
            To empower individuals and strengthen relationships by providing exceptional intimate wellness products, education, and a supportive community that celebrates self-care and healthy intimacy.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About