"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  const handleDemoClick = (url: string) => {
    const isYouTubeOrVimeo =
      url.includes("youtube.com") || url.includes("vimeo.com")
    const isVideoFile = url.endsWith(".mp4") || url.endsWith(".webm")

    if (isYouTubeOrVimeo || isVideoFile) {
      setVideoUrl(url)
      setShowVideo(true)
    } else {
      window.open(url, "_blank")
    }
  }

  const projects = [
    {
      title: "Network Automated Optimization Intelligent Platform",
      description:
        "End-to-End Digital Technologies Intelligent Capacity and Management Planning Platform.Revolutionize decision-making in 4G High Utilized Cells.Provide decisive insights for determining if a solution is necessary and, if so, recommend the optimal solution.",
      image: "/planing.png",
      tags: ["FastAPI", "Microsoft Access Database", "React"],
      github: "#",
      demo: "/videos/network-automated-optimization-inteligent-platform.mp4",
    },
    {
      title: "Industrial Automated Solution",
      description: "Engineered a web app that performs precise thermodynamic calculations. It enables fast, expert-free case analysis, reducing manual effort and improving accessibility.",
      image: "/gas.png",
      tags: ["FastAPI", "Next.js", "PostgreSQL"],
      github: "#",
      demo: "https://gas-dynamix.vercel.app/", // will open in new tab
    },
    {
      title: "Engineering E2E Database Management",
      description:
        "E2E RAN Engineering Data Access on single click for Entire Nationwide Departments with the focuse of automation",
      image: "/ran.png?height=300&width=500",
      tags: ["Django", "AWS-S3", "Docker"],
      github: "#",
      demo: "/videos/engineering-e2E-database-management.mp4",
    },

    {
      title: "Find Your Perfect Tutor Today",
      description: "Connect with expert tutors in any subject. Get personalized help, improve your grades, and achieve your academic goals.",
      image: "/tutor.png",
      tags: ["Nextjs", "Neon","Git","vercel"],
      github: "#",
      demo: "https://kzmgom4stdvzcpf9burb.lite.vusercontent.net/", // opens in modal
    },
    {
      title: "Vehicle Tracking System",
      description: "AI-powered vehicle tracking using YOLOv5.",
      image: "/placeholder.svg",
      tags: ["Python", "YOLOv5", "OCR"],
      github: "#",
      demo: "https://youtube.com/embed/video_id", // opens in modal
    },
        {
      title: "Network Analytics Dashboard",
      description:
        "Excel in-house dashboard for monitoring daily network performance across various regions, ensuring improved service quality.Data Processing using Data Science Libraries",
      image: "/excel.png?height=300&width=500",
      tags: ["Python-Pandas","Numpy", "Excel", "Analytics", "Power BI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Document Classification System",
      description:
        "AI-powered document classification system using deep learning architectures like CNNs and LSTMs for automatic categorization.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "TensorFlow", "NLP", "AWS"],
      github: "#",
      demo: "#",
    },

  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/70 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-slate-900/80 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white"
                      onClick={() => handleDemoClick(project.demo)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-slate-700 text-cyan-400 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    <span>Repository</span>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handleDemoClick(project.demo)
                    }}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && videoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative bg-black p-4 max-w-4xl w-full rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setShowVideo(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-video w-full">
              {videoUrl.endsWith(".mp4") || videoUrl.endsWith(".webm") ? (
                <video controls className="w-full h-full rounded-lg" autoPlay>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={videoUrl}
                  title="Demo Video"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects


// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Github, ExternalLink } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const Projects = () => {
//   const [showVideo, setShowVideo] = useState(false)
//   const [currentVideo, setCurrentVideo] = useState<string | null>(null)

//   const projects = [
//     {
//       title: "Network Automated Optimization Inteligent Platform",
//       description:
//         "End-to-End Digital Technologies Intelligent Capacity and Management Planning Platform providing detailed analysis and recommendations for network optimization.",
//       image: "/Capacity.png?height=300&width=500",
//       tags: ["FastAPI", "Microsoft Access Database", "React"],
//       github: "#",
//       demo: "#",
//     },
//     {
//       title: "Industrial Automated Solution",
//       description:
//         "Full-stack web application for a German client focused on Manhour Reduction based on Industrial Complex Workflow.",
//       image: "/gas.png?height=300&width=500",
//       tags: ["FastAPI", "Next.js", "PostgreSQL", "Vercel", "AWS"],
//       github: "#",
//       demo: "#",
//     },
//     {
//       title: "Vehicle Tracking System",
//       description:
//         "AI-powered vehicle tracking system using YOLOv5 for real-time vehicle detection and theft prevention with license plate recognition.",
//       image: "/placeholder.svg?height=300&width=500",
//       tags: ["Python", "YOLOv5", "OpenCV", "Deep Learning", "OCR"],
//       github: "#",
//       demo: "#",
//     },
//     {
//       title: "Network Analytics Dashboard",
//       description:
//         "Excel in-house dashboard for monitoring daily network performance across various regions, ensuring improved service quality.",
//       image: "/placeholder.svg?height=300&width=500",
//       tags: ["Python", "Excel", "Analytics", "Power BI"],
//       github: "#",
//       demo: "#",
//     },
//     {
//       title: "Document Classification System",
//       description:
//         "AI-powered document classification system using deep learning architectures like CNNs and LSTMs for automatic categorization.",
//       image: "/placeholder.svg?height=300&width=500",
//       tags: ["Python", "TensorFlow", "NLP", "AWS"],
//       github: "#",
//       demo: "#",
//     },
//   ]

//   return (
//     <section id="projects" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">
//             Featured{" "}
//             <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
//               Projects
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="bg-slate-800/70 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
//                   <div className="flex space-x-3">
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       className="bg-slate-900/80 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20"
//                     >
//                       <Github className="mr-2 h-4 w-4" />
//                       Code
//                     </Button>
//                     <Button
//                       size="sm"
//                       className="bg-cyan-500 hover:bg-cyan-600 text-white"
//                       onClick={() => {
//                         const videoName = project.title.replace(/\s+/g, "-").toLowerCase()
//                         setCurrentVideo(`/videos/${videoName}.mp4`)
//                         setShowVideo(true)
//                       }}
//                     >
//                       <ExternalLink className="mr-2 h-4 w-4" />
//                       Demo
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map(
//                     (tag, tagIndex) =>
//                       tag && (
//                         <span
//                           key={tagIndex}
//                           className="text-xs px-3 py-1 rounded-full bg-slate-700 text-cyan-400 border border-cyan-500/30"
//                         >
//                           {tag}
//                         </span>
//                       )
//                   )}
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <a
//                     href={project.github}
//                     className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
//                   >
//                     <Github className="mr-1 h-4 w-4" />
//                     <span>Repository</span>
//                   </a>
//                   <a
//                     href={project.demo}
//                     className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
//                   >
//                     <ExternalLink className="mr-1 h-4 w-4" />
//                     <span>Live Demo</span>
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {showVideo && currentVideo && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//           <div className="relative w-full max-w-4xl p-4">
//             <button
//               className="absolute top-2 right-2 text-white text-xl"
//               onClick={() => {
//                 setShowVideo(false)
//                 setCurrentVideo(null)
//               }}
//             >
//               ✕
//             </button>
//             <video controls autoPlay className="w-full rounded-lg shadow-lg">
//               <source src={currentVideo} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }

// export default Projects
