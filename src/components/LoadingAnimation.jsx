import { motion } from 'framer-motion';

// Loading animation component with modern design
const LoadingAnimation = ({ isLoading = true, fullScreen = true }) => {
  if (!isLoading) return null;

  // Animation variants for the loading dots
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const dot = {
    hidden: { y: '0%' },
    show: {
      y: ['0%', '-50%', '0%'],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const text = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`${
        fullScreen
          ? 'fixed inset-0 z-50 bg-base-100/95 backdrop-blur-sm'
          : 'relative w-full h-32'
      } flex flex-col items-center justify-center`}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.div 
        className="relative w-24 h-24 mb-6 flex items-center justify-center"
        variants={container}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute w-full h-full rounded-full border-4 border-primary/20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            rotate: {
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            },
            scale: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            },
            opacity: {
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }}
        >
          {/* Animated dots */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3.5 h-3.5 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                x: -7, // Half of width
                y: -7, // Half of height
                transform: `rotate(${i * 90}deg) translateX(32px) rotate(-${i * 90}deg)`,
                background: 'linear-gradient(135deg, hsl(221, 83%, 53%) 0%, hsl(217, 91%, 60%) 100%)',
                boxShadow: [
                  '0 0 10px hsl(221, 83%, 60%)',
                  '0 0 20px hsl(221, 83%, 60%)',
                  '0 0 30px hsla(221, 83%, 60%, 0.7)'
                ].join(','),
                zIndex: 10,
              }}
              variants={dot}
            />
          ))}
        </motion.div>
        
        {/* Center dot */}
        <div 
          className="w-3.5 h-3.5 rounded-full z-20"
          style={{
            background: 'linear-gradient(135deg, hsl(221, 83%, 53%) 0%, hsl(217, 91%, 60%) 100%)',
            boxShadow: [
              '0 0 15px hsl(221, 83%, 60%)',
              '0 0 25px hsla(221, 83%, 60%, 0.8)'
            ].join(','),
          }}
        />
      </motion.div>

      {/* <motion.p
        className="text-lg font-medium text-neutral/90 mt-2 tracking-wide"
        variants={text}
      >
        Loading
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block w-3 text-center"
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="inline-block w-3 text-center"
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          className="inline-block w-3 text-center"
        >
          .
        </motion.span>
      </motion.p> */}
    </motion.div>
  );
};

// Page loading wrapper component
export const PageLoader = ({ children, isLoading }) => {
  return (
    <>
      <LoadingAnimation isLoading={isLoading} />
      {!isLoading && children}
    </>
  )
}

// Component loading wrapper (smaller version)
export const ComponentLoader = ({ children, isLoading, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <LoadingAnimation isLoading={isLoading} fullScreen={false} />
      )}
      <div className={isLoading ? 'opacity-50 pointer-events-none' : ''}>
        {children}
      </div>
    </div>
  )
}

export default LoadingAnimation
