import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

const PhotoCard = ({ photo, index, onClick }: { photo: typeof photos[0]; index: number; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 60, damping: 12, delay: index * 0.08 }}
      className={`group relative rounded-lg overflow-hidden cursor-pointer shadow-md ${photo.span}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
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

const PhotoAlbum = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhotoIndex]);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    const currentPhoto = photos[selectedPhotoIndex];
    setActiveImageIndex((prev) => (prev === currentPhoto.images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    const currentPhoto = photos[selectedPhotoIndex];
    setActiveImageIndex((prev) => (prev === 0 ? currentPhoto.images.length - 1 : prev - 1));
  };

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setActiveImageIndex(0);
  };

  const selectedPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  return (
    <section className="bg-background py-20 md:py-28 relative">
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
            <PhotoCard key={photo.location} photo={photo} index={i} onClick={() => openLightbox(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 z-50 p-2 bg-cloud-white/10 hover:bg-cloud-white/20 rounded-full text-cloud-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center rounded-lg overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={selectedPhoto.images[activeImageIndex]}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain"
                    alt={selectedPhoto.location}
                  />
                </AnimatePresence>
                
                {selectedPhoto.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 p-3 bg-foreground/50 hover:bg-foreground/80 backdrop-blur text-cloud-white rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 p-3 bg-foreground/50 hover:bg-foreground/80 backdrop-blur text-cloud-white rounded-full transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
              
              <div className="mt-6 flex flex-col items-center">
                <h3 className="font-display italic text-2xl text-cloud-white mb-2">
                  {selectedPhoto.location}
                </h3>
                <div className="flex gap-2">
                  {selectedPhoto.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeImageIndex ? "bg-horizon-gold w-6" : "bg-cloud-white/30 hover:bg-cloud-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoAlbum;
