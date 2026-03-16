"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Waves } from "lucide-react";

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
        { name: "Home", href: "/#hero" },
        { name: "About", href: "/#about" },
        { name: "Packages", href: "/#packages" },
        { name: "Gallery", href: "/#memories" },
        { name: "Destinations", href: "/#destinations" },
    ];

    const whatsappNumber = "94728994660";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Pearl%20Paradise,%20I'd%20like%20to%20get%20a%20quote.`;

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
                    <a href="/" className="group flex items-center gap-3 no-underline">
                        <div className="relative flex items-center justify-center">
                            <div className="w-10 h-10 border border-accent/30 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-accent">
                                <Waves className="text-accent" size={20} />
                            </div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-serif tracking-[0.25em] leading-none ${logoColor}`}>PEARL</span>
                            <span className="text-[10px] tracking-[0.4em] font-medium text-accent mt-1 uppercase leading-none">PARADISE</span>
                        </div>
                    </a>

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
                        <Link
                            href="/contact"
                            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm flex items-center gap-2 ${isTransparentStart
                                ? "bg-white text-black hover:bg-accent"
                                : "bg-black text-white hover:bg-accent hover:text-black"
                                }`}
                        >
                            Contact
                        </Link>
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
                    <Link
                        href="/contact"
                        className="bg-black text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
