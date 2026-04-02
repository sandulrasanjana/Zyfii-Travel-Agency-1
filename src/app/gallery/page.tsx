import Image from "next/image";

export const metadata = {
    title: "Gallery | Pearl-Paradise-Travel",
    description: "See our fleet and happy travelers in our gallery.",
};

const images = [
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138787/WhatsApp_Image_2026-04-02_at_13.53.38_dg4hqe.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138784/WhatsApp_Image_2026-04-02_at_13.53.38_1_oa1x3m.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138779/WhatsApp_Image_2026-04-02_at_13.53.37_3_twbwsi.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138765/WhatsApp_Image_2026-04-02_at_13.50.43_1_vg1pvw.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138700/WhatsApp_Image_2026-04-02_at_13.50.05_r91jzx.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138743/WhatsApp_Image_2026-04-02_at_13.50.30_3_d0zlke.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138734/WhatsApp_Image_2026-04-02_at_13.50.28_q9humq.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138727/WhatsApp_Image_2026-04-02_at_13.50.19_aqvda5.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138717/WhatsApp_Image_2026-04-02_at_13.50.09_bopssc.jpg",
    "https://res.cloudinary.com/dokkm4cxk/image/upload/v1775138710/WhatsApp_Image_2026-04-02_at_13.50.07_1_cck4vt.jpg",

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
