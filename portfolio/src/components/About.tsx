"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Passionate Developer & Problem Solver
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-50 to-rose-50 p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Professional Summary</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{portfolioData.summary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-rose-50 to-slate-50 p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Target className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Objective</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{portfolioData.objective}</p>
          </motion.div>
        </div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {portfolioData.strengths.map((strength, index) => (
            <motion.div
              key={strength}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="p-4 bg-white border border-gray-100 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-gray-700">{strength}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
