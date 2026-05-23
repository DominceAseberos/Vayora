import { motion } from "framer-motion";

const destinations = [
  {
    image: "/images/dest-bora-bora.jpg",
    name: "Bora Bora",
    country: "French Polynesia",
    tags: "Romance · Seclusion",
  },
  {
    image: "/images/dest-santorini.jpg",
    name: "Santorini",
    country: "Greece",
    tags: "Culture · Sunsets",
  },
  {
    image: "/images/dest-serengeti.jpg",
    name: "Serengeti",
    country: "Tanzania",
    tags: "Adventure · Wildlife",
  },
];

const Destinations = () => (
  <section id="destinations" className="bg-ivory py-20 md:py-28">
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
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
        <button className="font-ui text-sm text-horizon-gold hover:text-terracotta transition-colors tracking-wider">
          + 40 more destinations →
        </button>
      </div>
    </div>
  </section>
);

export default Destinations;
