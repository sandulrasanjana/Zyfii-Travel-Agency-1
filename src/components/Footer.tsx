import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    const whatsappNumber = "94728994660";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-serif tracking-tighter text-white mb-6 block">
                            ZYFII <span className="font-light italic text-accent">Travel</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Discover the soul of the island through curated journeys and bespoke travel excellence. Since 2018.
                        </p>
                        <div className="flex space-x-6">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-500 hover:text-accent transition-colors duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="luxury-text text-accent text-xs mb-8">Navigation</h3>
                        <ul className="space-y-4">
                            {[
                                { label: "About Us", href: "/#about" },
                                { label: "Tour Packages", href: "/#packages" },
                                { label: "Gallery", href: "/#memories" },
                                { label: "Contact", href: "/contact" }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="luxury-text text-accent text-xs mb-8">The Concierage</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-sm text-gray-400">
                                <MapPin size={18} className="text-accent shrink-0" />
                                <span>Colombo, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-gray-400">
                                <Phone size={18} className="text-accent shrink-0" />
                                <span>+94 72 899 4660</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-gray-400">
                                <Mail size={18} className="text-accent shrink-0" />
                                <span>travel@zyfii.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter/CTA */}
                    <div className="space-y-6">
                        <h3 className="luxury-text text-accent text-xs mb-8">Inquiries</h3>
                        <p className="text-sm text-gray-400">
                            Connect with our travel specialists for a bespoke itinerary.
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-300"
                        >
                            <MessageCircle size={16} />
                            WhatsApp Concierage
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] uppercase tracking-[0.2em]">
                    <p>&copy; {new Date().getFullYear()} ZYFII TRAVEL AGENCY. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
