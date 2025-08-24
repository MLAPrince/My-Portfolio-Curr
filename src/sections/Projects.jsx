

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Calendar, Code } from 'lucide-react'
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiRedis, 
  SiJavascript, SiPython, SiTailwindcss, SiBootstrap,
  SiHtml5, SiCss3, SiNetflix, SiSpotify
} from 'react-icons/si'
import MERNPass1 from '../assets/MERN Pass 1.jpg'
import MERNPass2 from '../assets/MERN Pass 2.jpg'
import NoteApp1 from '../assets/Note App 1.jpg'
import NoteApp2 from '../assets/Note App 2.jpg'
import NoteApp3 from '../assets/Note App 3.jpg'
import TodoApp from '../assets/Todo App.jpg'
import SpotifyClone from '../assets/Spotify Clone.jpg'


const Projects = () => {
  // Individual intersection observers for sequential loading
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [noteRef, noteInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Projects data with details and tech stacks
  const projects = [
    {
      id: 1,
      title: "MLA Pass - Password Manager",
      description: "A secure and user-friendly password manager built with the MERN stack. Features include encrypted password storage, secure authentication, and intuitive dashboard for managing credentials.",
      image: MERNPass1,
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
      githubUrl: "https://github.com/MLAPrince/Password-Manager-using-MERN_stack.git",
      liveUrl: "", // Placeholder for future deployment
      status: "Completed",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "My Notes - Note Taking App",
      description: "A modern note-taking application with real-time synchronization. Built with MERN stack and Redis for caching, featuring rich text editing and collaborative features.",
      image: NoteApp1,
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
      ],
      githubUrl: "https://github.com/MLAPrince/Note-Taking-App-using-MERN.git",
      liveUrl: "",
      status: "Completed",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Todo App",
      description: "A clean and efficient todo application with drag-and-drop functionality and local storage. Built with React and Tailwind CSS.",
      image: TodoApp,
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      ],
      githubUrl: "https://github.com/MLAPrince/ToDo-App-Using-React.git",
      liveUrl: "",
      status: "Completed",
      category: "Frontend"
    },
    // {
    //   id: 4,
    //   title: "Dragon Real Estate Regressor",
    //   description: "A machine learning project for predicting real estate prices using advanced regression algorithms. Built with Python, featuring data visualization and model performance analysis.",
    //   image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=ML+Project", // Placeholder image
    //   techStack: [
    //     { name: "Python", icon: <SiPython />, color: "#3776AB" },
    //     { name: "Machine Learning", icon: "🤖", color: "#FF6B6B" },
    //     { name: "Data Science", icon: "📊", color: "#4ECDC4" },
    //   ],
    //   githubUrl: "https://github.com/MLAPrince",
    //   liveUrl: "",
    //   status: "Completed",
    //   category: "Machine Learning"
    // },
    // {
    //   id: 5,
    //   title: "Netflix Landing Page Clone",
    //   description: "A pixel-perfect recreation of Netflix's landing page with responsive design. Features smooth animations, modern UI components, and mobile-first approach.",
    //   image: "https://via.placeholder.com/400x250/e50914/ffffff?text=Netflix+Clone", // Placeholder image
    //   techStack: [
    //     { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    //     { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    //     { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    //     { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    //   ],
    //   githubUrl: "https://github.com/MLAPrince",
    //   liveUrl: "",
    //   status: "Completed",
    //   category: "Frontend"
    // },
    {
      id: 6,
      title: "Spotify Clone",
      description: "A responsive Spotify clone with music playback, playlists, and user authentication. Built with React and the Spotify Web API.",
      image: SpotifyClone,
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      ],
      githubUrl: "https://github.com/MLAPrince/Spotify-Clone.git",
      liveUrl: "https://mla-spotify-clone.netlify.app/",
      status: "Completed",
      category: "Frontend"
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20 bg-base-100">
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
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in web development, 
              machine learning, and problem-solving
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            ref={gridRef}
            initial={{ opacity: 0, y: 40 }}
            animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0 + index * 0.1, ease: "easeOut" }}
                className="group"
                whileHover={{ y: -10 }}
              >
                <div className="bg-base-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-300 border border-base-300 hover:border-primary/30 relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-primary/5 before:via-secondary/5 before:to-accent/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status Badge */}
                    {/* <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                        {project.status}
                      </span>
                    </div> */}

                    {/* Category Badge */}
                    {/* <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div> */}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-neutral mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral/70 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          className="flex items-center space-x-1 px-3 py-1 bg-base-300 rounded-full text-xs font-medium text-neutral/80 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        >
                          <span style={{ color: tech.color }}>
                            {typeof tech.icon === 'string' ? tech.icon : tech.icon}
                          </span>
                          <span>{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-neutral text-white rounded-lg hover:bg-neutral/80 transition-colors duration-200 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>

                      <motion.button
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: project.liveUrl ? 1.05 : 1 }}
                        whileTap={{ scale: project.liveUrl ? 0.95 : 1 }}
                        disabled={!project.liveUrl}
                        title={!project.liveUrl ? "Live demo coming soon" : "View live demo"}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Note */}
          <motion.div
            ref={noteRef}
            initial={{ opacity: 0, y: 40 }}
            animate={noteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-semibold text-neutral mb-4">
                🚧 More Projects Coming Soon
              </h3>
              <p className="text-neutral/70 max-w-2xl mx-auto">
                I'm constantly working on new projects and improving existing ones. 
                Some projects mentioned (like Java Swing applications) were unfortunately lost, 
                but I'm rebuilding and creating even better versions. Stay tuned for live demos!
              </p>
              
              <motion.a
                href="https://github.com/MLAPrince"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-focus transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>View All Projects on GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects














































// ---- Project cards with mulitple images with sliding animation but broken -----

// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { Github, ExternalLink, Calendar, Code } from 'lucide-react'
// import { 
//   SiReact, SiNodedotjs, SiMongodb, SiExpress, SiRedis, 
//   SiJavascript, SiPython, SiTailwindcss, SiBootstrap,
//   SiHtml5, SiCss3, SiNetflix, SiSpotify
// } from 'react-icons/si'
// import ImageCarousel from '../components/ImageCarousel';
// import MERNPass1 from '../assets/MERN Pass 1.jpg'
// import MERNPass2 from '../assets/MERN Pass 2.jpg'
// import NoteApp1 from '../assets/Note App 1.jpg'
// import NoteApp2 from '../assets/Note App 2.jpg'
// import NoteApp3 from '../assets/Note App 3.jpg'
// import TodoApp from '../assets/Todo App.jpg'
// import SpotifyClone from '../assets/Spotify Clone.jpg'


// const Projects = () => {
//   // Individual intersection observers for sequential loading
//   const [titleRef, titleInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })
  
//   const [gridRef, gridInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })
  
//   const [noteRef, noteInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   // Projects data with details and tech stacks
//   const projects = [
//     {
//       id: 1,
//       title: "MLA Pass - Password Manager",
//       description: "A secure and user-friendly password manager built with the MERN stack. Features include encrypted password storage, secure authentication, and intuitive dashboard for managing credentials.",
//       images: [MERNPass1, MERNPass2],
//       techStack: [
//         { name: "React", icon: <SiReact />, color: "#61DAFB" },
//         { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
//         { name: "Express", icon: <SiExpress />, color: "#000000" },
//         { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
//       ],
//       githubUrl: "https://github.com/MLAPrince",
//       liveUrl: "", // Placeholder for future deployment
//       status: "Completed",
//       category: "Full Stack"
//     },
//     {
//       id: 2,
//       title: "My Notes - Note Taking App",
//       description: "A modern note-taking application with real-time synchronization. Built with MERN stack and Redis for caching, featuring rich text editing and collaborative features.",
//       images: [NoteApp1, NoteApp2, NoteApp3],
//       techStack: [
//         { name: "React", icon: <SiReact />, color: "#61DAFB" },
//         { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
//         { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
//         { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
//       ],
//       githubUrl: "https://github.com/MLAPrince",
//       liveUrl: "",
//       status: "Completed",
//       category: "Full Stack"
//     },
//     {
//       id: 3,
//       title: "Todo App",
//       description: "A clean and efficient todo application with drag-and-drop functionality and local storage. Built with React and Tailwind CSS.",
//       image: TodoApp,
//       techStack: [
//         { name: "React", icon: <SiReact />, color: "#61DAFB" },
//         { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
//         { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
//       ],
//       githubUrl: "https://github.com/MLAPrince",
//       liveUrl: "",
//       status: "Completed",
//       category: "Frontend"
//     },
//     // {
//     //   id: 4,
//     //   title: "Dragon Real Estate Regressor",
//     //   description: "A machine learning project for predicting real estate prices using advanced regression algorithms. Built with Python, featuring data visualization and model performance analysis.",
//     //   image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=ML+Project", // Placeholder image
//     //   techStack: [
//     //     { name: "Python", icon: <SiPython />, color: "#3776AB" },
//     //     { name: "Machine Learning", icon: "🤖", color: "#FF6B6B" },
//     //     { name: "Data Science", icon: "📊", color: "#4ECDC4" },
//     //   ],
//     //   githubUrl: "https://github.com/MLAPrince",
//     //   liveUrl: "",
//     //   status: "Completed",
//     //   category: "Machine Learning"
//     // },
//     // {
//     //   id: 5,
//     //   title: "Netflix Landing Page Clone",
//     //   description: "A pixel-perfect recreation of Netflix's landing page with responsive design. Features smooth animations, modern UI components, and mobile-first approach.",
//     //   image: "https://via.placeholder.com/400x250/e50914/ffffff?text=Netflix+Clone", // Placeholder image
//     //   techStack: [
//     //     { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
//     //     { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
//     //     { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
//     //     { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
//     //   ],
//     //   githubUrl: "https://github.com/MLAPrince",
//     //   liveUrl: "",
//     //   status: "Completed",
//     //   category: "Frontend"
//     // },
//     {
//       id: 6,
//       title: "Spotify Clone",
//       description: "A responsive Spotify clone with music playback, playlists, and user authentication. Built with React and the Spotify Web API.",
//       image: SpotifyClone,
//       techStack: [
//         { name: "React", icon: <SiReact />, color: "#61DAFB" },
//         { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
//         { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
//       ],
//       githubUrl: "https://github.com/MLAPrince",
//       liveUrl: "",
//       status: "Completed",
//       category: "Frontend"
//     }
//   ]

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   }

