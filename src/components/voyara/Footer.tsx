const Footer = () => (
  <footer className="bg-deep-ocean py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        <div>
          <p className="font-display italic text-xl text-cloud-white mb-3">VOYARA</p>
          <p className="font-body text-sm text-cloud-white/50 leading-relaxed">
            The world, without the guesswork.
          </p>
        </div>

        <div>
          <p className="font-ui text-xs uppercase tracking-voyara text-horizon-gold mb-4">Destinations</p>
          <ul className="space-y-2">
            {["Bora Bora", "Santorini", "Maldives", "Kyoto", "Patagonia"].map((d) => (
              <li key={d}>
                <span className="font-body text-sm text-cloud-white/50 hover:text-cloud-white transition-colors cursor-pointer">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-ui text-xs uppercase tracking-voyara text-horizon-gold mb-4">Company</p>
          <ul className="space-y-2">
            {["About", "How It Works", "Stories", "Careers"].map((item) => (
              <li key={item}>
                <span className="font-body text-sm text-cloud-white/50 hover:text-cloud-white transition-colors cursor-pointer">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-ui text-xs uppercase tracking-voyara text-horizon-gold mb-4">Contact</p>
          <ul className="space-y-2 font-body text-sm text-cloud-white/50">
            <li>hello@voyara.com</li>
            <li>+1 (555) 234-5678</li>
            <li>New York, NY</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cloud-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-ui text-xs text-cloud-white/30">
          © 2025 Voyara Travel · Curated Escapes
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms"].map((link) => (
            <span key={link} className="font-ui text-xs text-cloud-white/30 hover:text-cloud-white/60 transition-colors cursor-pointer">
              {link}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
