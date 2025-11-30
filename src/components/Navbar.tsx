import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { NAVIGATION_ROUTES } from '../routes/config';
import UserTypeModal from './UserTypeModal';
import AnnouncementBanner from './home/AnnouncementBanner';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserTypeModalOpen, setIsUserTypeModalOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <AnnouncementBanner />
      <nav className="sticky top-0 z-20 h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 transition-all border-b border-black">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/brand_logo.png"
            alt="OUR Dairy"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 md:pl-28">
          {NAVIGATION_ROUTES.map(route => {
            const active = isActive(route.path);
            return (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className={`hover:text-gray-500/80 transition ${active ? 'text-green-500 font-medium' : ''}`}
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Get Started Button - Desktop */}
        <button
          onClick={() => setIsUserTypeModalOpen(true)}
          className="md:inline hidden relative bg-green-400 text-white ml-20 px-9 py-2 rounded-full active:scale-95 transition-all overflow-hidden group"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get started
            <FaArrowRight className="w-4 h-4" />
          </span>
          <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        </button>

        {/* Mobile Menu Button */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col space-y-4 text-lg">
            {NAVIGATION_ROUTES.map(route => {
              const active = isActive(route.path);
              return (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm ${active ? 'text-green-500 font-medium' : ''}`}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false)
              setIsUserTypeModalOpen(true)
            }}
            className="relative bg-green-400 text-white mt-6 text-sm active:scale-95 transition-all w-40 h-11 rounded-full overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get started
              <FaArrowRight className="w-3 h-3" />
            </span>
            <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
      </nav>
      <UserTypeModal
        isOpen={isUserTypeModalOpen}
        onClose={() => setIsUserTypeModalOpen(false)}
      />
    </>
  );
}
