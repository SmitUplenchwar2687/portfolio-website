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
          As a software engineer with over 2 years of experience working on large-scale and distributed
          systems, I have a strong foundation in designing, developing and deploying complex software 
          applications that can handle high traffic and large datasets. I am passionate about solving 
          complex problems and creating innovative solutions that improve efficiency and scalability.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
          I am skilled in a range of programming languages and technologies, including Python, Java, 
          Kotlin, Typescript, React, Angular, Node and AWS. I have a deep understanding of how to build 
          and optimize systems that can handle heavy workloads. In my previous roles, I have collaborated 
          with cross-functional teams to deliver high-quality software products.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
          I am constantly learning and staying up-to-date with the latest technologies and industry trends 
          to ensure that I can provide the best possible solutions to clients. I am also committed to 
          continuously improving my skills and knowledge to remain a top-performing software engineer.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
          Please feel free to reach out to me to discuss potential opportunities or to learn more about my 
          experience and skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}