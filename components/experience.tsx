"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, Calendar, Cpu } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      period: "01/10/2024 - Current",
      location: "Part Time, Pakistan",
      description: [
        "Developed and deployed several simple, responsive websites for local businesses and personal portfolio using modern front-end framework Next.js.",
        "Created reusable components and optimized images, fonts, and layouts for fast load times.",
        "Integrated contact forms, email automation, and Google Maps for better user engagement.",
        "Designed and developed a full-stack web application for a German client focused on Manhour Reduction based on Industrial Complex Workflow. The backend was built with Stack of FastAPI and Neon Database, while the frontend was developed using Next.js.",
        "Deployed the application on Vercel (frontend) and Render/AWS (backend), ensuring a seamless and efficient live experience.",
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: "Research ~ Innovation & Development",
      company: "Zong CMPAK",
      period: "01/01/2023 - Current",
      location: "Islamabad, Pakistan",
      description: [
        "Developed and implemented In-House Platform for Engineering Department using Python Frameworks PyQT/teradata/Fastapi for productivity enhancement.",
        "KPI Reporting & Monitoring: Ensured Zong's SLA thresholds were met by analyzing key performance indicators and conducting network audits using automated solutions.",
        "Leveraged PySpark to process and analyze millions of customer transactions to uncover key purchasing patterns and trends.",
        "Worked with Hadoop/PySpark to process terabytes of network logs, analyzing signal strength, bandwidth usage, and dropped calls.",
        "Built Excel in-house dashboard for Team to monitor daily network performance across various regions.",
        "End-to-End Digital Technologies Intelligent Capacity and Management Planning Platform: On Single Click, providing detailed analysis and recommendations.",
        'Recognition: Awarded "Champ of the Month" 4 times over 2 Years for outstanding contributions.',
      ],
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Machine Learning Engineer (Hybrid)",
      company: "Lyceumerce",
      period: "01/05/2022 - 01/01/2023",
      location: "Pakistan",
      description: [
        "Designed an AI-powered vehicle tracking system using YOLOv5 for real-time vehicle detection and theft prevention.",
        "Integrated license plate recognition (OCR-based) to identify unauthorized vehicles.",
        "Contributed to the creation of document classification models using sophisticated deep learning architectures such as CNNs and LSTMs.",
        "Leveraged AWS's foundational services such as Amazon SageMaker, AWS Lambda, and Amazon S3 to build scalable and reliable NLP solutions.",
      ],
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: "WordPress Intern",
      company: "Institute Arqam",
      period: "1/06/2020 - 31/08/2020",
      location: "Faisalabad, Pakistan",
      description: [
        "Assisted in the development and customization of WordPress themes and plugins under the guidance of senior developers.",
        "Gained hands-on experience in HTML, CSS, PHP, and JavaScript for building responsive and dynamic websites.",
        "Contributed to the successful delivery of 2+ client websites during the internship.",
      ],
      icon: <Calendar className="w-6 h-6" />,
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Research {" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              & Innovation
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500 hidden md:block"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row mb-12 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-slate-800 border-4 border-cyan-500 z-10 flex items-center justify-center hidden md:flex">
                {exp.icon}
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-2 bg-slate-700 rounded-full md:hidden">{exp.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-cyan-400">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="text-gray-300 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty div for layout */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
