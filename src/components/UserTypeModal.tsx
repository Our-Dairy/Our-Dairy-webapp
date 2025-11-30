interface UserTypeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function UserTypeModal({ isOpen, onClose }: UserTypeModalProps) {
  if (!isOpen) return null

  const userTypes = [
    {
      name: 'Farmer',
      url: 'http://localhost:5174/',
      description: 'Manage your milk production and track transactions',
      icon: '🐄'
    },
    {
      name: 'Vendor',
      url: 'http://localhost:5175/',
      description: 'Sell milk and manage your vendor operations',
      icon: '🚚'
    },
    {
      name: 'Dairy',
      url: 'http://localhost:5176/',
      description: 'Manage dairy operations and milk collection',
      icon: '🏭'
    }
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Choose Your Role</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-gray-600 mb-6">Select how you want to access the platform:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userTypes.map((type) => (
            <a
              key={type.url}
              href={type.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex flex-col items-center p-6 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all group"
            >
              <span className="text-4xl mb-3">{type.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition">
                {type.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">{type.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

