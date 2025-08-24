import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear()

  // Social links data
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/MLAPrince",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mohiudeen-52bb35175",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hafizismail298@gmail.com",
      color: "hover:text-red-400"
    }
  ]

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  // Smooth scroll function
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-base-300 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Mohiudeen
                </h3>
                <p className="text-neutral/70 text-sm leading-relaxed">
                  Aspiring Software Engineer passionate about creating innovative web solutions 
                  and exploring modern technologies. Currently pursuing BS Bioinformatics while 
                  building the future, one line of code at a time.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-neutral mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }}
                        className="text-neutral/70 hover:text-primary transition-colors duration-200 text-sm"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Connect Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-neutral mb-4">Let's Connect</h4>
                <p className="text-neutral/70 text-sm mb-4">
                  Follow me on social media and let's build something amazing together!
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-base-200 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-base-content/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-neutral/60"
            >
              <span>© {currentYear} Mohiudeen. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and lots of ☕</span>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-neutral/60 hover:text-primary transition-colors duration-200 group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span>Back to top</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp className="w-4 h-4 group-hover:text-primary" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="border-t border-base-content/10 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs text-neutral/50">
              Built with React, TailwindCSS, Framer Motion & ❤️ | 
              Hosted with 🚀 | 
              <span className="ml-1">
                <a 
                  href="https://github.com/MLAPrince" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  View Source
                </a>
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
