"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, MapPin, Mail, Send } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-rose-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <motion.a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-colors"
                >
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <p className="text-sm text-gray-500">Connect with me</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-rose-50 to-transparent rounded-xl">
                  <div className="p-3 bg-secondary rounded-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-500">{portfolioData.personal.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-transparent rounded-xl">
                  <div className="p-3 bg-purple-500 rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Available for</p>
                    <p className="text-sm text-gray-500">Full-time, Remote, Contract</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="p-6 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white"
            >
              <h4 className="font-bold mb-2">References</h4>
              <p className="text-white/80 text-sm">Available upon request</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
