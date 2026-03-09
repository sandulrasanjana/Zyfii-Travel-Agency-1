"use client";

import { useState } from "react";
import {
    Calendar,
    Users,
    MapPin,
    Star,
    Heart,
    Send,
    Sparkles,
    Camera,
    Waves,
    Mountain,
    Palmtree,
    Coffee
} from "lucide-react";

const CustomTourPart = () => {
    const [step, setStep] = useState(1);
    const [preferences, setPreferences] = useState({
        duration: "4-7 Days",
        groupSize: "2 People",
        luxuryLevel: "Premium",
        interests: [] as string[],
        message: "",
    });

    const durationOptions = ["1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"];
    const luxuryOptions = ["Standard", "Premium", "Elite Luxury"];
    const interestOptions = [
        { name: "Wildlife Safari", icon: Sparkles },
        { name: "Cultural Heritage", icon: MapPin },
        { name: "Pristine Beaches", icon: Waves },
        { name: "Tea Country", icon: Coffee },
        { name: "Adventure Sports", icon: Mountain },
        { name: "Scenic Coastal", icon: Palmtree },
    ];

    const handleInterestToggle = (interest: string) => {
        setPreferences((prev) => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter((i) => i !== interest)
                : [...prev.interests, interest],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappNumber = "94728994660";
        const text = `*Custom Tour Inquiry - Pearl Paradise Travel*%0A%0A` +
            `*Duration:* ${preferences.duration}%0A` +
            `*Group Size:* ${preferences.groupSize}%0A` +
            `*Experience Level:* ${preferences.luxuryLevel}%0A` +
            `*Interests:* ${preferences.interests.join(", ")}%0A` +
            `*Additional Details:* ${preferences.message}`;

        const url = `https://wa.me/${whatsappNumber}?text=${text}`;
        window.open(url, "_blank");
    };

    return (
        <section id="custom-tour" className="py-20 md:py-32 bg-white text-black relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Topic and Caption */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="luxury-text text-gray-400 text-sm block mb-4 tracking-[0.3em] reveal">Bespoke Journeys</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight reveal" style={{ transitionDelay: '200ms' }}>
                        Craft Your <span className="font-light uppercase text-accent">Own Paradise</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Features/Details */}
                    <div className="reveal space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-serif uppercase tracking-widest text-black">Tailored Just for You</h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Our experts will weave your preferences into a seamless island tapestry. From hidden boutique stays to private expeditions, we ensure your Sri Lankan odyssey is uniquely yours.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: Star, text: "Hand-picked luxury boutique stays" },
                                { icon: Heart, text: "Personalized itineraries based on your pace" },
                                { icon: Users, text: "Dedicated private chauffeur & expert guide" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                                        <item.icon size={18} className="text-accent" />
                                    </div>
                                    <span className="text-xs md:text-sm uppercase tracking-widest font-light text-gray-600">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Customizer Interface */}
                    <div className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-6 md:p-12 rounded-[2rem] shadow-sm reveal" style={{ transitionDelay: '300ms' }}>
                        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">

                            {/* Duration Selection */}
                            <div>
                                <label className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6 block">Target Duration</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {durationOptions.map((opt) => (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => setPreferences({ ...preferences, duration: opt })}
                                            className={`py-3 px-4 rounded-xl border text-[11px] uppercase tracking-widest transition-all duration-300 ${preferences.duration === opt
                                                ? "bg-accent border-accent text-black font-bold shadow-lg scale-[1.02]"
                                                : "border-gray-200 text-gray-500 hover:border-accent/50"
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Interests (Multi-select) */}
                            <div>
                                <label className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6 block">Island Interests</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {interestOptions.map((opt) => (
                                        <button
                                            key={opt.name}
                                            type="button"
                                            onClick={() => handleInterestToggle(opt.name)}
                                            className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-500 group ${preferences.interests.includes(opt.name)
                                                ? "bg-accent/10 border-accent shadow-[0_0_20px_rgba(229,204,118,0.1)]"
                                                : "border-gray-100 hover:border-gray-200 hover:bg-white"
                                                }`}
                                        >
                                            <opt.icon
                                                size={20}
                                                className={`mb-3 transition-transform duration-500 group-hover:scale-110 ${preferences.interests.includes(opt.name) ? "text-accent" : "text-gray-400"
                                                    }`}
                                            />
                                            <span className={`text-[9px] uppercase tracking-tighter text-center ${preferences.interests.includes(opt.name) ? "text-black font-bold" : "text-gray-400"
                                                }`}>
                                                {opt.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Level */}
                            <div>
                                <label className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6 block">Travel Standard</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                                    {luxuryOptions.map((opt) => (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => setPreferences({ ...preferences, luxuryLevel: opt })}
                                            className={`py-3 px-2 rounded-xl transition-all duration-300 text-[10px] uppercase tracking-widest font-bold ${preferences.luxuryLevel === opt
                                                ? "bg-black text-white"
                                                : "bg-white text-gray-400 border border-gray-100 hover:bg-gray-50"
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Text Input & Submit */}
                            <div className="pt-4 border-t border-gray-100">
                                <textarea
                                    placeholder="Share any specific requirements or dream destinations..."
                                    className="w-full bg-transparent border-b border-gray-100 py-4 text-sm font-light focus:outline-none focus:border-accent transition-colors resize-none mb-10 placeholder:text-gray-400 text-black"
                                    rows={2}
                                    value={preferences.message}
                                    onChange={(e) => setPreferences({ ...preferences, message: e.target.value })}
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-accent hover:bg-black text-black hover:text-white px-6 md:px-10 py-4 md:py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-500 flex items-center justify-center gap-3 transform hover:-translate-y-1 shadow-2xl"
                                >
                                    <Send size={16} />
                                    Design My Plan
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CustomTourPart;
