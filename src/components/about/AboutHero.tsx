export default function AboutHero() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning-Fast Transaction Recording',
      description: 'Record daily milk transactions instantly with minimal load times and optimized performance.'
    },
    {
      icon: '📊',
      title: 'Automated Billing System',
      description: 'Generate accurate 15-day cycle bills automatically with detailed transaction summaries.'
    },
    {
      icon: '🔒',
      title: 'Secure Payment Management',
      description: 'Track payment statuses securely and ensure timely settlements for all stakeholders.'
    }
  ]

  return (
    <section className="py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mx-auto text-gray-900">
        About <span className="text-green-500">OUR Dairy</span>
      </h1>
      <p className="text-base md:text-lg text-slate-600 text-center mt-4 max-w-3xl mx-auto leading-relaxed">
        OUR Dairy is an end-to-end platform designed to digitalize and streamline 
        the entire milk supply chain. It connects Admins, Dairies, Milk Vendors, and Farmers into one integrated 
        ecosystem with role-based access and highly transparent workflows.
      </p>
      <p className="text-sm md:text-base text-slate-500 text-center mt-4 max-w-2xl mx-auto">
        The system ensures efficient milk collection, supply tracking, payment handling, and relationship 
        management between all stakeholders, creating a transparent, error-free, and traceable milk supply chain.
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10 relative">
        <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-green-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <img 
          className="max-w-sm w-full rounded-xl h-auto"
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=830&h=844&auto=format&fit=crop"
          alt="Dairy Operations" 
        />

        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Our Latest Features</h1>
          <p className="text-sm text-slate-500 mt-2">
            Streamline Dairy Operations Without the Complexity — Customizable, Scalable and User-Friendly 
            Transaction Management Platform.
          </p>

          <div className="flex flex-col gap-10 mt-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="size-9 p-2 bg-green-50 border border-green-200 rounded flex items-center justify-center text-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-700">{feature.title}</h3>
                  <p className="text-sm text-slate-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

