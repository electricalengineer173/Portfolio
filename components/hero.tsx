"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Python Developer ~ FastAPI | Django X Next.js"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
             Mariyam Zaman
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            A backend-focused developer with expertise in building scalable APIs and database management. Passionate
            about research, innovation, and creating efficient, real-world solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
            href="/Mariyam_dev.pdf"
            download
            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 rounded-md text-center"
          >
            Download Resume
          </a>

            
          </div>

        

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10"
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
