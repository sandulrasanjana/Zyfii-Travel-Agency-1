import TourCard from "@/components/TourCard";


export const metadata = {
    title: "Tour Packages | Pearl-Paradise-Travel",
    description: "Browse our exclusive tour packages and hire premium vehicles for your trip.",
};

const packages = [
    {
        title: "City Highlights Tour",
        image: "https://images.unsplash.com/photo-1449824913929-2b3a3e3db98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "1 Day",
        price: "$150",
        description: "Discover the city's most iconic landmarks in style. Includes stops at major attractions and lunch.",
        itinerary: [
            { day: "MORNING", title: "City Tour", description: "Pickup from hotel • Visit Independence Square and Gangaramaya Temple" },
            { day: "AFTERNOON", title: "Culture & Shopping", description: "Local lunch • Dutch Hospital Shopping Precinct • Galle Face Green" },
            { day: "EVENING", title: "Drop-off", description: "Transfer back to your hotel or airport" }
        ],
    },
    {
        title: "Safari Expedition",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "3 Days / 2 Nights",
        price: "$600",
        description: "An unforgettable adventure into the wild. Spot exotic wildlife from the comfort of our rugged vans.",
        itinerary: [
            { day: "DAY 1", title: "Journey to the Wild", description: "Pickup and transfer to National Park • Evening introductory safari" },
            { day: "DAY 2", title: "Full Day Safari", description: "Morning and afternoon game drives • Leopard and elephant tracking • Camping under the stars" },
            { day: "DAY 3", title: "Departure", description: "Final morning drive • Transfer back to your desired location" }
        ],
    },
    {
        title: "Island Hopping",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "4 Days / 3 Nights",
        price: "$800",
        description: "Explore the beautiful islands with our coordinated ferry and van transfer services.",
        itinerary: [
            { day: "DAY 1", title: "Coastal Transfer", description: "Drive to the eastern or northern harbor • Evening beach relaxation" },
            { day: "DAY 2-3", title: "Island Adventures", description: "Ferry rides to surrounding islands • Snorkeling • Coral reefs • Beach BBQ" },
            { day: "DAY 4", title: "Return Journey", description: "Morning swim • Coordinated transfer back to the mainland and drop-off" }
        ],
    },
    {
        title: "Cultural Heritage Tour",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "2 Days",
        price: "$350",
        description: "Immerse yourself in local traditions, visit ancient temples, and enjoy authentic cuisine.",
        itinerary: [
            { day: "DAY 1", title: "Ancient Kingdoms", description: "Explore Polonnaruwa ruins and Anuradhapura sacred city • Traditional local lunch" },
            { day: "DAY 2", title: "Rock Fortresses", description: "Morning climb at Sigiriya • Dambulla Cave Temples • Transfer back" }
        ],
    },
    {
        title: "Luxury Beach Escape",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "Flexible",
        price: "From $200/day",
        description: "Relax on pristine beaches. Our driver handles the logistics while you soak up the sun.",
        itinerary: [
            { day: "ARRIVAL", title: "Coastal Transfer", description: "Seamless premium vehicle transfer to your luxury beach resort" },
            { day: "FLEXIBLE", title: "Sun & Sea", description: "Your assigned driver is on standby for any local trips, dining out, or water sports" },
            { day: "DEPARTURE", title: "Airport Drop-off", description: "Relaxing drive back to the airport when your holiday completes" }
        ],
    },
    {
        title: "Custom Road Trip",
        image: "https://images.unsplash.com/photo-1473220404768-356b27e8a93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "Custom",
        price: "Quote",
        description: "Plan your own itinerary. We provide the vehicle and driver to take you wherever you want to go.",
        itinerary: [
            { day: "DAY 1 ONWARDS", title: "Your Dream Journey", description: "You set the pace and destination. Our experienced chauffeur-guide will take you anywhere in comfort and style." }
        ],
    },
];

export default function Packages() {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-primary pt-32 pb-16 px-4 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Tour Packages</h1>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    Choose from our curated selection of tours or contact us for a custom itinerary.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <TourCard key={idx} {...pkg} />
                    ))}
                </div>
            </div>

        </div>
    );
}
