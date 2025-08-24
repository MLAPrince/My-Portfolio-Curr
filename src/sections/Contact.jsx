import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setIsSending(true)

    try {
      // Get EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Hafiz Ismail',
          to_email: 'hafizismail298@gmail.com',
          subject: formData.subject || 'Message from Portfolio Contact Form',
          message: formData.message,
        },
        publicKey
      )

      setIsSent(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false)
      }, 5000)
    } catch (err) {
      console.error('Failed to send email:', err)
      setError('Failed to send message. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  // Individual intersection observers for sequential loading
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [detailsRef, detailsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Header */}
          <motion.div 
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-neutral/70 max-w-2xl mx-auto">
              Have a question or want to work together? Reach out via the form or any of the contact details below.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Details */}
            <motion.div 
              ref={detailsRef}
              initial={{ opacity: 0, x: -50 }}
              animate={detailsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-base-100 rounded-2xl p-8 shadow-xl border border-base-300"
            >
              <h3 className="text-xl font-semibold text-neutral mb-6">Contact Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral/80">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm">Email</p>
                    <a href="mailto:you@example.com" className="link link-primary text-sm">hafizismail298@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-neutral/80">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm">Phone</p>
                    <a href="tel:+10000000000" className="link link-primary text-sm">+923203424298</a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-neutral/80">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm">Location</p>
                    <p className="text-sm">Faisalabad, Pakistan</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <p className="text-sm text-neutral/80">Prefer email? Click below to open your mail client with a prefilled subject.</p>
                <a
                  href="mailto:hafizismail298@gmail.com?subject=Hi%20there!"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-focus transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  Email Me
                </a>
              </div>
            </motion.div>

            {/* Contact Form (non-functional placeholder) */}
            <motion.form
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-base-100 rounded-2xl p-8 shadow-xl border border-base-300"
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl font-semibold text-neutral mb-6">Send a Message</h3>
              {isSent && (
                <div className="alert alert-success mb-6">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {error && (
                <div className="alert alert-error mb-6">
                  <XCircle className="w-5 h-5" />
                  <span>{error}</span>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">Name</span></label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    className="input input-bordered" 
                    required 
                    disabled={isSending}
                  />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text">Email</span></label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com" 
                    className="input input-bordered" 
                    required 
                    disabled={isSending}
                  />
                </div>
              </div>
              <div className="form-control mt-4">
                <label className="label"><span className="label-text">Subject</span></label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  className="input input-bordered" 
                  disabled={isSending}
                />
              </div>
              <div className="form-control mt-4">
                <label className="label"><span className="label-text">Message</span></label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..." 
                  className="textarea textarea-bordered h-32" 
                  required 
                  disabled={isSending}
                />
              </div>
              <div className="mt-6">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="ml-2">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span className="ml-2">Send</span>
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
