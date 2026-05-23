import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cloud-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display italic text-2xl tracking-wide">
          <span className={scrolled ? "text-foreground" : "text-cloud-white"}>VOYARA</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Destinations", id: "destinations" },
            { label: "How It Works", id: "how-it-works" },
            { label: "About", id: "curator" },
            { label: "Stories", id: "testimonials" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-ui text-xs uppercase tracking-voyara transition-colors hover:text-horizon-gold ${
                scrolled ? "text-foreground" : "text-cloud-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("booking")}
          className={`hidden md:block font-ui text-xs uppercase tracking-voyara px-6 py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "border-horizon-gold text-foreground bg-horizon-gold hover:bg-terracotta hover:border-terracotta"
              : "border-horizon-gold/70 text-cloud-white hover:bg-horizon-gold hover:text-foreground"
          }`}
        >
          Plan My Escape
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
