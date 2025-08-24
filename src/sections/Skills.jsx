import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, 
  SiHtml5, SiCss3, SiNextdotjs, SiMongodb, SiExpress,
  SiReact, SiVite, SiGit, SiGithub, SiNetlify,
  SiTailwindcss, SiScikitlearn, SiGooglecolab, SiNodedotjs
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts'
import { Brain } from 'lucide-react'

const Skills = () => {
  // Individual intersection observers for sequential loading
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [chartRef, chartInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [techRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [learningRef, learningInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Programming languages and technologies data for the grid
  const programmingLanguages = [
    { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" />, color: '#F7DF1E' },
    { name: 'Python', icon: <SiPython className="w-12 h-12" />, color: '#3776AB' },
    { name: 'Java', icon: <FaJava className="w-12 h-12" />, color: '#ED8B00' },
    { name: 'C++', icon: <SiCplusplus className="w-12 h-12" />, color: '#00599C' },
    { name: 'HTML5', icon: <SiHtml5 className="w-12 h-12" />, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 className="w-12 h-12" />, color: '#1572B6' },
    { name: 'React', icon: <SiReact className="w-12 h-12" />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12" />, color: '#000000' },
    { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12" />, color: '#339933' },
    { name: 'Express', icon: <SiExpress className="w-12 h-12" />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" />, color: '#47A248' },
    { name: 'Vite', icon: <SiVite className="w-12 h-12" />, color: '#646CFF' },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="w-12 h-12" />, color: '#06B6D4' },
    { name: 'Git', icon: <SiGit className="w-12 h-12" />, color: '#F05032' },
    // { name: 'GitHub', icon: <SiGithub className="w-12 h-12" />, color: '#181717' },
    { name: 'Netlify', icon: <SiNetlify className="w-12 h-12" />, color: '#00C7B7' },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="w-12 h-12" />, color: '#F7931E' },
    { name: 'Google Colab', icon: <SiGooglecolab className="w-12 h-12" />, color: '#F9AB00' },
  ]

  // Skills data for the bar chart - matching original reference image
  const skillsData = [
    {
      subject: 'Frontend Development',
      value: 92,
      color: '#60A5FA',
    },
    {
      subject: 'Backend Development',
      value: 85,
      color: '#34D399',
    },
    {
      subject: 'Database Management',
      value: 80,
      color: '#A78BFA',
    },
    {
      subject: 'Machine Learning',
      value: 75,
      color: '#FBBF24',
    },
    {
      subject: 'Problem Solving',
      value: 88,
      color: '#F87171',
    },
    {
      subject: 'System Design',
      value: 70,
      color: '#22D3EE',
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills Overview</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A visual representation of my technical skills and programming languages I work with.
          </p>
        </motion.div>

        {/* Skills Radar Chart */}
        <motion.div 
          ref={chartRef}
          className="bg-gray-800 rounded-xl shadow-2xl p-8 mb-16 border border-gray-700"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={chartInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-8">
          {/* <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div> */}
            <h3 className="text-2xl font-bold text-white">Technical Proficiency</h3>
          </div>
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.subject}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -50 }}
                animate={chartInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-200 font-medium text-base">{skill.subject}</span>
                    <span className="text-sm font-bold" style={{ color: skill.color }}>
                      {skill.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}40 0%, ${skill.color} 100%)`,
                        width: `${skill.value}%`
                      }}
                      initial={{ width: 0 }}
                      animate={chartInView ? { width: `${skill.value}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.6 + index * 0.2, ease: "easeOut" }}
                    >
                      <div 
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, transparent 0%, ${skill.color} 70%, ${skill.color}CC 100%)`
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programming Languages & Technologies Grid */}
        <motion.div
          ref={techRef}
          initial={{ opacity: 0, y: 60 }}
          animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 30,
                  scale: 0.8
                }}
                animate={techInView ? { 
                  opacity: 1, 
                  y: 0,
                  scale: 1
                } : { 
                  opacity: 0, 
                  y: 30,
                  scale: 0.8
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.08,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div style={{ color: lang.color }}>
                  {lang.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            ref={learningRef}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={learningInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-semibold text-neutral mb-4">
                🚀 Always Learning
              </h3>
              <p className="text-neutral/70 max-w-3xl mx-auto">
                Technology evolves rapidly, and I'm committed to continuous learning. 
                Currently exploring advanced React patterns, cloud technologies, and diving deeper into 
                machine learning applications in web development.
              </p>
              
              {/* Learning Progress Indicators */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {['Docker', 'AWS', 'TypeScript', 'GraphQL'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-base-100 rounded-full text-sm font-medium text-neutral/80 shadow-md"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={learningInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    📚 Learning {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
