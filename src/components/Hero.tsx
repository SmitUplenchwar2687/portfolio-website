import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 -z-10" />
      
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Hello,  I'm Smit Uplenchwar
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Full Stack Developer & Tech Enthusiast
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {[
              { Icon: Github, href: 'https://github.com/SmitUplenchwar2687', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/smit-uplenchwar-41b473219/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:smituplenchwar02@gmail.com', label: 'Contact' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6 text-gray-700" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#about"
            className="inline-block animate-bounce"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}