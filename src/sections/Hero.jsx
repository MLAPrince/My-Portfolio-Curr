import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'
import { Download, Mail, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  // Individual intersection observers for sequential loading
  const [greetingRef, greetingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [nameRef, nameInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [typewriterRef, typewriterInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [buttonsRef, buttonsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [socialRef, socialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Animation variants for staggered elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Scroll to contact section
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div 
          ref={greetingRef}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={greetingInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 mt-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          ref={nameRef}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={nameInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-neutral mb-6"
        >
          Hi, I'm{' '}
          <span
  className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f2937] to-[#2563eb] dark:from-[#60a5fa] dark:to-[#a78bfa]"
>
  Mohiudeen
</span>
        </motion.h1>

        {/* Typewriter Animation for Subtitle */}
        <motion.div 
          ref={typewriterRef}
          initial={{ opacity: 0, y: 40 }}
          animate={typewriterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <TypeAnimation
            sequence={[
              'Aspiring Software Engineer',
              2000,
              'MERN Stack Developer',
              2000,
              'Tech Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-4xl font-semibold text-neutral/80"
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          ref={descriptionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={descriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative web solutions and exploring the endless possibilities of technology.
          Currently pursuing BS Bioinformatics while building modern applications with cutting-edge technologies.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          ref={buttonsRef}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={buttonsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="https://drive.google.com/file/d/1giVJDSn0PdFTW15j7cfx8gk_pLdJYISc/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            View Resume
          </motion.a>

          <motion.button
            onClick={scrollToContact}
            className="btn btn-outline btn-lg px-8 py-3 font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          ref={socialRef}
          initial={{ opacity: 0, y: 30 }}
          animate={socialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            href="https://github.com/MLAPrince"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-base-200 hover:bg-primary hover:text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mohiudeen-52bb35175"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-base-200 hover:bg-primary hover:text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="mailto:hafizismail298@gmail.com"
            className="p-3 bg-base-200 hover:bg-primary hover:text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          title='Scroll down'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-neutral/30 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          {/* <p className="text-xs text-neutral/50 mt-2">Scroll down</p> */}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
