import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Heart, Code, Lightbulb } from 'lucide-react'
import CoverPic from '../assets/Cover Pic.jpg'

const About = () => {
  // Individual intersection observers for sequential loading
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [hobbiesRef, hobbiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [factRef, factInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-20 bg-base-100">
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
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Card */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={imageInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -15 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className=" relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  {/* Profile image */}
                  <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                    <img 
                      src={CoverPic} 
                      alt="Mohiudeen - Profile Picture" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Floating elements around image */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Code className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-4 left-4 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Lightbulb className="w-5 h-5 text-secondary" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div 
              ref={contentRef}
              initial={{ opacity: 0, x: 50 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral/80 leading-relaxed">
                  Hello! I'm <strong className="text-primary">Mohiudeen</strong>, an aspiring software engineer 
                  currently pursuing my BS in Bioinformatics at the University of Agriculture Faisalabad. 
                  I'm passionate about creating innovative web solutions and exploring the intersection of 
                  technology and biology.
                </p>
                
                <p className="text-neutral/80 leading-relaxed">
                  My journey in tech started with curiosity about how things work, which led me to dive deep 
                  into web development, particularly the MERN stack. I love building applications that solve 
                  real-world problems and create meaningful user experiences.
                </p>
              </div>

              {/* Info Cards */}
              <motion.div 
                ref={cardsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="grid md:grid-cols-2 gap-4 mt-8"
              >
                {/* Education Card */}
                <motion.div
                  className="bg-base-200 rounded-xl p-6 hover:bg-primary/5 transition-all duration-300 border border-base-300 hover:border-primary/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-6 h-6 text-primary mr-3" />
                    <h3 className="font-semibold text-neutral">Education</h3>
                  </div>
                  <p className="text-sm text-neutral/70">
                    <strong>BS Bioinformatics</strong><br />
                    University of Agriculture Faisalabad<br />
                    Sep 2021 - May 2025
                  </p>
                </motion.div>

                {/* Interests Card */}
                <motion.div
                  className="bg-base-200 rounded-xl p-6 hover:bg-secondary/5 transition-all duration-300 border border-base-300 hover:border-secondary/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center mb-3">
                    <Heart className="w-6 h-6 text-secondary mr-3" />
                    <h3 className="font-semibold text-neutral">Interests</h3>
                  </div>
                  <p className="text-sm text-neutral/70">
                    Web Development, Software Development, Machine Learning, AI, Mobile Apps
                  </p>
                </motion.div>
              </motion.div>

              {/* Hobbies Section */}
              <motion.div
                ref={hobbiesRef}
                initial={{ opacity: 0, y: 30 }}
                animate={hobbiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="font-semibold text-neutral mb-3 flex items-center">
                  <span className="mr-2">🔧</span>
                  Hobbies & Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Electronics', 'Tech Gadgets', 'DIY Projects', 'Problem Solving', 'Innovation'].map((hobby, index) => (
                    <motion.span
                      key={hobby}
                      className="px-3 py-1 bg-white/50 dark:bg-base-300/50 rounded-full text-sm text-neutral/80"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={hobbiesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {hobby}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Fun Fact */}
              <motion.div
                ref={factRef}
                className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4 border-l-4 border-primary"
                initial={{ opacity: 0, x: -20 }}
                animate={factInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                <p className="text-sm text-neutral/80 italic">
                  💡 <strong>Fun fact:</strong> I believe that the best solutions come from combining 
                  creativity with technical expertise, which is why I love exploring both the artistic 
                  and analytical sides of development.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
