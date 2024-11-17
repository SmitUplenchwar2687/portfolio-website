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
            I'm a passionate full-stack developer with expertise in building scalable web applications.
            My focus is on creating efficient, maintainable code and delivering exceptional user experiences.
            I thrive in collaborative environments and enjoy tackling complex technical challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}