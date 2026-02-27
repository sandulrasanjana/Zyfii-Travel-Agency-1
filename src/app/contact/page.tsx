import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
    title: "Contact Us | Zyfii-Travel-Agency",
    description: "Get in touch with us to book your next tour.",
};

export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Get in Touch</h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Ready to start your adventure? Contact us today for a custom quote or to book one of our packages.
                            We are available 24/7 on WhatsApp.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-4 rounded-full shadow-sm text-secondary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-heading">Phone / WhatsApp</h3>
                                    <p className="text-gray-500">+94 72 899 4660</p>
                                    <p className="text-sm text-emerald-600 mt-1 font-medium">Available 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-4 rounded-full shadow-sm text-secondary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-heading">Email</h3>
                                    <p className="text-gray-500">info@zyfii-travel.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-4 rounded-full shadow-sm text-secondary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-heading">Office</h3>
                                    <p className="text-gray-500">
                                        123 Tropical Road, <br />
                                        Paradise City, Country
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
