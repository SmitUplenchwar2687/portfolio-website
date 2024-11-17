import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Kotlin', 'Swift'] },
    { category: 'Backend', items: ['Python', 'Node.js', 'PostgreSQL', 'Go', 'Java', 'Javascript'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'RabbitMQ', 'Kubernetes', 'Apache Kafka'] },
    // { category: 'Other', items: ['UI/UX Design', 'SEO', 'Agile', 'Testing'] },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ category, items }, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}