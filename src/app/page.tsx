import Image from "next/image";
import Link from "next/link";
import { Search, Shield, UserCheck, Clock, CheckCircle } from "lucide-react";
import TourCard from "@/components/TourCard";

export default function Home() {
  const featuredTours = [
    {
      title: "Tropical Paradise Explorer",
      image: "https://images.unsplash.com/photo-1544550581-5f7ceaf2f0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3 Days / 2 Nights",
      price: "$450",
      description: "Experience the ultimate tropical getaway with our premium van hire. Includes driver and fuel.",
    },
    {
      title: "Coastal Road Trip",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5 Days / 4 Nights",
      price: "$750",
      description: "Drive along the scenic coastlines comfortably. Perfect for families and small groups.",
    },
    {
      title: "Mountain Adventure",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2 Days / 1 Night",
      price: "$300",
      description: "Rugged yet comfortable vehicles for your mountain escape. Experienced drivers included.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Tropical Scenery"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
            Your Journey, Our Wheels. <br />
            <span className="text-secondary">Premium Tour Hire</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Discover the beauty of the tropics with our reliable and comfortable fleet.
          </p>

          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl max-w-2xl mx-auto flex flex-col md:flex-row gap-4 items-center border border-white/30">
            <div className="flex-grow w-full relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full py-3 pl-10 pr-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Link
              href="/packages"
              className="w-full md:w-auto bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Why Choose Zyfii?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide more than just a ride. We provide an experience tailored to your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: UserCheck, title: "Professional Drivers", desc: "Our drivers are experienced, licensed, and friendly guides." },
              { icon: Shield, title: "Safe & Reliable", desc: "All vehicles undergo rigorous maintenance and safety checks." },
              { icon: Clock, title: "24/7 Support", desc: "We are always available to assist you throughout your journey." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Featured Tours</h2>
              <p className="text-gray-600">Hand-picked packages for the best experience.</p>
            </div>
            <Link href="/packages" className="text-primary font-bold hover:text-secondary flex items-center gap-2">
              View All Packages <CheckCircle size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, idx) => (
              <TourCard key={idx} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready for your adventure?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Book your tour hire today and get a special discount on your first trip.</p>
          <a
            href="https://wa.me/1234567890?text=I'm%20ready%20to%20book!"
            className="bg-secondary hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-transform hover:scale-105 inline-block"
          >
            Chat on WhatsApp
          </a>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </section>
    </div>
  );
}
