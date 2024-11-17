import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      period: '2021 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 40%'
      ]
    },
    {
      company: 'Digital Innovations Co.',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      description: [
        'Developed and maintained multiple client-facing applications',
        'Optimized database queries improving performance by 50%',
        'Collaborated with design team to implement responsive UI/UX'
      ]
    },
    {
      company: 'StartUp Labs',
      position: 'Frontend Developer',
      period: '2018 - 2019',
      description: [
        'Built interactive web applications using React and TypeScript',
        'Implemented state management solutions with Redux',
        'Developed reusable component library used across projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map(({ company, position, period, description }, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{position}</h3>
                  <div className="flex flex-wrap gap-2 items-center mt-1 mb-3">
                    <span className="text-purple-600 font-medium">{company}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{period}</span>
                  </div>
                  <ul className="space-y-2">
                    {description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}