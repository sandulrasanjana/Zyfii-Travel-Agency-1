"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollEffects() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Update Scroll Progress
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollProgress((currentScroll / totalScroll) * 100);

            // Show/Hide Top Button
            setShowTopBtn(window.scrollY > 500);

            // Reveal elements
            const reveals = document.querySelectorAll(".reveal");
            reveals.forEach((reveal) => {
                const windowHeight = window.innerHeight;
                const revealTop = reveal.getBoundingClientRect().top;
                const revealPoint = 150;

                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="scroll-progress">
                <div
                    className="scroll-progress-bar"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 bg-black text-accent w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border border-accent/20 transition-all duration-500 hover:bg-accent hover:text-black hover:scale-110 ${showTopBtn ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}
                aria-label="Scroll to top"
            >
                <ChevronUp size={24} />
            </button>
        </>
    );
}
