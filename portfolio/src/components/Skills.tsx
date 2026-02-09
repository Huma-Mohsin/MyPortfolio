"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Brain, Wrench, Users } from "lucide-react";
import { portfolioData } from "@/lib/data";

const skillCategories = [
  { key: "frontend", title: "Frontend", icon: Code, color: "from-blue-500 to-cyan-500" },
  { key: "backend", title: "Backend", icon: Server, color: "from-green-500 to-emerald-500" },
  { key: "database", title: "Database", icon: Database, color: "from-purple-500 to-violet-500" },
  { key: "ai", title: "AI & Automation", icon: Brain, color: "from-pink-500 to-rose-500" },
  { key: "tools", title: "Tools", icon: Wrench, color: "from-orange-500 to-amber-500" },
  { key: "soft", title: "Soft Skills", icon: Users, color: "from-teal-500 to-cyan-500" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const skills = portfolioData.skills[category.key as keyof typeof portfolioData.skills];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="px-3 py-1.5 bg-white/10 text-white/90 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
