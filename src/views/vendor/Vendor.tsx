import { FaUsers, FaTint, FaTruck, FaMoneyBillWave, FaMapMarkerAlt, FaClipboardCheck } from 'react-icons/fa'

export default function Vendor() {
  const features = [
    {
      icon: FaUsers,
      title: 'Farmer Management',
      description: 'Manage all farmers assigned to you. View farmer details, contact information, and supply history.',
      color: 'bg-blue-50 border-blue-200 text-blue-600'
    },
    {
      icon: FaTint,
      title: 'Milk Collection Recording',
      description: 'Record daily milk collection from farmers with accurate quantity, quality readings (fat, SNF, CLR), and timings.',
      color: 'bg-green-50 border-green-200 text-green-600'
    },
    {
      icon: FaTruck,
      title: 'Daily Supply Summary',
      description: 'Track and summarize daily milk supply to your dairy. Maintain complete records of all transactions.',
      color: 'bg-purple-50 border-purple-200 text-purple-600'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Farmer Payment Ledger',
      description: 'Manage payment logs for all farmers. Track payments, generate reports, and maintain transparent records.',
      color: 'bg-orange-50 border-orange-200 text-orange-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Route & Timing Management',
      description: 'Organize collection routes, manage timing schedules, and optimize your milk collection operations.',
      color: 'bg-red-50 border-red-200 text-red-600'
    },
    {
      icon: FaClipboardCheck,
      title: 'Quality Verification',
      description: 'Verify and record milk quality parameters including fat, SNF, and CLR readings for accurate rate calculation.',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-600'
    }
  ]

  const responsibilities = [
    'Collect milk from assigned farmers',
    'Verify quality and quantity',
    'Supply to dairy',
    'Manage farmer payments',
    'Maintain transparent records'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9ff] via-green-50 to-[#f7f9ff]">
      {/* Hero Section */}
      <section className="px-4 md:px-16 lg:px-24 xl:px-32 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Milk Vendor <span className="text-green-500">Portal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Your operational hub for milk collection and supply management
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A specialized platform designed to help milk vendors collect milk from farmers, 
            verify quality, supply to dairies, and manage farmer payments. Login to access 
            your vendor dashboard and streamline your operations.
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
            Everything you need to efficiently manage milk collection and supply operations
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Login to Your Vendor Account</h3>
                <p className="text-gray-600">
                  Access your vendor dashboard by logging in with your credentials.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collect Milk from Farmers</h3>
                <p className="text-gray-600">
                  Collect milk from your assigned farmers. Verify and record quantity, 
                  quality readings (fat, SNF, CLR), and collection timings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Supply to Dairy</h3>
                <p className="text-gray-600">
                  Supply collected milk to your assigned dairy. Maintain daily supply 
                  summaries and complete transaction records.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Farmer Payments</h3>
                <p className="text-gray-600">
                  Track and manage payment logs for all farmers. Generate payment reports 
                  and maintain transparent payment records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Your Key Responsibilities
          </h2>
          <p className="text-gray-600 mb-8">
            As a milk vendor, you are the operational link between farmers and dairies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {responsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white border border-green-200 rounded-full text-gray-700 font-medium hover:bg-green-50 hover:border-green-400 transition"
              >
                {responsibility}
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
            Login to access the Milk Vendor Portal and start managing your operations today
          </p>
          <button className="relative bg-green-400 hover:bg-green-500 text-white py-3 px-8 rounded-full transition overflow-hidden group text-lg font-medium">
            <span className="relative z-10 flex items-center gap-2">
              Login to Vendor Portal
              <FaTruck className="w-5 h-5" />
            </span>
            <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
      </section>
    </div>
  )
}

