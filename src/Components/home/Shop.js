import { useState } from "react";
import { Search, Star, ChevronDown } from "lucide-react";

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([120, 1150]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Products", count: 11 },
    {
      id: "vermicompost",
      name: "Vermicompost & Organic Fertilizers",
      count: 8,
    },
    { id: "potting-soil", name: "Potting Soil & Cocopeat", count: 5 },
    { id: "grow-bags", name: "Grow Bags", count: 6 },
    { id: "bio-fertilizers", name: "Bio Fertilizers & Nutrients", count: 7 },
    { id: "pheromone-traps", name: "Pheromone Traps & Lures", count: 4 },
    { id: "solar-traps", name: "Solar Traps", count: 3 },
    { id: "ipm-products", name: "IPM Products", count: 5 },
    { id: "polyhouse", name: "Polyhouse Solutions", count: 2 },
    { id: "garden-kits", name: "Home Garden Kits", count: 6 },
    { id: "plants", name: "Indoor & Orchard Plants", count: 8 },
    { id: "machinery", name: "Agricultural Machinery", count: 4 },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Vermicompost",
      category: "vermicompost",
      price: 250.0,
      originalPrice: 350.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
      badge: null,
      inStock: true,
    },
    {
      id: 2,
      name: "Organic Potting Mix",
      category: "potting-soil",
      price: 180.0,
      originalPrice: 220.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80",
      badge: "Out of Stock",
      inStock: false,
    },
    {
      id: 3,
      name: "Cocopeat Block 5kg",
      category: "potting-soil",
      price: 320.0,
      originalPrice: 400.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=400&q=80",
      badge: null,
      inStock: true,
    },
    {
      id: 4,
      name: "Grow Bag Set (10 Pieces)",
      category: "grow-bags",
      price: 450.0,
      originalPrice: 550.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&q=80",
      badge: null,
      inStock: true,
    },
    {
      id: 5,
      name: "Bio NPK Fertilizer",
      category: "bio-fertilizers",
      price: 280.0,
      originalPrice: 350.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&q=80",
      badge: null,
      inStock: true,
    },
    {
      id: 6,
      name: "Pheromone Trap Kit",
      category: "pheromone-traps",
      price: 520.0,
      originalPrice: 650.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80",
      badge: null,
      inStock: true,
    },
    {
      id: 7,
      name: "Solar Insect Trap",
      category: "solar-traps",
      price: 1120.0,
      originalPrice: 1350.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80",
      badge: null,
      inStock: true,
    },
    {
      id: 8,
      name: "Yellow Sticky Trap",
      category: "ipm-products",
      price: 150.0,
      originalPrice: 200.0,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80",
      badge: null,
      inStock: true,
    },
    {
      id: 9,
      name: "Home Garden Starter Kit",
      category: "garden-kits",
      price: 680.0,
      originalPrice: 850.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&q=80",
      badge: null,
      inStock: true,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-gray-500">
            <span className="hover:text-lime-600 cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-lime-600 font-medium">Shop</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none"
                  />
                  <button className="absolute right-0 top-0 h-full px-3 bg-lime-600 text-white rounded-r-lg hover:bg-lime-700 transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Filter by price
                </h3>
                <input
                  type="range"
                  min="120"
                  max="1150"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full h-2 bg-lime-200 rounded-lg appearance-none cursor-pointer accent-lime-600"
                />
                <div className="flex justify-between mt-3">
                  <span className="text-sm text-gray-600">
                    ₹{priceRange[0]}
                  </span>
                  <span className="text-sm text-gray-600">
                    ₹{priceRange[1]}
                  </span>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? "bg-lime-50 text-lime-600 font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-sm">{category.name}</span>
                        <span className="text-xs text-gray-500 ml-2">
                          ({category.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-lime-600 mb-2">
                    Shop
                  </h1>
                  <p className="text-gray-600">
                    Showing all {filteredProducts.length} results
                  </p>
                </div>

                {/* Sort Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
                  >
                    <option value="default">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="latest">Sort by latest</option>
                    <option value="price-low">
                      Sort by price: low to high
                    </option>
                    <option value="price-high">
                      Sort by price: high to low
                    </option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden aspect-square bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-lime-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-gray-900">
                        ₹{product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Button */}
                    <button
                      disabled={!product.inStock}
                      className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                        product.inStock
                          ? "bg-lime-600 hover:bg-lime-700 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {product.inStock ? "SELECT OPTIONS" : "READ MORE"}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setPriceRange([120, 1150]);
                    setSearchQuery("");
                  }}
                  className="mt-4 text-lime-600 hover:text-lime-700 font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
