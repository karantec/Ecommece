import { ShoppingCart, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative Leaves - Background */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
        <svg
          className="absolute right-0 top-10 w-64 h-64 text-lime-300"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <ellipse
            cx="100"
            cy="100"
            rx="80"
            ry="30"
            transform="rotate(-45 100 100)"
          />
        </svg>
        <svg
          className="absolute right-20 top-40 w-80 h-80 text-lime-200"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <ellipse
            cx="100"
            cy="100"
            rx="90"
            ry="35"
            transform="rotate(-30 100 100)"
          />
        </svg>
        <svg
          className="absolute right-10 bottom-20 w-72 h-72 text-lime-300"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <ellipse
            cx="100"
            cy="100"
            rx="85"
            ry="32"
            transform="rotate(-60 100 100)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Product Images */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Product Display */}
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1599909533730-f4321b94686f?w=600&q=80"
                  alt="Organic Products"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>

              {/* Scattered Products Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {/* Product 1 - Top Left */}
                  <div className="transform -translate-x-8 -translate-y-8">
                    <div className="bg-white rounded-lg shadow-xl p-2 w-32 sm:w-40">
                      <img
                        src="https://images.unsplash.com/photo-1599909533730-f4321b94686f?w=200&q=80"
                        alt="Rajma"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>

                  {/* Product 2 - Top Right */}
                  <div className="transform translate-x-8 -translate-y-4">
                    <div className="bg-white rounded-lg shadow-xl p-2 w-32 sm:w-40">
                      <img
                        src="https://images.unsplash.com/photo-1615485500834-bc10199bc964?w=200&q=80"
                        alt="Turmeric Powder"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>

                  {/* Product 3 - Center */}
                  <div className="col-span-2 flex justify-center transform translate-y-4">
                    <div className="bg-white rounded-lg shadow-xl p-2 w-36 sm:w-44">
                      <img
                        src="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&q=80"
                        alt="Cashews"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>

                  {/* Product 4 - Bottom Left */}
                  <div className="transform -translate-x-6 translate-y-12">
                    <div className="bg-white rounded-lg shadow-xl p-2 w-28 sm:w-36">
                      <img
                        src="https://images.unsplash.com/photo-1599909533730-f4321b94686f?w=200&q=80"
                        alt="Black Pepper"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Scattered Ingredients */}
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32">
                <img
                  src="https://images.unsplash.com/photo-1599909533730-f4321b94686f?w=150&q=80"
                  alt="Spices"
                  className="w-full h-full object-cover rounded-full opacity-80"
                />
              </div>

              <div className="absolute bottom-10 right-0 w-28 h-28 sm:w-36 sm:h-36">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=150&q=80"
                  alt="Cashews"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left relative z-20">
            {/* Leaf Icon Badge */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="flex space-x-1">
                <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-lime-600 animate-pulse" />
                <Leaf
                  className="w-6 h-6 sm:w-8 sm:h-8 text-lime-500 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="bg-lime-100 text-lime-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
                Best Quality Products
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Join The Organic
              <br />
              <span className="text-lime-600">Movement!</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Discover our premium range of organic products - from fresh spices
              to natural fertilizers. Embrace sustainable living with
              DesiKrishi.
            </p>

            {/* CTA Button */}
            <button className="group inline-flex items-center space-x-2 bg-lime-600 hover:bg-lime-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <ShoppingCart className="w-5 h-5" />
              <span>SHOP NOW</span>
            </button>

            {/* Stats or Features */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-lime-600">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Organic</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-lime-600">
                  500+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Products</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-lime-600">
                  10K+
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1440V0C1440 0 1200 48 720 48C240 48 0 0 0 0V48Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#f9fafb" />
              <stop offset="100%" stopColor="#f3f4f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
