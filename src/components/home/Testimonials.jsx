import { Star } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The products are amazing! Great quality and discreet shipping. Will definitely order again.',
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Jennifer K.',
    rating: 5,
    text: 'Love the massage oils! They smell wonderful and really enhance our intimate time together.',
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 3,
    name: 'Amanda R.',
    rating: 5,
    text: 'Customer service is excellent! They answered all my questions and helped me find the perfect products.',
    image: 'https://i.pravatar.cc/150?img=9'
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Testimonials"
          title="What Our Customers Say"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials