import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Destinations", id: "destinations" },
  { label: "How It Works", id: "how-it-works" },
  { label: "About", id: "curator" },
  { label: "Stories", id: "testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isMobileMenuOpen
            ? "bg-cloud-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display italic text-2xl tracking-wide z-50 relative"
          >
            <span className={scrolled || isMobileMenuOpen ? "text-foreground" : "text-cloud-white"}>
              VOYARA
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 relative p-2 -mr-2"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled || isMobileMenuOpen ? "text-foreground" : "text-cloud-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-cloud-white"}`} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-cloud-white/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 pb-10 px-6"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className="font-display italic text-2xl text-foreground hover:text-horizon-gold transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                onClick={() => scrollTo("booking")}
                className="w-full mt-4 font-ui text-sm uppercase tracking-voyara px-6 py-4 rounded-full bg-horizon-gold text-foreground hover:bg-terracotta transition-colors"
              >
                Plan My Escape
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
