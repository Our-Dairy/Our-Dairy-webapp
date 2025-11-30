import { FaTint, FaChartLine, FaMoneyBillWave, FaBell, FaClipboardList, FaUserTie } from 'react-icons/fa'

export default function Farmer() {
  const features = [
    {
      icon: FaTint,
      title: 'Daily Supply Details',
      description: 'Record and track your daily milk supply with accurate quantity measurements and quality parameters.',
      color: 'bg-blue-50 border-blue-200 text-blue-600'
    },
    {
      icon: FaChartLine,
      title: 'Rate Card Visibility',
      description: 'View transparent rate calculations based on fat, SNF, and CLR readings. Know exactly what you\'re earning per liter.',
      color: 'bg-green-50 border-green-200 text-green-600'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Payment History',
      description: 'Track all your payments with detailed history. Monitor daily, weekly, and monthly payment status.',
      color: 'bg-purple-50 border-purple-200 text-purple-600'
    },
    {
      icon: FaBell,
      title: 'Notifications & Announcements',
      description: 'Stay updated with important announcements, rate changes, and notifications from your vendor and dairy.',
      color: 'bg-orange-50 border-orange-200 text-orange-600'
    },
    {
      icon: FaClipboardList,
      title: 'Supply Tracking',
      description: 'Monitor your milk supply history, quality trends, and performance metrics over time.',
      color: 'bg-red-50 border-red-200 text-red-600'
    },
    {
      icon: FaUserTie,
      title: 'Vendor Management',
      description: 'View your assigned vendor details, contact information, and maintain clear communication channels.',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-600'
    }
  ]

  const benefits = [
    'Transparent payment tracking',
    'Fair rate calculation based on quality',
    'Real-time supply records',
    'Easy access to payment history',
    'Direct communication with vendors'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9ff] via-green-50 to-[#f7f9ff]">
      {/* Hero Section */}
      <section className="px-4 md:px-16 lg:px-24 xl:px-32 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Farmer <span className="text-green-500">Portal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Your comprehensive platform for milk supply management and payment tracking
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A specialized platform designed to help farmers supply milk, track daily quantities, 
            view transparent rate calculations, and monitor payment status. Login to access 
            your farmer dashboard and manage your milk supply effectively.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need to manage your milk supply and track payments transparently
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="space-y-6 mt-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Login to Your Account</h3>
                <p className="text-gray-600">
                  Access your farmer dashboard by logging in with your credentials.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Supply Milk to Your Vendor</h3>
                <p className="text-gray-600">
                  Deliver your milk to your assigned vendor. The vendor will record quantity, 
                  quality readings (fat, SNF, CLR), and timing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">View Daily Supply Details</h3>
                <p className="text-gray-600">
                  Check your daily milk supply records, quality results, and rate per liter 
                  calculated based on fat/SNF content.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Payment Status</h3>
                <p className="text-gray-600">
                  Monitor your payment history and status. View daily, weekly, and monthly 
                  payment records for complete transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Why Choose Farmer Portal
          </h2>
          <p className="text-gray-600 mb-8">
            Get fair payments and complete transparency in your milk supply chain
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white border border-green-200 rounded-full text-gray-700 font-medium hover:bg-green-50 hover:border-green-400 transition"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-16">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Login to access the Farmer Portal and start managing your milk supply today
          </p>
          <button className="relative bg-green-400 hover:bg-green-500 text-white py-3 px-8 rounded-full transition overflow-hidden group text-lg font-medium">
            <span className="relative z-10 flex items-center gap-2">
              Login to Farmer Portal
              <FaTint className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
      </section>
    </div>
  )
}

