// Experience Section - Commented out for future use
// Uncomment and customize when you have work experience to showcase

/*
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, Award } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Experience data - customize with your actual work experience
  const experiences = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Company Name",
      location: "City, Country",
      duration: "Jan 2024 - Present",
      type: "Full-time",
      description: [
        "Led development of scalable web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines and improved deployment processes"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      achievements: [
        "Increased application performance by 40%",
        "Reduced deployment time by 60%"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Previous Company",
      location: "City, Country", 
      duration: "Jun 2022 - Dec 2023",
      type: "Full-time",
      description: [
        "Developed and maintained multiple web applications",
        "Worked with MERN stack to build responsive user interfaces",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile development processes"
      ],
      technologies: ["React", "Express.js", "MongoDB", "JavaScript"],
      achievements: [
        "Successfully delivered 5+ projects on time",
        "Improved user experience metrics by 25%"
      ]
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company: "Startup Company",
      location: "City, Country",
      duration: "Jan 2022 - May 2022", 
      type: "Internship",
      description: [
        "Assisted in developing web applications using modern frameworks",
        "Learned industry best practices and coding standards",
        "Contributed to bug fixes and feature implementations",
        "Participated in daily standups and sprint planning"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      achievements: [
        "Completed internship with excellent feedback",
        "Contributed to 3 major feature releases"
      ]
    }
  ]

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="experience" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header * /}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my career
            </p>
          </motion.div>

          {/* Timeline * /}
          <div className="relative">
            {/* Timeline line * /}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/20"></div>

            {/* Experience Items * /}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot * /}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-base-100 z-10"></div>

                  {/* Content Card * /}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      className="bg-base-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Header * /}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.type === 'Full-time' ? 'bg-primary/10 text-primary' :
                            exp.type === 'Internship' ? 'bg-secondary/10 text-secondary' :
                            'bg-accent/10 text-accent'
                          }`}>
                            {exp.type}
                          </span>
                          <span className="text-sm text-neutral/60 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-neutral mb-1">{exp.title}</h3>
                        
                        <div className="flex items-center text-neutral/70 mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        
                        <div className="flex items-center text-neutral/60 text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description * /}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-sm text-neutral/80 flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies * /}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-neutral mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-base-200 text-neutral/80 rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements * /}
                      {exp.achievements && (
                        <div>
                          <h4 className="text-sm font-semibold text-neutral mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-accent flex items-start">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action * /}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-semibold text-neutral mb-4">
                🚀 Ready for New Opportunities
              </h3>
              <p className="text-neutral/70 max-w-2xl mx-auto mb-6">
                I'm always open to discussing new opportunities and collaborations. 
                Let's connect and see how we can work together!
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-focus transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
*/

// Placeholder component for now - shows message about future experience
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  // Individual intersection observers for sequential loading
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-neutral mb-4"
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>
        <motion.div 
          ref={cardRef}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/20 max-w-2xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl mb-6"
          >
            🚀
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-semibold text-neutral mb-4"
          >
            Future Experiences Coming Soon
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-neutral/70 leading-relaxed"
          >
            As an aspiring software engineer currently pursuing my degree, I'm actively seeking 
            internship and entry-level opportunities to gain professional experience. 
            This section will be updated with my work experiences as I progress in my career journey.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
