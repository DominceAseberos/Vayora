import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    dates: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", destination: "", dates: "" });
  };

  return (
    <section id="booking" className="bg-ivory py-20 md:py-28">
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
                className="w-full bg-cloud-white border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-horizon-gold/40 transition-shadow"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full font-ui text-sm uppercase tracking-voyara bg-horizon-gold text-foreground py-4 rounded-full hover:bg-terracotta transition-colors duration-300 mt-2"
          >
            Request My Free Consultation
          </button>

          <p className="font-ui text-xs text-center text-driftwood mt-4">
            We respond within 24 hours. No spam. No sales pressure.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadCapture;
