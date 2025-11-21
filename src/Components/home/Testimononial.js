import React from "react";
import { Star } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "I've been to P&G farms and it soothes my soul to be there, and I keep looking for a chance to visit the place. It's also heartening to know that they've entered the market to sell organic products. One should definitely choose what they offer like pepper, turmeric and honey and a host of other food items.",
      author: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      id: 2,
      rating: 5,
      text: "I'm a businessman and have been using the turmeric procured from your farm in the production of sweets and other condiments we make. We give the best to our customers and also procure all our items from organic farms. Your future customers will also be your loyal customers, when they start buying them online from your store.",
      author: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      rating: 5,
      text: "I'm looking forward to Ecoland going online; it will be a delight for the customers to buy them from a single source.",
      author: "David Martinez",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 relative overflow-hidden">
      {/* Background Decorative Leaves */}
      <div className="absolute top-0 left-0 opacity-5">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50 Q150 100 100 200 Q50 250 20 300 Q50 200 100 150 Q80 100 100 50Z"
            fill="#84cc16"
          />
          <path
            d="M200 100 Q250 150 200 250 Q150 300 120 350 Q150 250 200 200 Q180 150 200 100Z"
            fill="#84cc16"
          />
          <path
            d="M350 20 Q400 70 350 170 Q300 220 270 270 Q300 170 350 120 Q330 70 350 20Z"
            fill="#84cc16"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Customer's Reviews
          </h2>
          <div className="flex justify-center">
            <svg
              width="100"
              height="20"
              viewBox="0 0 100 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5 L15 15 L20 5"
                stroke="#84cc16"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M30 5 L35 15 L40 5"
                stroke="#84cc16"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M50 5 L55 15 L60 5"
                stroke="#84cc16"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M70 5 L75 15 L80 5"
                stroke="#84cc16"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                {review.text}
              </p>

              {/* Author Avatar */}
              <div className="flex justify-center">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-14 h-14 rounded-full border-4 border-lime-500 object-cover"
                />
              </div>

              {/* Optional: Author Name (hidden by default, can be shown) */}
              <p className="text-center text-gray-700 font-semibold mt-3 opacity-0">
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
