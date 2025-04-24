"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"

const Education = () => {
  const educationItems = [
    {
      degree: "B.SC. Engineering",
      institution: "University of Engineering & Technology Lahore",
      period: "01/10/2017 – 25/01/2022",
      location: "Lahore, Pakistan",
      website: "https://www.uet.edu.pk/home/",
      level: "EQF level 6",
    },
    {
      degree: "Artificial Intelligence & Computing",
      institution: "Presidential Initiative of Artificial Intelligence & Computing",
      period: "01/12/2019 – 31/01/2023",
      location: "Faisalabad, Pakistan",
      website: "https://www.piaic.org/",
      level: "EQF level 7",
    },

    {
      degree: "Data Science",
      institution: "Professional Freelancing Training Program",
      period: "01/01/2022 – 01/03/2022",
      location: "Lahore, Pakistan",
      website: "https://pftpedu.org/",
      level: "EQF level 6",

    },
    {
      degree: "Achievments",
      achievements: [
        "Gold Medalist – Professional Freelancing Training Program",
        "Awarded Being Woman contributor towards digital industry by participating in the project",
        "Neuro-linguistic programming: The training helped me develop a better understanding of how to influence others, and achieve personal & professional goals by applying NLP strategies.",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Education
            </span>{" "}
            & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 p-3 bg-slate-700 rounded-full">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <p className="text-cyan-400">{item.institution}</p>

                  <div className="flex flex-wrap items-center text-gray-400 mt-2 gap-y-2">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.period}</span>
                    </div>
                    <span className="mr-4">{item.location}</span>
                    <span className="mr-4">{item.level}</span>
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>

                  {item.achievements && (
                    <div className="mt-4">
                      <h4 className="text-white font-semibold flex items-center mb-2">
                        <Award className="w-4 h-4 mr-2 text-purple-400" />
                        Achievements
                      </h4>
                      <ul className="text-gray-300 space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
