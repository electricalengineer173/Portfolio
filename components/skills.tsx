"use client"

import { motion } from "framer-motion"

const Skills = () => {
  const skillCategories = [
    {
      name: "Backend Development",
      skills: [
        { name: "Python", level: 90 },
        { name: "FastAPI", level: 80 },
        { name: "Django", level: 70 },
        { name: "Node.js", level: 60 },
      ],
    },
    {
      name: "Database Management & Processing",
      skills: [
        { name: "Neon/SQL/PostgreSQL/MongoDB", level: 85 },
        { name: "PySpark", level: 85 },
        { name: "Hadoop", level: 80 },
        { name: "ETL Pipelines", level: 75 },
        { name: "Data Analysis", level: 90 },
      ],
    },
    {
      name: "Frontend & DevOps ",
      skills: [
        { name: "Next.js", level: 70 },
        { name: "HTML/CSS", level: 70 },
        { name: "JavaScript", level: 70 },
        { name: "AWS/Docker/Vercel/Git", level: 70 },
        { name: "Wordpress Developer", level: 70 },
      ],
    },
    // {
    //   name: "DevOps & Cloud",
    //   skills: [
    //     { name: "AWS", level: 70 },
    //     { name: "Docker", level: 65 },
    //     { name: "Vercel", level: 80 },
    //     { name: "CI/CD", level: 65 },
    //   ],
    // },
    // {
    //   name: "Data Processing",
    //   skills: [
    //     { name: "PySpark", level: 85 },
    //     { name: "Hadoop", level: 80 },
    //     { name: "ETL Pipelines", level: 75 },
    //     { name: "Data Analysis", level: 90 },
    //   ],
    // },
    // {
    //   name: "Machine Learning",
    //   skills: [
    //     { name: "Deep Learning", level: 70 },
    //     { name: "Computer Vision", level: 65 },
    //     { name: "NLP", level: 60 },
    //     { name: "TensorFlow/PyTorch", level: 70 },
    //   ],
    // },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">
          Skills{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
