import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";

const destinations = [
  {
    image: "/images/dest-bora-bora.jpg",
    name: "Bora Bora",
    country: "French Polynesia",
    tags: "Romance · Seclusion",
    description: "Experience the ultimate romantic getaway in the South Pacific. Crystal clear waters, overwater bungalows, and vibrant coral reefs await you.",
  },
  {
    image: "/images/dest-santorini.jpg",
    name: "Santorini",
    country: "Greece",
    tags: "Culture · Sunsets",
    description: "Famous for its stunning sunsets, white-washed buildings, and blue-domed churches. A perfect blend of rich history, unique beaches, and Aegean cuisine.",
  },
  {
    image: "/images/dest-serengeti.jpg",
    name: "Serengeti",
    country: "Tanzania",
    tags: "Adventure · Wildlife",
    description: "Witness the Great Migration and spot the Big Five in one of the world's most famous wildlife reserves. An unforgettable safari adventure.",
  },
];

const Destinations = () => {
  const [selectedDest, setSelectedDest] = useState<typeof destinations[0] | null>(null);

  useEffect(() => {
    if (selectedDest) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedDest]);

  const handleMoreDestinations = () => {
    toast.info("Full catalog coming soon. Subscribe to our newsletter for updates.");
  };

  const scrollToBooking = () => {
    setSelectedDest(null);
    setTimeout(() => {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <section id="destinations" className="bg-ivory py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display italic text-3xl md:text-5xl text-foreground">
            Where will you go next?
          </h2>
          <p className="font-ui text-xs uppercase tracking-voyara text-driftwood mt-4">
            Handpicked Destinations · Updated Seasonally
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 50, damping: 15, delay: i * 0.1 }}
              onClick={() => setSelectedDest(dest)}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-lg"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-horizon-gold rounded-lg transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-ui text-xs uppercase tracking-voyara text-horizon-gold mb-1">
                  {dest.country} · {dest.tags}
                </p>
                <h3 className="font-display italic text-2xl md:text-3xl text-cloud-white">
                  {dest.name}
                </h3>
                <span className="inline-block mt-3 font-ui text-xs uppercase tracking-voyara text-cloud-white/0 group-hover:text-cloud-white transition-all duration-500">
                  Explore →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleMoreDestinations}
            className="font-ui text-sm text-horizon-gold hover:text-terracotta transition-colors tracking-wider"
          >
            + 40 more destinations →
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedDest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setSelectedDest(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-ivory rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-foreground/20 hover:bg-foreground/40 backdrop-blur-md rounded-full text-cloud-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={selectedDest.image}
                  alt={selectedDest.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <p className="font-ui text-xs uppercase tracking-voyara text-horizon-gold mb-2">
                  {selectedDest.country} · {selectedDest.tags}
                </p>
                <h3 className="font-display italic text-4xl text-foreground mb-6">
                  {selectedDest.name}
                </h3>
                <p className="font-body text-sm leading-relaxed text-driftwood mb-8">
                  {selectedDest.description}
                </p>
                
                <button
                  onClick={scrollToBooking}
                  className="font-ui text-sm uppercase tracking-voyara bg-foreground text-cloud-white py-4 px-8 rounded-full hover:bg-terracotta transition-colors duration-300 self-start"
                >
                  Plan This Trip
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Destinations;
