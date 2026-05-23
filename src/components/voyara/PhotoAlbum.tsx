import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  {
    images: ["/images/album-maldives.jpg", "/images/album-maldives-2.jpg"],
    location: "Malé, Maldives",
    span: "row-span-2",
  },
  {
    images: ["/images/album-kyoto.jpg", "/images/album-kyoto-2.jpg"],
    location: "Kyoto, Japan",
    span: "",
  },
  {
    images: ["/images/album-amalfi.jpg", "/images/album-amalfi-2.jpg"],
    location: "Amalfi Coast, Italy",
    span: "",
  },
  {
    images: ["/images/album-patagonia.jpg", "/images/album-patagonia-2.jpg"],
    location: "Patagonia, Argentina",
    span: "row-span-2",
  },
  {
    images: ["/images/album-bali.jpg", "/images/album-bali-2.jpg"],
    location: "Ubud, Bali",
    span: "",
  },
  {
    images: ["/images/album-swiss.jpg", "/images/album-swiss-2.jpg"],
    location: "Zermatt, Switzerland",
    span: "",
  },
  {
    images: ["/images/album-iceland.jpg", "/images/album-iceland-2.jpg"],
    location: "Seljalandsfoss, Iceland",
    span: "row-span-2",
  },
  {
    images: ["/images/album-rome.jpg", "/images/album-rome-2.jpg"],
    location: "Rome, Italy",
    span: "",
  },
];

const PhotoCard = ({ photo, index }: { photo: typeof photos[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`group relative rounded-lg overflow-hidden cursor-pointer ${photo.span}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Base image (always mounted) */}
      <img
        src={photo.images[0]}
        alt={photo.location}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Second image slides in on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.img
            key="hover-img"
            src={photo.images[1]}
            alt={`${photo.location} alternate view`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </AnimatePresence>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />

      {/* Slide indicator dots */}
      <div className="absolute top-3 right-3 flex gap-1.5 z-10">
        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${!hovered ? "bg-cloud-white" : "bg-cloud-white/40"}`} />
        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${hovered ? "bg-cloud-white" : "bg-cloud-white/40"}`} />
      </div>

      {/* Location label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-horizon-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="font-ui text-xs text-cloud-white tracking-wider">
            {photo.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const PhotoAlbum = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-ui text-xs uppercase tracking-voyara text-horizon-gold mb-3">
          From Our Travelers' Journeys
        </p>
        <h2 className="font-display italic text-3xl md:text-5xl text-foreground">
          Moments worth collecting.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <PhotoCard key={photo.location} photo={photo} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default PhotoAlbum;
