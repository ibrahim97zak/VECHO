import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/public/imageSlider/Dahua-Turret-banner-2.jpg",
  "/public/imageSlider/Dahua-Turret-banner-4.jpg",
  "/public/imageSlider/Dahua-Turret-banner-5.jpg",
  "/public/imageSlider/Dahua-Turret-banner-6.jpg",
  "/public/imageSlider/Dahua-Turret-banner-7.jpg"
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute bottom-6 flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-white bg-opacity-30 rounded-full shadow-md hover:bg-opacity-50"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-white bg-opacity-30 rounded-full shadow-md hover:bg-opacity-50"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
