import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect with longer duration
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-lg box-border"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ 
            x: { 
              type: 'spring', 
              stiffness: 100, 
              damping: 20,
              mass: 0.5
            },
            opacity: { 
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1]
            }
          }}
          className="w-full h-full absolute"
        >
          <img
            src={images[currentIndex]}
            alt={`Project screenshot ${currentIndex + 1}`}
            className="w-full h-full object-cover box-border"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
