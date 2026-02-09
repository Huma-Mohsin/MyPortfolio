"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Linkedin, MapPin } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-rose-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my Portfolio
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {portfolioData.personal.title}
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-gray-500 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MapPin size={18} />
              <span>{portfolioData.personal.location}</span>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium shadow-lg shadow-primary/25"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(26, 26, 46, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href={portfolioData.personal.linkedin}
                target="_blank"
                className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(26, 26, 46, 0.05)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} /> LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                <Image
                  src={portfolioData.personal.image}
                  alt={portfolioData.personal.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute top-10 right-0 px-4 py-2 bg-white rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm font-medium text-gray-700">10+ Projects</span>
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-0 px-4 py-2 bg-white rounded-lg shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-sm font-medium text-gray-700">AI & Full-Stack</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-gray-400" />
      </motion.div>
    </section>
  );
}
