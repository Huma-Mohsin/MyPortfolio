"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-slate-900 to-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Key Accomplishments
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shrink-0">
                  {index === 0 ? (
                    <Trophy size={20} className="text-white" />
                  ) : (
                    <Star size={20} className="text-white" />
                  )}
                </div>
                <p className="text-white/90 leading-relaxed">{achievement}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects Deployed", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "AI Integrations", value: "5+" },
            { label: "Frameworks", value: "8+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
