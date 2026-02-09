"use client";
import { motion } from "framer-motion";
import { Heart, Linkedin, ArrowUp } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{portfolioData.personal.title}</p>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-gradient-to-r from-primary to-secondary rounded-full"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-secondary fill-secondary" /> by Huma Mohsin
          </p>
          <p className="text-gray-500 text-xs mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
