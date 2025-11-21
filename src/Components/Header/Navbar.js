import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
              {/* Sun Spiral Logo */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Sun rays */}
                <g className="fill-yellow-400">
                  <circle cx="20" cy="20" r="3" />
                  <circle cx="50" cy="15" r="3" />
                  <circle cx="80" cy="20" r="3" />
                  <circle cx="85" cy="50" r="3" />
                  <circle cx="80" cy="80" r="3" />
                  <circle cx="50" cy="85" r="3" />
                  <circle cx="20" cy="80" r="3" />
                  <circle cx="15" cy="50" r="3" />
                </g>
                {/* Spiral */}
                <path
                  d="M 50 50 Q 55 45 60 45 Q 65 45 65 50 Q 65 60 55 60 Q 40 60 40 50 Q 40 35 55 35 Q 75 35 75 50 Q 75 70 55 70"
                  fill="none"
                  stroke="#84cc16"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="50" r="4" fill="#84cc16" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-gray-800">
                ECO<span className="text-lime-500">LAND</span>
              </span>
              <span className="text-[10px] sm:text-xs text-gray-600 tracking-wider">
                ORGANIC LIFESTYLE
              </span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-lime-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-lime-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-lime-600 hover:text-lime-700 transition-colors font-medium"
            >
              Gallery
            </a>
            <a
              href="#shop"
              className="text-gray-700 hover:text-lime-600 transition-colors font-medium"
            >
              Shop
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-lime-600 transition-colors font-medium"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-lime-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Right Section - Cart & User */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Cart Price - Hidden on small screens */}
            <span className="hidden sm:block text-gray-700 font-medium">
              ₹0.00
            </span>

            {/* Cart Icon with Badge */}
            <div className="relative">
              <button className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full transition-colors">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
              <span className="absolute -top-1 -right-1 bg-lime-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                0
              </span>
            </div>

            {/* User Icon - Hidden on small screens */}
            <button className="hidden sm:block p-2 hover:bg-gray-200 rounded-full transition-colors">
              <User className="w-6 h-6 text-gray-700" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-lime-600 hover:bg-gray-100 transition-colors font-medium py-2 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-lime-600 hover:bg-gray-100 transition-colors font-medium py-2 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-lime-600 hover:text-lime-700 hover:bg-gray-100 transition-colors font-medium py-2 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#shop"
                className="text-gray-700 hover:text-lime-600 hover:bg-gray-100 transition-colors font-medium py-2 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-lime-600 hover:bg-gray-100 transition-colors font-medium py-2 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-lime-600 hover:bg-gray-100 transition-colors font-medium py-2 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

              {/* Mobile User Section */}
              <div className="sm:hidden pt-3 border-t border-gray-200">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-lime-600 hover:bg-gray-100 transition-colors font-medium py-2 px-4 rounded w-full">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
