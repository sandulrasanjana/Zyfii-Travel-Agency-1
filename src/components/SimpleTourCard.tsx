"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import PackageModal from "./PackageModal";
import Portal from "./Portal";

interface SimpleTourCardProps {
    title: string;
    image: string;
    duration: string;
    price: string;
    description: string;
    itinerary?: string | any[];
    destinations?: string[];
}

const SimpleTourCard = ({ title, image, duration, price, description, itinerary, destinations }: SimpleTourCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const whatsappNumber = "94728994660";
    const message = `Hi Pearl Paradise, I'm interested in the ${title} package.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <>
            <div 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group w-64 flex flex-col h-full cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="relative h-44 w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
                        {price}
                    </div>
                </div>

                <div className="p-4 flex flex-col flex-grow bg-white">
                    <span className="text-[9px] uppercase tracking-widest text-accent font-bold mb-1.5 block">{duration}</span>
                    <h3 className="text-lg font-serif text-black mb-2 leading-tight">{title}</h3>
                    <p className="text-gray-400 text-[10px] leading-relaxed mb-3 line-clamp-2">{description}</p>
                    
                    {destinations && destinations.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {destinations.map((dest, i) => (
                                <span key={i} className="bg-gray-100/80 text-gray-500 text-[8px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap">
                                    {dest}
                                </span>
                            ))}
                        </div>
                    )}

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-black hover:bg-accent text-white hover:text-black py-2 rounded-lg font-bold text-[9px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/20 mt-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <MessageCircle size={12} />
                        Booking Now
                    </a>
                </div>
            </div>

            <Portal>
                <PackageModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={title}
                    image={image}
                    description={description}
                    itinerary={itinerary}
                    whatsappLink={whatsappLink}
                />
            </Portal>
        </>
    );
};

export default SimpleTourCard;
