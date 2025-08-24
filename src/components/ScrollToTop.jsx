import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top function with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary hover:bg-primary-focus text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
