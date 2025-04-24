"use client"

import { motion } from "framer-motion"
import { Database, Server, Code, Cpu } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4">
            About{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Backend-Focused Developer with Full-Stack Capabilities
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a backend-focused developer with a strong foundation in FastAPI/Django and database management
              (PostgreSQL, Neon, MongoDB). I have experience building scalable APIs and backend systems that support
              engineering complex workflows.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I have also exposure of AWS for database management and EC2 instances. While my main strength is on the
              server side, I also have experience with Next.js for full-stack development. I'm passionate about
              research, innovation, and creating efficient, real-world solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors group">
              <Server className="w-10 h-10 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
              <h4 className="text-xl font-semibold text-white mb-2">Backend Development</h4>
              <p className="text-gray-400">Building robust APIs and server-side applications with FastAPI and Django</p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors group">
              <Database className="w-10 h-10 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
              <h4 className="text-xl font-semibold text-white mb-2">Database Management</h4>
              <p className="text-gray-400">Expertise in Neon, Microsoft Access Database, PostgreSQL,MongoDB, and S3 Bucket services</p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 hover:border-pink-500/50 transition-colors group">
              <Code className="w-10 h-10 text-pink-400 mb-4 group-hover:text-pink-300 transition-colors" />
              <h4 className="text-xl font-semibold text-white mb-2">Full-Stack Development</h4>
              <p className="text-gray-400">
                Creating end-to-end Automated solutions with Stack python Frameworks
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-700 hover:border-teal-500/50 transition-colors group">
              <Cpu className="w-10 h-10 text-teal-400 mb-4 group-hover:text-teal-300 transition-colors" />
              <h4 className="text-xl font-semibold text-white mb-2">Research & Innovation</h4>
              <p className="text-gray-400">
                Passionate about exploring new technologies and creating efficient solutions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
