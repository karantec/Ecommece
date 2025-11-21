import { Check, Leaf, Mail, Phone, MapPin, Users } from "lucide-react";

export default function AboutUs() {
  const products = [
    "Organic Fertilizers",
    "Home Garden Kits",
    "Protected Farming Solutions",
    "Pest Management Products",
    "Growing Solutions",
    "Eco-Friendly Inputs",
  ];

  const leadership = [
    {
      name: "Mr. Aniruddha Biswas",
      position: "Chief Executive Officer (CEO)",
      description:
        "Visionary agriculturist and entrepreneur driving innovation, sustainability, and digital transformation in modern farming.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    },
    {
      name: "Mr. Tapank Das",
      position: "Chief Marketing Officer (CMO)",
      description:
        "Focused on brand development, strategic marketing, and connecting sustainable agro solutions with farmers and consumers.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    },
    {
      name: "Mr. Animesh Biswas",
      position: "Chief Financial Officer (CFO)",
      description:
        "Manages financial growth, business planning, and long-term investment strategies to ensure a stable and scalable agribusiness model.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-600 to-green-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About DesiKrishi
          </h1>
          <p className="text-lg sm:text-xl text-lime-50 max-w-3xl mx-auto">
            Better Farming, Better Future
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* About the Company Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About the Company
              </h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">
                    DesiKrishi Agro Industries Pvt. Ltd.
                  </span>{" "}
                  is a forward-thinking agribusiness dedicated to promoting
                  organic and sustainable farming for a healthier and greener
                  future.
                </p>
                <p>
                  We specialize in eco-friendly agricultural inputs, innovative
                  protected farming solutions, and integrated pest management
                  products that empower farmers, agri-entrepreneurs, and home
                  growers alike.
                </p>
                <p>
                  At DesiKrishi, we believe that healthy living begins with
                  homegrown food. Through our home garden kits, organic
                  fertilizers, and easy-to-use growing solutions, we encourage
                  individuals and families to grow their own fresh,
                  chemical-free vegetables right at home — supporting both good
                  health and environmental balance.
                </p>
                <p className="font-semibold text-lime-700 text-lg">
                  Our mission — "Better Farming, Better Future" — drives us to
                  make agriculture more sustainable, profitable, and accessible
                  for everyone, from small farmers to urban garden enthusiasts.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-first lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                  alt="Organic Farming"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Products Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-4">
                <Check className="w-8 h-8 text-lime-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Sustainable solutions for modern agriculture and home gardening
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-lime-50 rounded-lg hover:bg-lime-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-lime-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-lime-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the visionaries behind DesiKrishi's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-lime-600 font-semibold mb-3">
                    {leader.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-gradient-to-br from-lime-600 to-green-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Contact Details */}
            <div className="p-8 sm:p-10 lg:p-12 text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Office Address
                    </h3>
                    <p className="text-lime-50 leading-relaxed">
                      DesiKrishi Agro Industries Pvt. Ltd.
                      <br />
                      Onda Cinema Road, Onda, Bankura,
                      <br />
                      West Bengal – 722144
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a
                      href="tel:+919239261803"
                      className="text-lime-50 hover:text-white transition-colors text-lg"
                    >
                      +91 9239261803
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <div className="space-y-1">
                      <p className="text-lime-50">Company Email:</p>
                      <a
                        href="mailto:desikrishiagro.pvt@gmail.com"
                        className="text-white hover:text-lime-100 transition-colors block break-all"
                      >
                        desikrishiagro.pvt@gmail.com
                      </a>
                      <p className="text-lime-50 mt-3">Customer Support:</p>
                      <a
                        href="mailto:desikrishiagro.pvt@gmail.com"
                        className="text-white hover:text-lime-100 transition-colors block break-all"
                      >
                        desikrishiagro.pvt@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80"
                alt="Contact Us"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lime-600/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a farmer, entrepreneur, or home gardener, DesiKrishi
            has the right solutions for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">
              Explore Our Products
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