//   return (
//     <section id="projects" className="py-20 bg-base-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div>
//           {/* Section Header */}
//           <motion.div 
//             ref={titleRef}
//             initial={{ opacity: 0, y: 50 }}
//             animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-4">
//               My <span className="text-primary">Projects</span>
//             </h2>
//             <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
//               Here are some of the projects I've worked on, showcasing my skills in web development, 
//               machine learning, and problem-solving
//             </p>
//           </motion.div>

//           {/* Projects Grid */}
//           <motion.div 
//             ref={gridRef}
//             initial={{ opacity: 0, y: 40 }}
//             animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//             transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                 animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
//                 transition={{ duration: 0.4, delay: 0 + index * 0.1, ease: "easeOut" }}
//                 className="group"
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="bg-base-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-300 border border-base-300 hover:border-primary/30 relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-primary/5 before:via-secondary/5 before:to-accent/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none">
//                   {/* Project Image */}
//                   <div className="relative h-64 overflow-hidden rounded-t-lg bg-gray-900">
//                     {project.images ? (
//                       <ImageCarousel images={project.images} />
//                     ) : project.image ? (
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
//                         <span className="text-gray-500">No preview available</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Category Badge */}
//                   {/* <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
//                       {project.category}
//                     </span>
//                   </div> */}

