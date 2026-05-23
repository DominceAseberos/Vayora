import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We handed Voyara a rough idea and got back the trip of our lives. Every detail — right down to the sunset dinner — was perfect.",
    name: "Sarah & James",
    trip: "Bora Bora Honeymoon",
  },
  {
    quote: "I've used big agencies before. This is completely different. It felt like having a well-traveled best friend do all the planning.",
    name: "Marcus T.",
    trip: "Solo Japan & South Korea",
  },
  {
    quote: "They surprised us with a private boat tour we never asked for. That's the Voyara difference — they anticipate what you didn't know you wanted.",
    name: "Elena & David",
    trip: "Amalfi Anniversary",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="relative py-20 md:py-28 overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/couple-pool.jpg')" }}
    />
    <div className="absolute inset-0 bg-deep-ocean/90" />

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display italic text-3xl md:text-5xl text-cloud-white text-center mb-16"
      >
        Trips that stay with you forever.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`bg-ivory/95 backdrop-blur-sm rounded-lg p-8 ${
              i === 1 ? "md:-mt-4" : i === 2 ? "md:mt-4" : ""
            }`}
          >
            <div className="text-horizon-gold text-sm mb-4">★★★★★</div>
            <p className="font-body italic text-foreground leading-relaxed mb-6">"{t.quote}"</p>
            <p className="font-ui text-xs uppercase tracking-voyara text-horizon-gold">
              {t.name}
            </p>
            <p className="font-ui text-xs text-driftwood mt-1">{t.trip}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
