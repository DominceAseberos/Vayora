import { motion } from "framer-motion";

const FinalCTA = () => (
  <section className="relative py-32 md:py-40 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/airplane-window.jpg')" }}
    />
    <div className="absolute inset-0 bg-foreground/50" />

    <div className="relative z-10 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display italic text-3xl md:text-5xl text-cloud-white max-w-2xl mx-auto leading-snug mb-8"
      >
        Your next great journey is one conversation away.
      </motion.h2>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
        className="font-ui text-sm uppercase tracking-voyara bg-horizon-gold text-foreground px-10 py-4 rounded-full hover:bg-terracotta transition-colors duration-300"
      >
        Plan My Escape
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="font-ui text-xs text-cloud-white/60 mt-6"
      >
        or email us directly at hello@voyara.com
      </motion.p>
    </div>
  </section>
);

export default FinalCTA;
