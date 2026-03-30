import React from 'react';
import Image from 'next/image';
import { X, Clock, MessageCircle, DollarSign } from 'lucide-react';

interface PackageModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    image: string;
    description: string;
    itinerary?: string;
    whatsappLink: string;
}

const PackageModal: React.FC<PackageModalProps> = ({
    isOpen,
    onClose,
    title,
    image,
    description,
    itinerary,
    whatsappLink
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-modal-backdrop">
            <div 
                className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-modal-content flex flex-col md:flex-row max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:rotate-90 md:bg-black/10 md:text-black md:hover:bg-black/20"
                >
                    <X size={24} />
                </button>

                {/* Left Side: Image */}
                <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-black mb-6 leading-tight">{title}</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-3 border-b border-gray-100 pb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                Overview
                            </h4>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                                {description}
                            </p>
                        </div>

                        {itinerary && (
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-3 border-b border-gray-100 pb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                    Tour Itinerary
                                </h4>
                                <div className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-gray-50 mt-4">
                                    {itinerary}
                                </div>
                            </div>
                        )}
                        
                        {!itinerary && (
                             <div>
                             <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-3 border-b border-gray-100 pb-2 flex items-center gap-2">
                                 <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                 Tour Itinerary
                             </h4>
                             <p className="text-gray-400 text-xs italic">Full itinerary available upon inquiry.</p>
                         </div>
                        )}
                    </div>

                    <div className="mt-auto pt-10 border-t border-gray-100 space-y-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-black hover:bg-black/90 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform active:scale-[0.98] group relative overflow-hidden shadow-lg shadow-black/10"
                        >
                            <span className="relative z-10 flex items-center gap-2 text-sm uppercase tracking-widest">
                                <MessageCircle size={20} className="text-accent" />
                                Inquire To Book
                            </span>
                        </a>
                        <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-medium">Ready to start your journey? Contact us for custom arrangements.</p>
                    </div>
                </div>
            </div>
            
            {/* Backdrop close area */}
            <div 
                className="absolute inset-0 -z-10" 
                onClick={onClose}
            ></div>
        </div>
    );
};

export default PackageModal;
