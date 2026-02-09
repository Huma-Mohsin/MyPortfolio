"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Featured Work
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI-powered applications,
            full-stack development, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-slate-50 to-rose-50 p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} className="text-secondary" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded-full border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-secondary flex items-center gap-2">
                  View Live Demo <ExternalLink size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
