import Image from "next/image";
import { Clock, DollarSign, MessageCircle } from "lucide-react";
import Link from "next/link";

interface TourCardProps {
    title: string;
    image: string;
    duration: string;
    price: string;
    description: string;
}

const TourCard = ({ title, image, duration, price, description }: TourCardProps) => {
    const whatsappNumber = "0701536128";
    const message = `Hi Zyfii, I'm interested in the ${title} package.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-white rounded-card shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="relative h-72 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                    {price}
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-serif text-black mb-3 leading-tight">{title}</h3>

                <div className="flex items-center gap-4 text-gray-500 text-xs uppercase tracking-wider mb-4">
                    <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-accent" />
                        <span>{duration}</span>
                    </div>
                </div>

                <p className="text-gray-600 mb-8 line-clamp-2 text-sm leading-relaxed">{description}</p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black hover:bg-black/90 text-white text-center py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
                >
                    <MessageCircle size={18} className="text-accent" />
                    Inquire Now
                </a>
            </div>
        </div>
    );
};

export default TourCard;