//                   {/* Project Content */}
//                   <div className="p-6">
//                     {/* Title */}
//                     <h3 className="text-xl font-bold text-neutral mb-3 group-hover:text-primary transition-colors duration-300">
//                       {project.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-neutral/70 text-sm mb-4 leading-relaxed">
//                       {project.description}
//                     </p>

//                     {/* Tech Stack */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.techStack.map((tech, techIndex) => (
//                         <motion.div
//                           key={tech.name}
//                           className="flex items-center space-x-1 px-3 py-1 bg-base-300 rounded-full text-xs font-medium text-neutral/80 hover:bg-primary/10 hover:text-primary transition-all duration-200"
//                           whileHover={{ scale: 1.05 }}
//                           initial={{ opacity: 0, scale: 0 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: index * 0.1 + techIndex * 0.05 }}
//                         >
//                           <span style={{ color: tech.color }}>
//                             {typeof tech.icon === 'string' ? tech.icon : tech.icon}
//                           </span>
//                           <span>{tech.name}</span>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex space-x-3">
//                       <motion.a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center space-x-2 px-4 py-2 bg-neutral text-white rounded-lg hover:bg-neutral/80 transition-colors duration-200 text-sm font-medium"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <Github className="w-4 h-4" />
//                         <span>Code</span>
//                       </motion.a>

//                       <motion.button
//                         className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
//                         whileHover={{ scale: project.liveUrl ? 1.05 : 1 }}
//                         whileTap={{ scale: project.liveUrl ? 0.95 : 1 }}
//                         disabled={!project.liveUrl}
//                         title={!project.liveUrl ? "Live demo coming soon" : "View live demo"}
//                       >
//                         <ExternalLink className="w-4 h-4" />
//                         <span>Live Demo</span>
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Additional Note */}
//           <motion.div
//             ref={noteRef}
//             initial={{ opacity: 0, y: 40 }}
//             animate={noteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//             className="mt-16 text-center"
//           >
//             <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
//               <h3 className="text-xl font-semibold text-neutral mb-4">
//                 🚧 More Projects Coming Soon
//               </h3>
//               <p className="text-neutral/70 max-w-2xl mx-auto">
//                 I'm constantly working on new projects and improving existing ones. 
//                 Some projects mentioned (like Java Swing applications) were unfortunately lost, 
//                 but I'm rebuilding and creating even better versions. Stay tuned for live demos!
//               </p>
              
//               <motion.a
//                 href="https://github.com/MLAPrince"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-focus transition-colors duration-200 font-medium"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Github className="w-5 h-5" />
//                 <span>View All Projects on GitHub</span>
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Projects







