"use client";

import { useState } from "react";
import { Star, Quote, Send, User, MessageSquare } from "lucide-react";

interface Feedback {
    name: string;
    rating: number;
    comment: string;
    date: string;
}

const TestimonialsSection = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([
        {
            name: "Sarah Jenkins",
            rating: 5,
            comment: "Our trip to Sigiriya was absolutely magical. The driver was professional and deeply knowledgeable about the local history. Highly recommended!",
            date: "May 2024"
        },
        {
            name: "David Miller",
            rating: 5,
            comment: "The airport pickup was seamless. Even with a delayed flight, the team was waiting for us with a warm smile. Exceptional service!",
            date: "April 2024"
        },
        {
            name: "Elena Rodriguez",
            rating: 4,
            comment: "Wonderful custom tour through the tea country. The vehicle was very comfortable and the views were breathtaking.",
            date: "June 2024"
        }
    ]);

    const [formData, setFormData] = useState({
        name: "",
        rating: 5,
        comment: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate direct feedback - in a real app this would go to a database
        // For now we'll send it to WhatsApp for the owner to see
        const message = `*New Customer Feedback*%0A*Name:* ${formData.name}%0A*Rating:* ${formData.rating}/5%0A*Comment:* ${formData.comment}`;
        window.open(`https://wa.me/94728994660?text=${message}`, '_blank');

        // Add to local list for immediate visual feedback
        const newFeedback: Feedback = {
            ...formData,
            date: "Just now"
        };

        setTimeout(() => {
            setFeedbacks([newFeedback, ...feedbacks]);
            setFormData({ name: "", rating: 5, comment: "" });
            setIsSubmitting(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1000);
    };

    return (
        <section id="feedback" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT: FORM SECTION */}
                    <div className="reveal">
                        <span className="luxury-text text-gray-400 text-sm block mb-4 tracking-[0.3em]">Share Your Journey</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8">
                            Leave Your <span className="font-light uppercase text-accent">Feedback</span>
                        </h2>
                        <p className="text-gray-500 mb-12 max-w-lg leading-relaxed">
                            Your stories inspire us. Share your experience with Pearl Paradise Travel and help us continue crafting perfect island odysseys.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                            <div>
                                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white border border-gray-200 focus:border-accent outline-none px-12 py-4 rounded-xl text-sm transition-all shadow-inner"
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Rating</label>
                                <div className="flex gap-2 bg-white border border-gray-200 p-4 rounded-xl shadow-inner w-fit">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            className="transition-transform active:scale-90"
                                        >
                                            <Star
                                                size={24}
                                                className={`${star <= formData.rating ? "text-accent fill-accent" : "text-gray-200"} transition-colors`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 ml-1">Your Experience</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-5 text-gray-400" size={18} />
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.comment}
                                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                        className="w-full bg-white border border-gray-200 focus:border-accent outline-none px-12 py-4 rounded-xl text-sm transition-all shadow-inner resize-none"
                                        placeholder="Tell us about your trip..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-black hover:bg-black/90 text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 group shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Submit Experience"}
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            {showSuccess && (
                                <div className="mt-4 p-4 bg-green-50 text-green-600 rounded-xl text-xs font-bold uppercase tracking-widest text-center animate-in fade-in slide-in-from-top-2">
                                    Feedback Shared Successfully!
                                </div>
                            )}
                        </form>
                    </div>

                    {/* RIGHT: REVIEWS LIST SECTION */}
                    <div className="lg:mt-32 relative">
                        <div className="absolute -top-20 -right-10 text-[10rem] font-serif text-gray-100 select-none opacity-50 z-0">
                            <Quote size={120} />
                        </div>

                        <div className="space-y-8 relative z-10 max-h-[600px] overflow-y-auto pr-4 scrollbar-hide py-4">
                            {feedbacks.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 reveal"
                                    style={{ transitionDelay: `${idx * 150}ms` }}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className={i < item.rating ? "text-accent fill-accent" : "text-gray-200"} />
                                            ))}
                                        </div>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{item.date}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm italic leading-relaxed mb-6 font-light">"{item.comment}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-serif font-bold">
                                            {item.name.charAt(0)}
                                        </div>
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-black">{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center p-8 bg-black rounded-2xl text-white shadow-2xl reveal">
                            <div className="text-4xl font-serif text-accent mb-2">4.9/5</div>
                            <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 mb-6">Average Customer Rating</div>
                            <div className="flex justify-center gap-2 mb-8">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-accent fill-accent" />)}
                            </div>
                            <p className="text-xs font-light text-white/60 leading-relaxed uppercase tracking-widest">
                                Trusted by travelers <br /> from around the world.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        </section>
    );
};

export default TestimonialsSection;
