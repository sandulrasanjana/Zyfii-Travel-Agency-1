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

    // Navbar Background: Add a subtle gradient when transparent to aid text readability on images
    const navBackground = scrolled
        ? "bg-white/95 backdrop-blur-md shadow-md py-3"
        : isTransparentStart
            ? "bg-gradient-to-b from-black/60 to-transparent py-6"
            : "bg-transparent py-6";

    // Logo Colors
    const logoPrimaryColor = isTransparentStart ? "text-white drop-shadow-md" : "text-primary";
    const logoSecondaryColor = isTransparentStart ? "text-orange-300 drop-shadow-md" : "text-secondary";

    // Link Colors
    const getLinkClass = (active: boolean) => {
        if (active) {
            return isTransparentStart
                ? "text-white font-bold border-b-2 border-orange-400 pb-1 drop-shadow-sm"
                : "text-primary font-bold border-b-2 border-primary pb-1";
        }
        return isTransparentStart
            ? "text-white font-medium hover:text-orange-200 drop-shadow-sm"
            : "text-gray-700 font-medium hover:text-primary";
    };

    const toggleColor = isTransparentStart ? "text-white" : "text-gray-800";

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className={`text-2xl font-bold font-heading ${logoPrimaryColor}`}>
                        Zyfii<span className={logoSecondaryColor}>Travel</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${getLinkClass(pathname === link.href)}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-teal-700 text-white px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 shadow-lg"
                        >
                            <MessageCircle size={18} />
                            Get a Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden focus:outline-none ${toggleColor}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
                    <div className="flex flex-col px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-base font-medium ${pathname === link.href ? "text-primary" : "text-gray-700"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-teal-700 text-white px-5 py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <MessageCircle size={18} />
                            Get a Quote
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
