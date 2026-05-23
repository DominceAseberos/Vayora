import { motion } from "framer-motion";

const MeetCurator = () => (
  <section id="curator" className="bg-background py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-lg overflow-hidden aspect-[4/5]"
      >
        <img
          src="/images/curator-cafe.jpg"
          alt="Travel curator planning a journey"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="font-ui text-xs uppercase tracking-voyara text-horizon-gold mb-4">
          Your Dedicated Travel Curator
        </p>
        <h2 className="font-display italic text-3xl md:text-4xl text-foreground mb-6 leading-snug">
          We don't sell packages.
          <br />
          We listen.
        </h2>
        <p className="font-body text-foreground/80 leading-relaxed mb-6">
          Every Voyara client is matched with one dedicated curator who handles everything — from the first discovery call to your final hotel checkout. No call centers. No generic templates. Just a real person who's been where you want to go.
        </p>
        <p className="font-body text-foreground/80 leading-relaxed mb-8">
          Our curators average 15 years of travel industry experience and personally visit every property they recommend. When we say handpicked, we mean it.
        </p>
        <button
          onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          className="font-ui text-sm uppercase tracking-voyara text-horizon-gold hover:text-terracotta transition-colors"
        >
          Meet the Team →
        </button>
      </motion.div>
    </div>
  </section>
);

export default MeetCurator;
