import React from "react";
import { Truck, Award, DollarSign, RefreshCw } from "lucide-react";

export default function FeaturesBanner() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Above ₹ Only",
      color: "text-green-400",
    },
    {
      icon: Award,
      title: "Certified Organic",
      description: "100% Guarantee",
      color: "text-green-400",
    },
    {
      icon: DollarSign,
      title: "Huge Savings",
      description: "At Lowest Price",
      color: "text-green-400",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "No Questions Asked",
      color: "text-green-400",
    },
  ];

  return (
    <div className="bg-black py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-6 flex items-start gap-4 hover:bg-zinc-700 transition-colors"
            >
              <feature.icon
                className={`w-8 h-8 ${feature.color} flex-shrink-0`}
              />
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
