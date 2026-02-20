import Image from "next/image";

export const metadata = {
    title: "Gallery | Zyfii-Travel-Agency",
    description: "See our fleet and happy travelers in our gallery.",
};

const images = [
    "https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542361345-89e58247f2d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
    return (
        <div className="bg-white pb-20 pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">Our Gallery</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Glimpses of the adventures we facilitate. From our premium fleet to satisfied travelers.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-xl overflow-hidden group ${idx === 1 || idx === 4 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                                }`}
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
