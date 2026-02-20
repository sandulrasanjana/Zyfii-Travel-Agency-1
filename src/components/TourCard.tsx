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
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl group">
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                    {price}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{title}</h3>

                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    <div className="flex items-center gap-1">
                        <Clock size={16} className="text-primary" />
                        <span>{duration}</span>
                    </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary hover:bg-teal-700 text-white text-center py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                >
                    <MessageCircle size={20} />
                    Order via WhatsApp
                </a>
            </div>
        </div>
    );
};

export default TourCard;
