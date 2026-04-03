import React from 'react';
import Image from 'next/image';
import { X, Clock, MessageCircle, DollarSign } from 'lucide-react';

interface PackageModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    image: string;
    description: string;
    itinerary?: string | any[];
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
                <div className="w-full md:w-1/2 flex flex-col flex-1 overflow-hidden min-h-0 bg-white">
                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-10 pb-6 min-h-0">
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
                                    {typeof itinerary === 'string' ? (
                                        <div className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap pl-2 border-l-2 border-gray-50 mt-4">
                                            {itinerary}
                                        </div>
                                    ) : (
                                        <div className="relative border-l border-gray-200 ml-3 space-y-8 pb-4 mt-6">
                                            {itinerary.map((item, idx) => (
                                                <div key={idx} className="relative pl-8">
                                                    {/* Black dot */}
                                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-black"></div>

                                                    <span className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">{item.day}</span>
                                                    <h3 className="text-xl font-serif text-black mb-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
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
                    </div>

                    {/* Fixed Booking Button Area */}
                    <div className="p-6 md:px-10 md:py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md space-y-4 shrink-0 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.05)] relative z-10 w-full">
                        <div className="flex flex-col sm:flex-row gap-3 w-full">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-black/90 text-white font-bold py-3 rounded-xl transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-black/10"
                            >
                                <span className="flex items-center gap-2 text-xs uppercase tracking-widest">
                                    <MessageCircle size={16} className="text-accent" />
                                    Book Now
                                </span>
                            </a>
                            <a
                                href={`https://wa.me/94728994660?text=${encodeURIComponent(`Hi Pearl Paradise, I would like to customize the ${title} package.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-black font-bold py-3 rounded-xl border border-gray-200 transition-all duration-300 transform active:scale-[0.98] shadow-sm"
                            >
                                <span className="flex items-center gap-2 text-xs uppercase tracking-widest">
                                    Customized Tour
                                </span>
                            </a>
                        </div>
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
