import { motion } from "framer-motion";
import { Compass } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell us your dream",
    description: "Share your dates, ideas, and wishlist. Nothing is too ambitious.",
    image: "/images/how-planning.jpg",
  },
  {
    number: "02",
    title: "We craft your itinerary",
    description: "Your dedicated curator builds a fully personalized plan — stays, experiences, transfers, surprises.",
    icon: true,
  },
  {
    number: "03",
    title: "You travel, we handle everything",
    description: "From first departure to final return, we're one message away.",
    image: "/images/airplane-window.jpg",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="bg-background py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="font-display italic text-3xl md:text-5xl text-foreground">
          Your journey starts with a conversation.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="text-center"
          >
            <p className="font-display text-6xl text-horizon-gold/20 mb-6">{step.number}</p>
            {step.image ? (
              <div className="w-full aspect-video rounded-lg overflow-hidden mb-6">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ) : (
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full border border-horizon-gold/30 flex items-center justify-center">
                  <Compass className="w-8 h-8 text-horizon-gold" />
                </div>
              </div>
            )}
            <h3 className="font-display italic text-xl text-foreground mb-3">{step.title}</h3>
            <p className="font-body text-sm text-driftwood leading-relaxed max-w-xs mx-auto">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
