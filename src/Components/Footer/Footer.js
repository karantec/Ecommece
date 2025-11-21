import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
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
                <span className="text-xl sm:text-2xl font-bold text-white">
                  ECO<span className="text-lime-500">LAND</span>
                </span>
                <span className="text-[10px] sm:text-xs text-lime-600 tracking-wider">
                  ORGANIC LIFESTYLE
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
              Ecoland proudly announces its wide array of organic products for
              the health conscious people. It has on offer healthy food products
              used daily like: saffron, rajma-jammu variety, turmeric, honey,
              cashewnuts, black pepper and shilajeet
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#cart"
                  className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#account"
                  className="text-gray-400 hover:text-lime-500 transition-colors text-sm"
                >
                  My account
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Get In Touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  <span className="text-white font-medium">Call:</span>
                  <a
                    href="tel:8971620369"
                    className="hover:text-lime-500 transition-colors ml-1"
                  >
                    8971620369
                  </a>
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs sm:text-sm break-all">
                  <span className="text-white font-medium">Email:</span>
                  <a
                    href="mailto:shop@ecoland.co.in"
                    className="hover:text-lime-500 transition-colors ml-1"
                  >
                    shop@ecoland.co.in
                  </a>
                </p>
              </div>

              <div>
                <p className="text-white font-medium text-xs sm:text-sm mb-2">
                  Address:
                </p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Sy. no. 6, Main Road, Navage,
                  <br />
                  Belagavi - 591120,
                  <br />
                  State:Karnataka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              Copyright © 2025 | Ecoland. All rights reserved. Powered By{" "}
              <a
                href="https://3iglobalinc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-500 hover:text-lime-400 transition-colors"
              >
                3i Global Inc.
              </a>
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 sm:space-x-5 order-1 sm:order-2">
              <a
                href="#yelp"
                className="text-gray-400 hover:text-lime-500 transition-colors p-2 hover:bg-slate-800 rounded-full"
                aria-label="Yelp"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.271 17.654c-.005.042 2.643 1.443 2.945 1.569.302.126.628.136.91-.029.281-.165.371-.449.343-.782-.028-.333-.679-3.088-.747-3.375-.068-.288-.25-.527-.546-.597-.296-.07-3.317-.828-3.531-.828-.214 0-.379.16-.374.298.005.138.005.694 0 3.744zm-1.621-7.213c.012.044-.001.091-.036.127l-2.329 2.39c-.216.222-.282.518-.165.766.117.248.392.382.676.323l3.487-.727c.284-.059.489-.294.502-.584.013-.291-.008-3.765-.008-3.961 0-.196-.14-.343-.325-.343-.185 0-1.781.931-1.802 1.009zm.925-3.562c.002.181.157.314.348.298l3.538-.297c.29-.024.518-.258.545-.552.027-.295-.144-.565-.411-.634l-3.476-.898c-.267-.069-.527.036-.609.29-.082.254-.937 1.611-.937 1.611s.002.001.002.182zm6.214 5.967c-.162-.152-1.999-1.65-2.167-1.748-.168-.099-.36-.089-.499.062-.139.151-.173.357-.063.548.11.191 1.656 2.73 1.737 2.876.081.146.249.232.437.198.188-.034 3.186-.912 3.391-1.022.205-.11.295-.32.235-.522-.06-.202-.908-2.965-.908-2.965s-.001-.001-.163-.153zm-10.572 2.165c.031-.188-.082-.368-.27-.426l-3.391-.994c-.188-.055-.385.023-.46.203-.075.18-.746 2.906-.746 2.906s-.005.038-.005.125c0 .087.047.171.136.214.089.043 2.842 1.251 3.113 1.363.271.112.566.027.686-.207.12-.234 1.012-2.883 1.012-2.883s.005-.035-.075-.301z" />
                </svg>
              </a>
              <a
                href="#facebook"
                className="text-gray-400 hover:text-lime-500 transition-colors p-2 hover:bg-slate-800 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#twitter"
                className="text-gray-400 hover:text-lime-500 transition-colors p-2 hover:bg-slate-800 rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#instagram"
                className="text-gray-400 hover:text-lime-500 transition-colors p-2 hover:bg-slate-800 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
