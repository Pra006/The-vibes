import { useState } from 'react'
import { Mail } from 'lucide-react'
import Button from '../common/Button'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center text-black">
          <Mail className="mx-auto mb-6" size={48} />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-lg text-primary-50 mb-8">
            Get exclusive offers, wellness tips, and be the first to know about new products!
          </p>
          
          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <p className="text-xl font-semibold">Thank you for subscribing! 🎉</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                type="submit"
                variant="secondary"
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-sm text-primary-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter