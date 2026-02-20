import Image from "next/image";
import { Award, Users, Calendar } from "lucide-react";

export const metadata = {
    title: "About Us | Zyfii-Travel-Agency",
    description: "Learn about our history and commitment to premium tour hire services.",
};

export default function About() {
    const milestones = [
        { year: "2018", title: "Founded", desc: "Zyfii Travel started with just two vans and a passion for travel." },
        { year: "2020", title: "Expansion", desc: "Expanded our fleet to include luxury coaches and SUVs." },
        { year: "2022", title: "Award Winning", desc: "Recognized as the 'Best Local Tour Operator' in the region." },
        { year: "2024", title: "Going Digital", desc: "Launched our new digital platform to serve you better." },
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <header className="bg-primary py-20 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Zyfii</h1>
                    <p className="text-lg opacity-90">Your trusted partner in travel.</p>
                </div>
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
            </header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1519069060934-9243e1d1327c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Our Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-primary mb-6">Driven by Passion</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            At Zyfii-Travel-Agency, we believe that the journey is just as important as the destination.
                            Founded with a mission to provide seamless, comfortable, and reliable tour hire services,
                            we have grown into a trusted name in the industry.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our fleet is meticulously maintained to ensure your safety and comfort. Whether you are
                            planning a family trip, a corporate retreat, or a solo adventure, our professional drivers
                            and premium vehicles are at your service.
                        </p>

                        <div className="grid grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-secondary mb-1">5+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Years Exp</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Vehicles</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-secondary mb-1">10k+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold font-heading text-center text-primary mb-12">Our Journey</h2>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {milestones.map((item, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-secondary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <Calendar size={18} className="text-white" />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-slate-900">{item.title}</div>
                                        <time className="font-caveat font-medium text-secondary">{item.year}</time>
                                    </div>
                                    <div className="text-slate-500">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Signals */}
                <div className="bg-gray-50 rounded-3xl p-10 text-center">
                    <h2 className="text-2xl font-bold font-heading mb-8">Trusted by Travelers Worldwide</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
                        {/* Placeholders for logos */}
                        <div className="text-2xl font-bold text-gray-400">TravelCo</div>
                        <div className="text-2xl font-bold text-gray-400">Wanderlust</div>
                        <div className="text-2xl font-bold text-gray-400">Expedition</div>
                        <div className="text-2xl font-bold text-gray-400">Voyage</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
