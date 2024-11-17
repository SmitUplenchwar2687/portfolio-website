import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
      links: { demo: '#', github: '#' },
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform for business metrics',
      tags: ['Next.js', 'D3.js', 'PostgreSQL'],
      links: { demo: '#', github: '#' },
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates',
      tags: ['React', 'GraphQL', 'TypeScript'],
      links: { demo: '#', github: '#' },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, tags, links }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={links.demo}
                  className="p-2 hover:text-purple-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={links.github}
                  className="p-2 hover:text-purple-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}