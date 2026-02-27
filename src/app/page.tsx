"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Shield, UserCheck, Clock, CheckCircle, ChevronRight, ChevronLeft, MessageCircle } from "lucide-react";
import SimpleTourCard from "@/components/SimpleTourCard";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollAmount = 296; // Fixed: Card(256px) + Gap(40px)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const index = Math.round(scrollLeft / scrollAmount);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const scrollAmount = 296; // Matching scroll amount

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const featuredTours = [
    {
      title: "Sigiriya Heritage & Wildlife",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "3 Days / 2 Nights",
      price: "Inquire for Pricing",
      description: "Witness the ancient fortress and majestic wildlife in a curated private expedition.",
    },
    {
      title: "Southern Coastal Luxury",
      image: "https://images.unsplash.com/photo-1544550581-5f7ceaf2f0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "5 Days / 4 Nights",
      price: "Bespoke Rates",
      description: "Pristine beaches and colonial heritage meet in this ultimate island coastal escape.",
    },
    {
      title: "Hill Country Elegance",
      image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "2 Days / 1 Night",
      price: "Exclusive Experience",
      description: "Breathe the mist of tea plantations and emerald mountains in luxury.",
    },
    {
      title: "Wild Yala Expedition",
      image: "https://images.unsplash.com/photo-1589901594833-855673a5a41d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "4 Days / 3 Nights",
      price: "Adventure Rates",
      description: "Deep jungle safaris looking for the elusive leopard and vibrant wildlife.",
    },
    {
      title: "Kandy Cultural Soul",
      image: "https://images.unsplash.com/photo-1586944210214-43407e5967ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "3 Days / 2 Nights",
      price: "Standard Hire",
      description: "Explore the sacred temples and traditional ceremonies of our historic capital.",
    },
    {
      title: "Galle Fort Whispers",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "2 Days / 1 Night",
      price: "Day Hire",
      description: "Walk the ramparts of history in the most preserved Dutch fort in Asia.",
    },
    {
      title: "Nuwara Eliya Tea Trails",
      image: "https://images.unsplash.com/photo-1517404212773-772921868461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "3 Days / 2 Nights",
      price: "Cool Escape",
      description: "Stay in colonial bungalows amidst the rolling green valleys of Little England.",
    },
    {
      title: "Bentota Golden Sands",
      image: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "2 Days / 1 Night",
      price: "Beach Lovers",
      description: "Jet-ski across rivers and relax on some of the world's most beautiful shores.",
    },
    {
      title: "Trincomalee Marine Life",
      image: "https://images.unsplash.com/photo-1589182397057-b846e499716e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "4 Days / 3 Nights",
      price: "Marine Special",
      description: "Whale watching and coral snorkeling in the crystal blue waters of the East.",
    },
    {
      title: "Anuradhapura Holy City",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "3 Days / 2 Nights",
      price: "Ancient Tour",
      description: "A spiritual pilgrimage to the roots of our ancient Buddhist civilization.",
    },
    {
      title: "Ella Ravana Falls",
      image: "https://images.unsplash.com/photo-1538356111083-d24be3971bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "3 Days / 2 Nights",
      price: "Mist Escape",
      description: "Hike the 9-arch bridge and witness the legendary falls of Ravana.",
    },
    {
      title: "Polonnaruwa Chronicles",
      image: "https://images.unsplash.com/photo-1588142345624-8b637d1d2b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "2 Days / 1 Night",
      price: "History Rebuilt",
      description: "Cycle through the ruins of a medieval kingdom and colossal stone statues.",
    },
  ];

  return (
    <div className="flex flex-col selection:bg-accent selection:text-black min-h-screen font-sans">

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
          <Image
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90"
            alt="Sigiriya Rock Fortress Sri Lanka"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 px-6 max-w-6xl mx-auto mt-20 md:mt-24">
          <span className="luxury-text text-accent text-[10px] md:text-sm mb-8 block fade-in-up tracking-[0.2em] md:tracking-[0.3em] font-medium opacity-90">The Essence of Sri Lanka</span>
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight drop-shadow-2xl fade-in-up delay-100 uppercase">
            Travel With <br />
            <span className=" font-light lowercase">Unmatched Elegance</span>
          </h1>
          <p className="text-[10px] sm:text-xs md:text-base lg:text-lg mb-12 font-light tracking-[0.2em] uppercase max-w-2xl mx-auto opacity-80 fade-in-up delay-200 leading-relaxed">
            Premium Tour Hire & Bespoke Travel Experiences
          </p>

          <div className="fade-in-up delay-300 flex flex-col items-center gap-10 mt-8">
            <Link
              href="#packages"
              className="bg-accent hover:bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-500 shadow-2xl hover:scale-105"
            >
              Our Tours
            </Link>

            {/* Compact Minimalist Scroll Indicator */}
            <div className="flex flex-col items-center gap-3 group cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-white/20 group-hover:text-accent transition-all duration-700">Scroll to Explore</span>
              <div className="w-[1px] h-10 md:h-12 bg-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-accent animate-[scroll-down_3s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="py-32 flex items-center bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="mb-16 text-center">
            <span className="luxury-text text-gray-400 text-sm block mb-4 tracking-[0.3em] reveal">Discovery</span>
            <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight reveal" style={{ transitionDelay: '200ms' }}>Our <span className="font-light uppercase text-accent">Philosophy</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl order-1 lg:order-1 reveal">
              <Image
                src="https://images.unsplash.com/photo-1544550581-5f7ceaf2f0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Our Travel Philosophy"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8 order-2 lg:order-2 reveal">
              <p className="text-gray-600 text-xl leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-black">
                Journey into the heart of Sri Lanka where luxury meets tradition. We believe that travel is not just about the destination, but the stories whispered by the wind and the warmth of the sun on your path.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                {[
                  { label: "Personalized", detail: "Experiences tailored precisely to your rhythm and desire." },
                  { label: "Exclusivity", detail: "Gaining access to hidden gems and private island vistas." },
                  { label: "Heritage", detail: "Deeply connected to our ancient island tales and culture." },
                  { label: "Comfort", detail: "A modern fleet designed for the most discerning traveler." }
                ].map((item, idx) => (
                  <div
                    key={item.label}
                    className="border-l border-accent/30 pl-6 group hover:border-accent transition-colors duration-500 reveal"
                    style={{ transitionDelay: `${idx * 150 + 300}ms` }}
                  >
                    <h4 className="font-serif text-black uppercase tracking-widest text-xs mb-2 transition-colors duration-300 group-hover:text-accent">{item.label}</h4>
                    <p className="text-gray-400 text-[10px] leading-relaxed uppercase tracking-tighter opacity-80">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link href="/about" className="inline-flex items-center gap-6 text-black font-bold uppercase tracking-[0.2em] text-[10px] group transition-all duration-300 hover:text-accent">
                  EXPLORE OUR STORY
                  <span className="w-12 h-px bg-black group-hover:bg-accent group-hover:w-20 transition-all duration-500"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PACKAGE CARD LIST (FEATURED TOURS) */}
      <section id="packages" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <span className="luxury-text text-gray-400 text-sm block mb-4 tracking-[0.3em] reveal">Curated Experiences</span>
            <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight reveal" style={{ transitionDelay: '200ms' }}>Signature <span className="font-light uppercase text-accent">Routes</span></h2>
          </div>

          <div className="relative group max-w-6xl mx-auto w-full px-4 lg:px-0">
            {/* Symmetrical Left & Right Controls */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 lg:-left-20 top-[45%] -translate-y-1/2 z-20 bg-white text-black p-5 rounded-full shadow-xl hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 border border-gray-100 flex items-center justify-center hover:scale-110 active:scale-95"
              aria-label="Previous tours"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 lg:-right-20 top-[45%] -translate-y-1/2 z-20 bg-white text-black p-5 rounded-full shadow-xl hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 border border-gray-100 flex items-center justify-center hover:scale-110 active:scale-95"
              aria-label="Next tours"
            >
              <ChevronRight size={24} />
            </button>

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-10 pb-20 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth items-center px-4 md:px-0"
            >
              {featuredTours.map((tour, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 snap-start reveal"
                  style={{ transitionDelay: `${(idx % 4) * 150 + 300}ms` }}
                >
                  <SimpleTourCard {...tour} />
                </div>
              ))}
            </div>

            {/* Symmetrical Interactive Shifting Indicators */}
            <div className="flex justify-center items-center gap-3 mt-4 mb-8">
              {featuredTours.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 hover:bg-accent/40 ${i === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-gray-200"}`}
                  aria-label={`Go to tour ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR COMPANY */}
      <section id="why-us" className="py-32 flex items-center bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center w-full relative z-10">
          <div className="mb-24">
            <span className="luxury-text text-gray-400 text-sm block mb-4 tracking-[0.3em] reveal">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight reveal" style={{ transitionDelay: '200ms' }}>Defining <span className="font-light uppercase text-accent">Excellence</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { icon: UserCheck, title: "Elite Chauffeurs", desc: "Expert guides who unveil the heart of Sri Lanka with wisdom and care." },
              { icon: Shield, title: "Curated Safety", desc: "Our fleet represents the pinnacle of reliability, meticulously maintained for your comfort." },
              { icon: Clock, title: "Eternal Support", desc: "Around-the-clock concierage service for a seamless island odyssey." },
            ].map((feature, idx) => (
              <div key={idx} className="group cursor-default reveal" style={{ transitionDelay: `${idx * 200 + 400}ms` }}>
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

      {/* 5. OUR MEMORIES (GALLERY) */}
      <section id="memories" className="py-32 bg-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-20 relative z-10">
          <span className="luxury-text text-gray-400 text-sm block mb-4 tracking-[0.3em] reveal">Visual Tales</span>
          <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight reveal" style={{ transitionDelay: '200ms' }}>Eternal <span className="font-light uppercase text-accent">Memories</span></h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-4">
            {[
              {
                url: "https://images.unsplash.com/photo-1544550581-5f7ceaf2f0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                span: "md:col-span-2 md:row-span-2 col-span-2"
              },
              {
                url: "https://images.unsplash.com/photo-1589182397057-b846e499716e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                span: "col-span-1"
              },
              {
                url: "https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                span: "col-span-1"
              },
              {
                url: "https://images.unsplash.com/photo-1588142345624-8b637d1d2b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                span: "col-span-1 md:row-span-2"
              },
              {
                url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                span: "col-span-1"
              },
              {
                url: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                span: "md:col-span-2 col-span-2"
              },
            ].map((img, i) => (
              <div key={i} className={`relative overflow-hidden group rounded-2xl shadow-xl reveal ${img.span}`} style={{ transitionDelay: `${i * 100 + 300}ms` }}>
                <Image
                  src={img.url}
                  alt={`Memory ${i}`}
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <span className="text-accent text-[8px] uppercase tracking-[0.4em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Capture</span>
                  <Link href="/gallery" className="text-white text-[10px] uppercase tracking-widest font-bold border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all transform scale-90 group-hover:scale-100">View Detail</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MUST-VISIT DESTINATIONS SECTION */}
      <section id="destinations" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="mb-20 text-center">
            <span className="luxury-text text-gray-400 text-sm block mb-4 tracking-[0.3em] reveal">Inspiration</span>
            <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight reveal" style={{ transitionDelay: '200ms' }}>Must-Visit <span className="font-light uppercase text-accent">Destinations</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {[
              {
                name: "Sigiriya Rock",
                type: "Ancient Wonder",
                image: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "The 'Lion Rock' fortress, a UNESCO world heritage site."
              },
              {
                name: "Ella Highlands",
                type: "Mountain Escape",
                image: "https://images.unsplash.com/photo-1544550581-5f7ceaf2f0cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "Tea plantations and the famous Nine Arch Bridge."
              },
              {
                name: "Galle Fort",
                type: "Colonial Heritage",
                image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "Charming architecture within colonial ramparts."
              },
              {
                name: "Yala Safari",
                type: "Wildlife Safari",
                image: "https://images.unsplash.com/photo-1589901594833-855673a5a41d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "The best place to spot leopards in their habitat."
              },
              {
                name: "Kandy Temple",
                type: "Cultural Capital",
                image: "https://images.unsplash.com/photo-1586944210214-43407e5967ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "Home to the sacred tooth relic of the Buddha."
              },
              {
                name: "Mirissa Coast",
                type: "Beach Paradise",
                image: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "Golden sands and legendary whale watching."
              },
              {
                name: "Polonnaruwa",
                type: "Ancient Kingdom",
                image: "https://images.unsplash.com/photo-1590518603681-79e5a1b3a165?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "Grand ruins of the medieval island capital."
              },
              {
                name: "Nuwara Eliya",
                type: "Little England",
                image: "https://images.unsplash.com/photo-1586944210214-43407e5967ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                desc: "Cool climate hills often called Little England."
              }
            ].map((place, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer shadow-sm reveal" style={{ transitionDelay: `${idx * 100 + 400}ms` }}>
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 text-white text-left">
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-accent font-bold mb-1">{place.type}</span>
                  <h3 className="text-lg md:text-xl font-serif mb-1 leading-tight">{place.name}</h3>
                  <p className="text-white/60 text-[10px] leading-relaxed hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {place.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center reveal" style={{ transitionDelay: '1200ms' }}>
            <a
              href="https://wa.me/94728994660"
              className="bg-accent hover:bg-black text-black hover:text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-2xl transition-all duration-500 inline-block hover:scale-105"
            >
              Plan Your Visit on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
