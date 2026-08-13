import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TESTIMONIAL_IMAGES = [
  'https://res.cloudinary.com/dm2glkkcv/image/upload/v1786582241/img_0136_5_a1jinc.png',
  'https://res.cloudinary.com/dm2glkkcv/image/upload/v1786582241/img_0136_6_droduj.png',
  'https://res.cloudinary.com/dm2glkkcv/image/upload/v1786582241/img_0136_7_tc4gvp.png'
];

export default function WhatsAppMockup() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIAL_IMAGES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIAL_IMAGES.length) % TESTIMONIAL_IMAGES.length);
  }, []);

  useEffect(() => {
    // Rotation every 8 seconds without pausing
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  // Slide transition variants (always slide left on auto-advance)
  const slideVariants = {
    enter: {
      x: '100%',
      opacity: 1
    },
    center: {
      x: '0%',
      opacity: 1
    },
    exit: {
      x: '-100%',
      opacity: 1
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 flex flex-col items-center">
      {/* 
        Sleek, Auto-sizing Smartphone Frame.
        We do NOT use a fixed aspect ratio class here. 
        Instead, we let the inner layout size the outer frame perfectly.
      */}
      <div 
        className="relative mx-auto bg-slate-900 rounded-[36px] p-2 shadow-2xl border-4 border-slate-800 w-full max-w-[320px] md:max-w-[340px] overflow-hidden flex flex-col"
      >
        {/* Screen Container - perfectly sized by the image ratio */}
        <div className="relative rounded-[28px] overflow-hidden bg-white select-none z-10 w-full">
          
          {/* Autoplay Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200/50 z-20 overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 8, ease: 'linear' }}
              className="h-full bg-brand-orange"
            />
          </div>

          {/* 
            Sizer Image:
            An invisible image with 'relative w-full h-auto' tells the browser 
            exactly what aspect ratio the parent container must take. 
            This dynamically eliminates ALL top/bottom blank space perfectly on any screen!
          */}
          <img
            src={TESTIMONIAL_IMAGES[0]}
            alt="Sizer"
            className="w-full h-auto opacity-0 pointer-events-none select-none block"
            referrerPolicy="no-referrer"
          />

          {/* Sliding images container - absolute-positioned inside the sized parent */}
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'tween', duration: 0.4, ease: 'easeInOut' },
                  opacity: { duration: 0.4 }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={TESTIMONIAL_IMAGES[activeIndex]}
                  alt={`Depoimento real ${activeIndex + 1}`}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls and Indicators */}
      <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-[320px]">
        {/* Navigation buttons + Index indicator */}
        <div className="flex items-center justify-between w-full">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-brand-orange transition-all shadow-sm cursor-pointer active:scale-95"
            aria-label="Depoimento Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {TESTIMONIAL_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-5 bg-brand-orange' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-brand-orange transition-all shadow-sm cursor-pointer active:scale-95"
            aria-label="Próximo Depoimento"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
