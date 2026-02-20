import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    const whatsappNumber = "1234567890";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="text-2xl font-bold font-heading text-white mb-4 block">
                            Zyfii<span className="text-secondary">Travel</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Premium tour hire services for your next adventure. Reliable, comfortable, and affordable travel solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-secondary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/packages" className="text-gray-400 hover:text-secondary transition-colors">
                                    Tour Packages
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-400 hover:text-secondary transition-colors">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-secondary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="text-primary shrink-0" />
                                <span>123 Tropical Road, Paradise City, Country</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>info@zyfii-travel.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* WhatsApp CTA */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">Book via WhatsApp</h3>
                        <p className="text-gray-400 mb-4">
                            Need a quick quote? Chat with our team instantly.
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105"
                        >
                            <MessageCircle size={20} />
                            Message us on WhatsApp
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Zyfii-Travel-Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
