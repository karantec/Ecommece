import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClass = (path) => {
    return `${
      isActive(path)
        ? "text-lime-600 hover:text-lime-700"
        : "text-gray-700 hover:text-lime-600"
    } transition-colors font-medium cursor-pointer`;
  };

  const mobileNavLinkClass = (path) => {
    return `${
      isActive(path)
        ? "text-lime-600 hover:text-lime-700 hover:bg-gray-100"
        : "text-gray-700 hover:text-lime-600 hover:bg-gray-100"
    } transition-colors font-medium py-2 px-4 rounded cursor-pointer`;
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                {/* Sun Spiral Logo */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
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
                  DESI<span className="text-lime-500">KRISHI</span>
                </span>
                <span className="text-[10px] sm:text-xs text-gray-600 tracking-wider">
                  ORGANIC LIFESTYLE
                </span>
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <span
                onClick={() => handleNavigation("/")}
                className={navLinkClass("/")}
              >
                Home
              </span>
              <span
                onClick={() => handleNavigation("/About")}
                className={navLinkClass("/About")}
              >
                About
              </span>
              <span
                onClick={() => handleNavigation("/shop")}
                className={navLinkClass("/shop")}
              >
                Shop
              </span>
              <span
                onClick={() => handleNavigation("/gallery")}
                className={navLinkClass("/gallery")}
              >
                Gallery
              </span>
              <span
                onClick={() => handleNavigation("/blog")}
                className={navLinkClass("/blog")}
              >
                Blog
              </span>
              <span
                onClick={() => handleNavigation("/Contact")}
                className={navLinkClass("/Contact")}
              >
                Contact
              </span>
            </div>

            {/* Right Section - Cart & User */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Cart Price */}
              <span className="hidden sm:block text-gray-700 font-medium">
                ₹0.00
              </span>

              {/* Cart Icon with Badge */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-1.5 sm:p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-lime-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  0
                </span>
              </button>

              {/* User Icon */}
              <button
                onClick={() => handleNavigation("/profile")}
                className="hidden sm:block p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
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
                <span
                  className={mobileNavLinkClass("/")}
                  onClick={() => handleNavigation("/")}
                >
                  Home
                </span>
                <span
                  className={mobileNavLinkClass("/About")}
                  onClick={() => handleNavigation("/About")}
                >
                  About
                </span>
                <span
                  className={mobileNavLinkClass("/shop")}
                  onClick={() => handleNavigation("/shop")}
                >
                  Shop
                </span>
                <span
                  className={mobileNavLinkClass("/gallery")}
                  onClick={() => handleNavigation("/gallery")}
                >
                  Gallery
                </span>
                <span
                  className={mobileNavLinkClass("/blog")}
                  onClick={() => handleNavigation("/blog")}
                >
                  Blog
                </span>
                <span
                  className={mobileNavLinkClass("/Contact")}
                  onClick={() => handleNavigation("/Contact")}
                >
                  Contact
                </span>

                {/* Mobile User Section */}
                <div className="sm:hidden pt-3 border-t border-gray-200">
                  <span
                    className="flex items-center space-x-2 text-gray-700 hover:text-lime-600 hover:bg-gray-100 transition-colors font-medium py-2 px-4 rounded w-full cursor-pointer"
                    onClick={() => handleNavigation("/profile")}
                  >
                    <User className="w-5 h-5" />
                    <span>Account</span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Shopping Cart Drawer Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Shopping Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Cart Content - Empty State */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-180px)] p-6">
          <ShoppingCart className="w-24 h-24 text-gray-300 mb-4" />
          <p className="text-gray-500 text-center">No products in the cart.</p>
        </div>

        {/* Cart Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
          <button
            onClick={() => {
              setIsCartOpen(false);
              handleNavigation("/shop");
            }}
            className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-4 rounded-lg transition-colors uppercase"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
}
