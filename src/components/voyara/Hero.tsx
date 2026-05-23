import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const destinations = ["Maldives", "Patagonia", "Kyoto", "Amalfi", "Bali", "Santorini", "Bora Bora"];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-[-40px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-santorini.jpg')" }}
        animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
      />

      {/* Rich multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean/50 via-deep-ocean/10 to-deep-ocean/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-ocean/40 via-transparent to-deep-ocean/30" />
      
      {/* Warm golden radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, hsl(40 42% 48% / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Subtle animated grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-px h-32 bg-gradient-to-b from-transparent via-horizon-gold/30 to-transparent hidden lg:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[12%] w-px h-24 bg-gradient-to-b from-transparent via-horizon-gold/20 to-transparent hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[8%] w-20 h-px bg-gradient-to-r from-transparent via-horizon-gold/20 to-transparent hidden lg:block"
        animate={{ x: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-px bg-horizon-gold/60" />
            <p className="font-ui text-xs uppercase tracking-voyara text-horizon-gold">
              Bespoke Travel · Est. 2015
            </p>
            <span className="w-8 h-px bg-horizon-gold/60" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cloud-white leading-[1.1] max-w-5xl"
        >
          <span className="block">Every journey</span>
          <span className="block mt-1">deserves to be</span>
          <motion.span
            className="block mt-1 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            extraordinary
            <span className="text-horizon-gold">.</span>
            {/* Underline accent */}
            <motion.span
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-horizon-gold/60 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-ui font-light text-sm md:text-base text-cloud-white/70 tracking-wider mt-10 max-w-lg"
        >
          Handcrafted itineraries for the world's most unforgettable destinations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <button
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative font-ui text-sm uppercase tracking-voyara px-12 py-4 rounded-full overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 bg-horizon-gold transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-r from-horizon-gold via-terracotta to-horizon-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 text-foreground font-medium">Plan My Escape</span>
          </button>

          <p className="font-ui text-[11px] text-cloud-white/40 tracking-wider">
            No booking fees · One dedicated curator · Fully bespoke
          </p>
        </motion.div>
      </div>

      {/* Destination ticker */}
      <div className="absolute bottom-6 left-0 right-0 z-20 overflow-hidden">
        <div className="flex items-center gap-2 mb-3 justify-center">
          <span className="w-4 h-px bg-horizon-gold/60" />
          <span className="font-ui text-[10px] uppercase tracking-voyara text-horizon-gold">Currently booking</span>
          <span className="w-4 h-px bg-horizon-gold/60" />
        </div>
        <div className="flex animate-ticker whitespace-nowrap">
          {[...destinations, ...destinations].map((dest, i) => (
            <span key={i} className="font-ui text-xs text-cloud-white/80 mx-6 tracking-wider">
              {dest}
              <span className="ml-6 text-horizon-gold/50">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom vignette for smooth transition — below ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/80 to-transparent z-10" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="w-px h-8 bg-gradient-to-b from-cloud-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
