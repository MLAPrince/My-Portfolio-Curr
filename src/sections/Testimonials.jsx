import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const Testimonials = () => {
  // Individual intersection observers for sequential loading
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [carouselRef, carouselInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  // Placeholder testimonials data - replace with real testimonials when available
  const testimonials = [
    {
      id: 1,
      name: "Future Client",
      role: "Project Manager",
      company: "Tech Company",
      image: "https://via.placeholder.com/80x80/3b82f6/ffffff?text=FC",
      rating: 5,
      text: "Working with Mohiudeen will be an amazing experience. His dedication to learning and problem-solving skills make him a valuable team member.",
      project: "Upcoming Project"
    },
    {
      id: 2,
      name: "Future Colleague",
      role: "Senior Developer",
      company: "Software Solutions",
      image: "https://via.placeholder.com/80x80/8b5cf6/ffffff?text=FC",
      rating: 5,
      text: "Mohiudeen's passion for technology and continuous learning attitude will make him an excellent addition to any development team.",
      project: "Future Collaboration"
    },
    {
      id: 3,
      name: "Future Mentor",
      role: "Tech Lead",
      company: "Innovation Hub",
      image: "https://via.placeholder.com/80x80/10b981/ffffff?text=FM",
      rating: 5,
      text: "I look forward to mentoring Mohiudeen. His enthusiasm for web development and modern technologies is truly inspiring.",
      project: "Mentorship Program"
    },
    {
      id: 4,
      name: "Future Team Lead",
      role: "Engineering Manager",
      company: "Digital Agency",
      image: "https://via.placeholder.com/80x80/f59e0b/ffffff?text=TL",
      rating: 5,
      text: "Mohiudeen's portfolio showcases great potential. I'm excited about the possibility of having him join our team.",
      project: "Team Expansion"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const slideVariants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  }

  return (
    <section id="testimonials" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <motion.div 
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-4">
              <span className="text-primary">Testimonials</span> & Reviews
            </h2>
            <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
              What future clients and colleagues might say about working with me
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div 
            ref={carouselRef}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={carouselInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Main Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl bg-base-200 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="p-8 md:p-12"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Quote className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-neutral text-center leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full border-4 border-primary/20"
                    />
                    <div className="text-center">
                      <h4 className="font-bold text-neutral text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-neutral/70 text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-primary text-sm font-medium">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div className="flex justify-center mt-6">
                    <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {testimonials[currentIndex].project}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-base-100 hover:bg-primary hover:text-white rounded-full shadow-lg transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-base-100 hover:bg-primary hover:text-white rounded-full shadow-lg transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-neutral/30 hover:bg-neutral/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, y: 40 }}
            animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 border border-secondary/20 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-neutral mb-4">
                💼 Ready to Work Together?
              </h3>
              <p className="text-neutral/70 mb-6">
                These are placeholder testimonials representing the kind of positive feedback 
                I aim to receive from future clients and colleagues. I'm committed to delivering 
                exceptional work and building lasting professional relationships.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  className="flex items-center space-x-2 px-4 py-2 bg-base-100 rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={infoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">🎯</span>
                  <span className="text-sm font-medium text-neutral">Quality Focused</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center space-x-2 px-4 py-2 bg-base-100 rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={infoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">⏰</span>
                  <span className="text-sm font-medium text-neutral">On-Time Delivery</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center space-x-2 px-4 py-2 bg-base-100 rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={infoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">🤝</span>
                  <span className="text-sm font-medium text-neutral">Great Communication</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
