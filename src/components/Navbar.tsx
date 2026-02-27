"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Pages that have a dark background at the top (Hero/Header)
    const isDarkHeader = ["/", "/about", "/packages"].includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Packages", href: "/packages" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    const whatsappNumber = "1234567890"; // Placeholder
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Zyfii,%20I'd%20like%20to%20get%20a%20quote.`;

    // Derived state for styling
    const isTransparentStart = !scrolled && isDarkHeader;

    // Navbar Background
    const navBackground = scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
        : isTransparentStart
            ? "bg-transparent py-8"
            : "bg-white py-6";

    // Logo Colors
    const logoColor = isTransparentStart ? "text-white" : "text-black";

    // Link Colors
    const getLinkClass = (active: boolean) => {
        const base = "text-xs font-semibold uppercase tracking-widest transition-all duration-300 ";
        if (active) {
            return base + (isTransparentStart ? "text-accent" : "text-black border-b border-black pb-1");
        }
        return base + (isTransparentStart ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-black");
    };

    const toggleColor = isTransparentStart ? "text-white" : "text-black";

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${navBackground}`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    <Link href="/" className={`text-2xl font-serif tracking-tighter transition-colors duration-300 ${logoColor}`}>
                        ZYFII <span className="font-light italic text-accent">Travel</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={getLinkClass(pathname === link.href)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center gap-2 ${isTransparentStart
                                ? "bg-white text-black hover:bg-accent"
                                : "bg-black text-white hover:bg-accent hover:text-black"
                                }`}
                        >
                            <MessageCircle size={14} />
                            Inquire Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden focus:outline-none transition-colors duration-300 ${toggleColor}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white absolute top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top duration-300">
                    <button
                        className="absolute top-8 right-8 text-black"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={32} />
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-2xl font-serif uppercase tracking-widest ${pathname === link.href ? "text-accent" : "text-black"}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <MessageCircle size={18} />
                        Get a Quote
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
