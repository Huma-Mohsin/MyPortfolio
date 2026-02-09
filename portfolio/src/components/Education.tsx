"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Qualifications
            </h3>
            <div className="space-y-4">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={edu.qualification + edu.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-gradient-to-r from-slate-50 to-transparent p-4 rounded-r-xl">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-gray-900">{edu.qualification}</h4>
                      <span className="text-sm text-secondary font-medium">{edu.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{edu.major}</p>
                    <p className="text-gray-500 text-sm">{edu.institute}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="text-secondary" /> Certifications
              </h3>
              {portfolioData.certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-4 bg-gradient-to-r from-secondary/10 to-transparent rounded-xl"
                >
                  <p className="text-gray-700">{cert}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
