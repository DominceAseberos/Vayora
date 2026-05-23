import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Trips Curated" },
  { number: "48", label: "Countries Covered" },
  { number: "12", label: "Years In Business" },
  { number: "4.98", label: "Average Review", prefix: "★" },
  { number: "100%", label: "Tailor-Made" },
];

const TrustStrip = () => (
  <section className="bg-ivory py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={i === 4 ? "col-span-2 md:col-span-1" : ""}
        >
          <p className="font-display text-3xl md:text-4xl text-horizon-gold">
            {stat.prefix && <span className="mr-1">{stat.prefix}</span>}
            {stat.number}
          </p>
          <p className="font-ui text-xs uppercase tracking-voyara text-foreground mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
