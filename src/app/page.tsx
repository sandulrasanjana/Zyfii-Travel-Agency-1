import Image from "next/image";
import Link from "next/link";
import { Search, Shield, UserCheck, Clock, CheckCircle } from "lucide-react";
import TourCard from "@/components/TourCard";

export default function Home() {
  const featuredTours = [
    {
      title: "Sigiriya Heritage & Wildlife",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "3 Days / 2 Nights",
      price: "Inquire for Pricing",
      description: "Traverse through the ancient kingdom of Sigiriya and witness the majestic elephants of Minneriya in ultimate comfort.",
    },
    {
      title: "Southern Coastal Luxury",
      image: "https://images.unsplash.com/photo-1544550581-5f7ceaf2f0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "5 Days / 4 Nights",
      price: "Bespoke Rates",
      description: "Sunset whale watching, private colonial villa stays, and the pristine shores of Mirissa await your arrival.",
    },
    {
      title: "Hill Country Elegance",
      image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "2 Days / 1 Night",
      price: "Exclusive Experience",
      description: "Journey through misty tea plantations and emerald mountains. An intimate escape to the heart of the island.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-accent selection:text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
          <Image
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90"
            alt="Sigiriya Rock Fortress Sri Lanka"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <span className="luxury-text text-accent mb-6 block fade-in-up">The Essence of Sri Lanka</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight drop-shadow-2xl fade-in-up delay-100">
            Unveiling Nature's <br />
            <span className="italic font-light">Hidden Treasures</span>
          </h1>
          <p className="text-lg md:text-xl mb-12 font-light tracking-widest uppercase max-w-2xl mx-auto opacity-90 fade-in-up delay-200">
            Premium Tour Hire & Bespoke Travel Experiences
          </p>

          <div className="fade-in-up delay-300">
            <Link
              href="/packages"
              className="bg-white hover:bg-accent text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-500 shadow-2xl hover:scale-105"
            >
              Explore Packages
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-white/30 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-accent after:rounded-full"></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white reveal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-24">
            <span className="luxury-text text-gray-400 text-sm block mb-4">Our Commitment</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">Why Choose <span className="italic">ZYFII?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { icon: UserCheck, title: "Elite Chauffeurs", desc: "Expert guides who unveil the heart of Sri Lanka with wisdom and care." },
              { icon: Shield, title: "Curated Safety", desc: "Our fleet represents the pinnacle of reliability, meticulously maintained for your comfort." },
              { icon: Clock, title: "Eternal Support", desc: "Around-the-clock concierage service for a seamless island odyssey." },
            ].map((feature, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:bg-accent/10 border border-gray-100 group-hover:border-accent/20">
                  <feature.icon size={32} className="text-black transition-colors duration-300 group-hover:text-accent" />
                </div>
                <h3 className="text-xl font-serif mb-4 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div className="text-center md:text-left">
              <span className="luxury-text text-gray-400 text-sm block mb-4">Curated Experiences</span>
              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">Bespoke <span className="italic">Journeys</span></h2>
            </div>
            <Link href="/packages" className="text-black font-bold uppercase tracking-[0.2em] text-[10px] border-b border-black pb-1 hover:text-accent hover:border-accent transition-all duration-300">
              All Destination Experiences
            </Link>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 md:pb-0 scrollbar-hide">
            {featuredTours.map((tour, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-0">
                <TourCard {...tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <span className="luxury-text text-accent block mb-6">Begin Your Story</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight max-w-3xl mx-auto">Ready for the adventure of a <span className="italic">lifetime?</span></h2>
          <a
            href="https://wa.me/94701536128"
            className="bg-accent hover:bg-white text-black px-14 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-2xl transition-all duration-500 inline-block hover:scale-105"
          >
            Connect on WhatsApp
          </a>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );
}
