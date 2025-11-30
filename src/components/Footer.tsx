import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { NAVIGATION_ROUTES } from '../routes/config'

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 border-t border-black">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/brand_logo.png"
              alt="OUR Dairy"
              className="h-14 w-auto object-contain"
            />
            <span className="text-2xl font-semibold text-gray-900">Our Dairy</span>
          </Link>
          <p className="mt-6 text-sm">
            An end-to-end platform that digitalizes and streamlines the entire milk supply chain,
            connecting Admins, Dairies, Milk Vendors, and Farmers into one integrated ecosystem
            with transparent workflows and efficient operations.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
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
            <h2 className="font-semibold mb-5 text-gray-800">Our apps</h2>
            <ul className="text-sm space-y-2">
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

          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>
                <a href="tel:+917981474788" className="hover:text-green-600 transition">
                  +91 7981474788
                </a>
              </p>
              <p>
                <a href="mailto:our.dairy.official@gmail.com" className="hover:text-green-600 transition">
                  our.dairy.official@gmail.com
                </a>
              </p>
            </div>
            <Link
              to="/about#contact"
              className="relative flex items-center justify-center gap-2 mt-4 bg-green-400 hover:bg-green-500 text-white py-2.5 px-6 rounded-full transition overflow-hidden group text-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <FaArrowRight className="w-4 h-4" />
              </span>
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright {new Date().getFullYear()} © <Link to="/" className="hover:text-green-600 transition">Our Dairy</Link>. All Right Reserved.
      </p>
    </footer>
  )
}
