import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import LoadingAnimation from './components/LoadingAnimation'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  // Loading state management
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading time for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-base-100 text-base-content font-['Inter',sans-serif]">
        {/* Loading Animation */}
        {isLoading ? (
          <LoadingAnimation isLoading={isLoading} />
        ) : (
          <>
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="relative">
              {/* Hero Section */}
              <Hero />

              {/* About Section */}
              <About />

              {/* Skills Section */}
              <Skills />

              {/* Projects Section */}
              <Projects />

              {/* Experience Section - Currently showing placeholder */}
              <Experience />

              {/* A little Separator line as testimonials are commented out for now*/}
              <div className='h-[1px] bg-gray-700'></div>

              {/* Testimonials Section */}
              {/* <Testimonials /> */}

              {/* Contact Section */}
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Scroll to Top Button */}
            <ScrollToTop />
          </>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
