"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const GoogleIcon = ({ className = "w-4 h-4 grayscale opacity-40 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const REVIEWS = [
  {
    id: 1,
    name: "Michael Chen",
    date: "2 weeks ago",
    text: "Absolutely phenomenal experience! The bespoke tour exceeded all our expectations. Our chauffeur was incredibly knowledgeable and made us feel like royalty throughout our journey in Sri Lanka.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    date: "1 month ago",
    text: "Pearl Paradise Travel arranged the perfect honeymoon for us. The misty tea trails in Nuwara Eliya and the pristine beaches of Mirissa were organized flawlessly. Highly recommend for a luxury getaway!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma & David Thompson",
    date: "3 months ago",
    text: "We wanted a mix of culture, wildlife, and relaxation. The team curated an itinerary that perfectly balanced everything. Experiencing the Yala safari locally with a private expert guide was an unforgettable highlight.",
    rating: 5,
  },
  {
    id: 4,
    name: "Alessia Romano",
    date: "1 week ago",
    text: "The sheer professionalism and luxury of the vehicles provided were unmatched. If you are looking for premium travel in Sri Lanka with a touch of elegance and absolute comfort, this is the agency to book with.",
    rating: 5,
  },
  {
    id: 5,
    name: "James Anderson",
    date: "2 months ago",
    text: "Incredible attention to detail. Every property we stayed at was spectacular. The private luxury van was so comfortable for traveling with our family. We will definitely be back!",
    rating: 5,
  }
];

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollAmount = 380; // Card width (350px) + Gap (30px) approx

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
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="pt-32 pb-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">

        {/* Header Section */}
        <div className="mb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center w-full relative z-10">
            <span className="luxury-text text-gray-400 text-sm block mb-4 tracking-[0.3em] reveal">Guest Voices</span>
            <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight reveal" style={{ transitionDelay: '200ms' }}>
              Words From <span className="font-light uppercase text-accent">Our Travelers</span>
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group max-w-7xl mx-auto w-full">
          {/* Controls */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 lg:-left-6 top-[45%] -translate-y-1/2 z-20 bg-white text-black p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center justify-center hover:scale-110"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 lg:-right-6 top-[45%] -translate-y-1/2 z-20 bg-white text-black p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center justify-center hover:scale-110"
            aria-label="Next reviews"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 md:gap-8 pb-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth items-stretch px-4 lg:px-0"
          >
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-center bg-gray-50/50 border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group/card hover:-translate-y-2 relative"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover/card:opacity-10 transition-opacity duration-500 pointer-events-none">
                  <Star fill="#000" size={60} />
                </div>

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-accent/20 relative border border-gray-200 shadow-inner">
                        <Image
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=random&color=fff&size=128`}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-black tracking-wide">{review.name}</h4>
                        <span className="text-[10px] text-gray-400 font-medium">{review.date}</span>
                      </div>
                    </div>
                    <GoogleIcon />
                  </div>

                  <div className="flex mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FBBC05" className="text-[#FBBC05]" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic line-clamp-4">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-accent tracking-widest group-hover/card:text-black transition-colors">Read More</span>
                  <ChevronRight size={14} className="text-accent group-hover/card:text-black group-hover/card:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 hover:bg-accent/40 ${i === activeIndex ? "w-8 bg-accent" : "w-1.5 bg-gray-200"
                  }`}
                aria-label={`Go to review card ${i + 1}`}
              />
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
