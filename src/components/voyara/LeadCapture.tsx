import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    dates: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (showSuccessModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSuccessModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ name: "", email: "", destination: "", dates: "" });
    }, 1500);
  };

  return (
    <section id="booking" className="bg-ivory py-20 md:py-28 relative">
      <div className="max-w-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display italic text-3xl md:text-4xl text-foreground mb-4">
            Start planning today.
          </h2>
          <p className="font-ui text-xs uppercase tracking-voyara text-driftwood">
            Free 30-Minute Discovery Call · No Obligation
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {[
            { key: "name", label: "Your Name", type: "text" },
            { key: "email", label: "Email Address", type: "email" },
            { key: "destination", label: "Dream Destination", type: "text" },
            { key: "dates", label: "Approximate Dates", type: "text" },
          ].map((field) => (
            <div key={field.key}>
              <label className="font-ui text-xs uppercase tracking-voyara text-driftwood mb-2 block">
                {field.label}
              </label>
              <input
                type={field.type}
                required={field.key === "name" || field.key === "email"}
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                className="w-full bg-cloud-white border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-horizon-gold/40 transition-shadow disabled:opacity-50"
                disabled={isSubmitting}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-ui text-sm uppercase tracking-voyara bg-horizon-gold text-foreground py-4 rounded-full hover:bg-terracotta transition-all duration-300 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Request My Free Consultation"
            )}
          </button>

          <p className="font-ui text-xs text-center text-driftwood mt-4">
            We respond within 24 hours. No spam. No sales pressure.
          </p>
        </motion.form>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-ivory rounded-2xl shadow-2xl p-8 md:p-12 text-center flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-driftwood hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-16 h-16 bg-horizon-gold/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-horizon-gold" />
              </div>
              
              <h3 className="font-display italic text-3xl text-foreground mb-4">
                Your Journey Begins.
              </h3>
              
              <p className="font-body text-sm text-driftwood leading-relaxed mb-8">
                Thank you for reaching out. One of our destination curators will be in touch with you within 24 hours to begin designing your bespoke escape.
              </p>
              
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full font-ui text-xs uppercase tracking-voyara border border-border text-foreground py-3 rounded-full hover:bg-foreground hover:text-cloud-white transition-colors duration-300"
              >
                Return to Site
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LeadCapture;
