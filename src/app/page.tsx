"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Shield, UserCheck, Clock, CheckCircle, ChevronRight, ChevronLeft, MessageCircle, X, Plane, Map } from "lucide-react";
import SimpleTourCard from "@/components/SimpleTourCard";
import GoogleReviews from "@/components/GoogleReviews";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(5);
  const [selectedDestination, setSelectedDestination] = useState<any>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687026/adca85136d37ce2af6748fe0f9cbd9ad_pt6lrn.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687267/1811d4cf694ab9bdecdae4d8f0a84809_bmqldu.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687447/21b0bfe20e8cdc809a8e4e3f71f3cdcf_vm8ilh.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687629/fcdad1ed9f25dacf9b6e58e5fb2de7d3_xle1vb.jpg"
  ];

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

  useEffect(() => {
    const updateMaxIndex = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        const maxI = Math.max(0, Math.round(maxScrollLeft / scrollAmount));
        setMaxIndex(maxI);
      }
    };

    updateMaxIndex();
    setTimeout(updateMaxIndex, 100);
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, []);

  // Auto-play effect for tours
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

  // Hero background slider auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const featuredTours = [
    {
      title: "The Island Essentials",
      image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772197267/eed44468521d2313270a60127226a9ba_mg38uy.jpg",
      duration: "7 Days / 6 Nights",
      price: "Inquire for Pricing",
      description: "Witness the ancient fortress and majestic wildlife in a curated private expedition.",
      destinations: ["SIGIRIYA", "KANDY", "Nuwaraeliya", "Ella", "Hiriketiya"],
      itinerary: "Day 1: Arrival & Sigiriya Sunset Climb\nDay 2: Morning Safari in Minneriya National Park\nDay 3: Dambulla Cave Temple visit & Departure",
    },
    {
      title: "The Grand Sri Lanka",
      image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772196955/8829fd1a007d817dc1aad23eefad2145_qmw5yg.jpg",
      duration: "14 Days / 13 Nights",
      price: "Bespoke Rates",
      description: "Ancient kingdoms, spice gardens, whale watching and pristine beaches — the complete island experience.",
      destinations: ["ANURADHAPURA", "SIGIRIYA", "ELLA", "MIRISSA", "GALLE"],
      itinerary: "Day 1: Arrival & Sigiriya Sunset Climb\nDay 2: Morning Safari in Minneriya National Park\nDay 3: Dambulla Cave Temple visit & Departure",
    },
    {
      title: "The Ultimate Island",
      image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772196297/1ff30e57088dbea3ad35c253352ae9fc_mmycsh.jpg",
      duration: "16 Days / 15 Night",
      price: "Exclusive Experience",
      description: "Breathe the mist of tea plantations and emerald mountains in luxury.",
      destinations: ["Trinkomali", "Sigiriya", "N. ELIYA", "YALA", "Mirissa"],
    },
    {
      title: "The Full Discovery",
      image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772196297/51973ac996d22553bc157ddf10f59535_xnnhxs.jpg",
      duration: "10 Days / 9 Nights",
      price: "Adventure Rates",
      description: "Deep jungle safaris looking for the elusive leopard and vibrant wildlife.",
      destinations: ["SIGIRIYA", "KANDY", "Yala", "UDAWALAWE", "Galle"],
    },
    {
      title: "Kandy Cultural Soul",
      image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772197669/d04e03e02e64b5f0297ed0c3e476e892_hvfc3s.jpg",
      duration: "3 Days / 2 Nights",
      price: "Standard Hire",
      description: "Explore the sacred temples and traditional ceremonies of our historic capital.",
      destinations: ["KANDY", "PINNAWALA", "PERADENIYA"],
    },
    {
      title: "Galle Fort Whispers",
      image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772197762/0babb4a00c08c4134975c8987e8acc59_qqhc1b.jpg",
      duration: "2 Days / 1 Night",
      price: "Day Hire",
      description: "Walk the ramparts of history in the most preserved Dutch fort in Asia.",
      destinations: ["GALLE", "UNAWATUNA", "HIKKADUWA"],
    },
  ];

  return (
    <div className="flex flex-col selection:bg-accent selection:text-black min-h-screen font-sans">

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[4000ms] ease-in-out ${idx === heroIndex ? "opacity-100" : "opacity-0"
                } scale-105 animate-slow-zoom`}
            >
              <Image
                src={img}
                alt={`Sri Lanka Paradise ${idx + 1}`}
                fill
                className="object-cover brightness-40"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
        <div className="relative z-10 px-6 max-w-6xl mx-auto mt-20 md:mt-24">
          <span className="luxury-text text-accent text-[10px] md:text-sm mb-8 block fade-in-up tracking-[0.2em] md:tracking-[0.3em] font-medium opacity-90">The Essence of Sri Lanka</span>
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight drop-shadow-2xl fade-in-up delay-100 uppercase">
            Travel With <br />
            <span className=" font-light lowercase">Unmatched Elegance</span>
          </h1>
          <p className="text-[10px] sm:text-xs md:text-base lg:text-lg mb-12 font-light tracking-[0.2em] uppercase max-w-2xl mx-auto fade-in-up delay-200 leading-relaxed">
            Premium Tour Hire & Bespoke Travel Experiences
          </p>

          <div className="fade-in-up delay-300 flex items-center justify-center flex-wrap gap-4 md:gap-6 mt-12 pb-12">
            <Link
              href="#packages"
              className="group flex items-center justify-center gap-3 bg-accent hover:bg-white text-black w-[180px] md:w-[220px] py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-500 shadow-2xl hover:scale-105 border border-accent hover:border-white"
            >
              Our Tours
            </Link>

            <a
              href="https://wa.me/94728994660?text=Hi, I would like to book an Airport Pickup service."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-black w-[180px] md:w-[220px] py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-500 shadow-xl hover:scale-105 border border-white/20"
            >
              <Plane size={16} className="text-accent group-hover:text-black transition-colors" />
              Airport Pickup
            </a>

            <a
              href="https://wa.me/94728994660?text=Hi, I'm interested in planning a Custom Tour itinerary."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-black/40 backdrop-blur-md hover:bg-accent text-white hover:text-black w-[180px] md:w-[220px] py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-500 shadow-xl hover:scale-105 border border-white/10 hover:border-accent"
            >
              <Map size={16} className="text-accent group-hover:text-black transition-colors" />
              Custom Tour
            </a>
          </div>

          <div className="fade-in-up delay-300 flex flex-col items-center gap-8">
            {/* Compact Minimalist Scroll Indicator */}
            <div className="flex flex-col items-center gap-3 group cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-white/60 group-hover:text-accent transition-all duration-700">Scroll to Explore</span>
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
                src="https://res.cloudinary.com/dokkm4cxk/image/upload/v1772196298/8860decac3b1dd752b3512ab64c1025a_wsiako.jpg"
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
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 hover:bg-accent/40 ${i === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-gray-200"}`}
                  aria-label={`Go to tour set ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM TOUR SECTION */}


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
                url: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138700/WhatsApp_Image_2026-04-02_at_13.50.05_r91jzx.jpg",
                span: "md:col-span-2 md:row-span-2 col-span-2"
              },
              {
                url: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138787/WhatsApp_Image_2026-04-02_at_13.53.38_dg4hqe.jpg",
                span: "col-span-1"
              },
              {
                url: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138784/WhatsApp_Image_2026-04-02_at_13.53.38_1_oa1x3m.jpg",
                span: "col-span-1"
              },
              {
                url: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138779/WhatsApp_Image_2026-04-02_at_13.53.37_3_twbwsi.jpg",
                span: "col-span-1 md:row-span-2"
              },
              {
                url: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138765/WhatsApp_Image_2026-04-02_at_13.50.43_1_vg1pvw.jpg",
                span: "col-span-1"
              },
              {
                url: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138757/WhatsApp_Image_2026-04-02_at_13.50.42_owxx8f.jpg",
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

      <GoogleReviews />

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
                image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772197267/eed44468521d2313270a60127226a9ba_mg38uy.jpg",
                desc: "The 'Lion Rock' fortress, a UNESCO world heritage site. It features an ancient palace built on a massive 200m rock, surrounded by lush gardens and fountains.",
                caption: "The 8th Wonder of the World"
              },
              {
                name: "Ella Highlands",
                type: "Mountain Escape",
                image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687026/adca85136d37ce2af6748fe0f9cbd9ad_pt6lrn.jpg",
                desc: "Mist-covered peaks, lush tea plantations, and the iconic Nine Arch Bridge await in this hill country paradise.",
                caption: "Heart of the Hill Country"
              },
              {
                name: "Galle Fort",
                type: "Colonial Heritage",
                image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687145/c0b07df7a86435de9b95d80978cc2631_mr1hs0.jpg",
                desc: "A living museum where Dutch colonial architecture meets modern boutiques and charming cafes along the southern coast.",
                caption: "Echoes of Colonial Elegance"
              },
              {
                name: "Yala Safari",
                type: "Wildlife Safari",
                image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687267/1811d4cf694ab9bdecdae4d8f0a84809_bmqldu.jpg",
                desc: "One of the world's most dense leopard populations resides here, alongside elephants, bears, and exotic birds.",
                caption: "The Wild Untamed Spirit"
              },
              {
                name: "Kandy Temple",
                type: "Cultural Capital",
                image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687332/3f17304aea5ee39920f5b1d80c85a7f4_umnkjz.jpg",
                desc: "Sri Lanka's spiritual heart, housing the Sacred Tooth Relic of the Buddha within its majestic golden-roofed temple.",
                caption: "Sanctuary of Ancient Echoes"
              },
              {
                name: "Mirissa Coast",
                type: "Beach Paradise",
                image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687447/21b0bfe20e8cdc809a8e4e3f71f3cdcf_vm8ilh.jpg",
                desc: "Famous for its crescent-shaped beach, sunset vibes, and as a world-class destination for blue whale watching.",
                caption: "Golden Palms & Blue Horizons"
              },
              {
                name: "Polonnaruwa",
                type: "Ancient Kingdom",
                image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687524/4078a3ca74ef0e10cde5fa3dfe542240_atgbhn.jpg",
                desc: "The island's second ancient capital, featuring exceptionally preserved stone sculptures and massive brick stupas.",
                caption: "Relics of a Golden Era"
              },
              {
                name: "Nuwara Eliya",
                type: "Little England",
                image: "https://res.cloudinary.com/dokkm4cxk/image/upload/v1772687629/fcdad1ed9f25dacf9b6e58e5fb2de7d3_xle1vb.jpg",
                desc: "Experience the cool climate, colonial-style bungalows, and rolling green valleys of Little England.",
                caption: "Whispers of the Misty Valleys"
              }
            ].map((place, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedDestination(place)}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-square cursor-pointer shadow-lg reveal transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 100 + 400}ms` }}
              >
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 text-white text-left transition-all duration-500">
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-accent font-bold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{place.type}</span>
                  <h3 className="text-lg md:text-xl font-serif mb-1 leading-tight">{place.name}</h3>
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.1em] opacity-80 mb-2 truncate group-hover:block transition-all duration-500">
                    {place.caption}
                  </p>
                  <div className="w-0 group-hover:w-full h-px bg-accent/50 transition-all duration-700"></div>
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

      {/* DESTINATION MODAL */}
      {selectedDestination && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedDestination(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full relative z-10 shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 slide-in-from-bottom-5 duration-500 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Section */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
              <Image
                src={selectedDestination.image}
                alt={selectedDestination.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden"></div>
            </div>

            {/* Modal Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-white">
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors p-2 bg-gray-50 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <span className="text-accent text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mb-3 block">
                  {selectedDestination.type}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-black mb-4 leading-tight">
                  {selectedDestination.name}
                </h2>
                <div className="w-12 h-1 bg-accent/30 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-[0.2em] font-medium leading-relaxed italic opacity-80">
                  "{selectedDestination.caption}"
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                  {selectedDestination.desc}
                </p>
              </div>

              <div className="mt-12">
                <a
                  href={`https://wa.me/94728994660?text=I'm interested in visiting ${selectedDestination.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-black transition-all duration-500 group shadow-xl"
                >
                  Plan This Journey
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
