"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Shield, Code } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Professional Journey
          </h2>
        </motion.div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl text-white shrink-0">
                    {index === 0 ? <Shield size={28} /> : <Code size={28} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-secondary font-medium mb-1">{exp.role}</p>
                    {exp.agency && (
                      <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                        <Briefcase size={14} /> {exp.agency}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
