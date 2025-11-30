import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { NAVIGATION_ROUTES } from '../routes/config'

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 pt-6 sm:pt-8 w-full text-gray-500 border-t border-black">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8 sm:gap-10 border-b border-gray-500/30 pb-6">
        <div className="w-full lg:max-w-96 mb-6 lg:mb-0">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/brand_logo.png"
              alt="OUR Dairy"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
            <span className="text-xl sm:text-2xl font-semibold text-gray-900">Our Dairy</span>
          </Link>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm">
            An end-to-end platform that digitalizes and streamlines the entire milk supply chain,
            connecting Admins, Dairies, Milk Vendors, and Farmers into one integrated ecosystem
            with transparent workflows and efficient operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 lg:flex-1 lg:justify-end">
          <div>
            <h2 className="font-semibold mb-4 sm:mb-5 text-gray-800 text-sm sm:text-base">Company</h2>
            <ul className="text-xs sm:text-sm space-y-2">
              <li>
                <Link to="/" className="hover:text-green-600 transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-600 transition">About</Link>
              </li>
              {NAVIGATION_ROUTES.filter(route => route.path !== '/about' && route.path !== '/feeds').map(route => (
                <li key={route.path}>
                  <Link to={route.path} className="hover:text-green-600 transition">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4 sm:mb-5 text-gray-800 text-sm sm:text-base">Our apps</h2>
            <ul className="text-xs sm:text-sm space-y-2">
              <li>
                <a href="http://localhost:5174/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                  Farmer
                </a>
              </li>
              <li>
                <a href="http://localhost:5175/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                  Vendor
                </a>
              </li>
              <li>
                <a href="http://localhost:5176/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                  Dairy
                </a>
              </li>
              <li>
                <Link to="/vet" className="hover:text-green-600 transition">
                  Our vet +
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-semibold mb-4 sm:mb-5 text-gray-800 text-sm sm:text-base">Get in touch</h2>
            <div className="text-xs sm:text-sm space-y-2">
              <p>
                <a href="tel:+917981474788" className="hover:text-green-600 transition break-all">
                  +91 7981474788
                </a>
              </p>
              <p>
                <a href="mailto:our.dairy.official@gmail.com" className="hover:text-green-600 transition break-all">
                  our.dairy.official@gmail.com
                </a>
              </p>
            </div>
            <Link
              to="/about#contact"
              className="relative flex items-center justify-center gap-2 mt-4 bg-green-400 hover:bg-green-500 text-white py-2 sm:py-2.5 px-4 sm:px-6 rounded-full transition overflow-hidden group text-xs sm:text-sm w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-xs sm:text-sm pb-4 sm:pb-5 px-4">
        Copyright {new Date().getFullYear()} © <Link to="/" className="hover:text-green-600 transition">Our Dairy</Link>. All Right Reserved.
      </p>
    </footer>
  )
}
