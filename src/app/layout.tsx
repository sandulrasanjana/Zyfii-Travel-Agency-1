import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollEffects from "@/components/ScrollEffects";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zyfii-Travel-Agency | Premium Tour Hire",
  description: "Modern, high-conversion tour hire services. Book your next adventure via WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased font-sans bg-white text-black flex flex-col min-h-screen`}
      >
        <ScrollEffects />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* Client component for floating button */}
        <div className="fixed bottom-8 left-8 z-50">
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
