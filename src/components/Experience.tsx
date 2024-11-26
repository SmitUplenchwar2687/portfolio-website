import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'o9 Solutions',
      position: 'Software Development Engineer II',
      period: '02/2024 - 07/2024',
      description: [
        'Collaborated with 12 developers to build and maintain proprietary software, leveraging Python, React, AWS, Kubernetes and Docker to build APIs supporting over concurrent supply chain planning of 500+ companies across the globe.',
        'Led development of a Forecast Generation Engine for Demand Planning which is used by 300+ clients all across the globe.',
        'Optimized the supply planning solver using advanced linear programming and heuristic algorithms, achieving a 93% increase in processing efficiency and significantly enhancing planning accuracy and resource utilization.',
        'Constructed efficient real-time data workflows using SSIS and IBPL that processed over 1 million transaction records daily, streamlining reporting processes which allowed teams to respond faster to changing market demands.'
      ]
    },
    {
      company: 'o9 Solutions',
      position: 'Software Development Engineer',
      period: '02/2022 - 02/2024',
      description: [
        'Created Forecasting Algorithm Plugins for demand planning, enhancing prediction accuracy by 70% for various industries.',
        'Created ETL pipelines to process and transform large datasets on AWS, optimizing data ingestion by 33% for forecasting and supply chain analytics.',
        'Resolved over 200+ bugs on a real-time system supporting 500+ clients, improving system reliability and performance.'
      ]
    },
    {
      company: 'Tegasys Solutions',
      position: 'Software Engineering Intern',
      period: '06/2021 - 11/2021',
      description: [
        'Developed cross-platform mobile applications using Kotlin for Android and Swift for iOS, streamlining business operations and improving user experience.',
        'Automated business relationship management tasks, enhancing reliability and service delivery by integrating mobile app notifications and scheduling features.',
        'Collaborated with a team of 5 developers to ensure the seamless deployment of mobile apps, reducing deployment time by 30% by adhering to Agile methodologies.'
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