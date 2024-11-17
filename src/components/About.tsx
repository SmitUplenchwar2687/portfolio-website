import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate Full Stack Developer with over 2 years of experience in building and deploying full stack applications. 
            I specialize in Python, React, Node.js, AWS and cloud technologies, with a strong focus on creating scalable and user-friendly solutions. 
            Currently pursuing MS in CSE from University at Buffalo.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source 
          projects, or writing my blog.
          </p>
        </motion.div>
      </div>
    </section>
  );
}