import React from "react";
import { ArrowRight } from "lucide-react";

export default function ProductCategories() {
  const categories = [
    {
      id: 1,
      title: "Dry Fruits",
      description:
        "Our dry fruits are of the best variety and we assure 100% quality.",
      image:
        "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&h=400&fit=crop",
      imageAlt: "Cashew nuts",
    },
    {
      id: 2,
      title: "Pulses",
      description:
        "The best rajma is procured from Jammu and also try our Kabuli chana too.",
      image:
        "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=400&fit=crop",
      imageAlt: "Red kidney beans",
    },
    {
      id: 3,
      title: "Organic Spices",
      description:
        "Spices like turmeric, black pepper grown in our farms are bought after by the sweet marts, hoteliers and the domestic users for daily use.",
      image:
        "https://images.unsplash.com/photo-1596040033229-a0b3b4e5e4e6?w=600&h=400&fit=crop",
      imageAlt: "Black pepper",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 relative">
      {/* Decorative Leaf */}
      <div className="absolute top-0 right-10 opacity-80">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 Q70 30 80 50 Q70 70 50 90 Q40 70 35 50 Q40 30 50 10' fill='%2384cc16' opacity='0.3'/%3E%3C/svg%3E"
          alt="leaf decoration"
          className="w-20 h-20"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Shop Now Button */}
                <button className="inline-flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-6 rounded transition-all duration-200 group-hover:gap-3">
                  SHOP NOW
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
