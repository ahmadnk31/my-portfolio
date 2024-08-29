// components/Projects.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1', size: 'lg' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2', size: 'sm' },
  { id: 3, title: 'Project 3', description: 'Description for Project 3', size: 'sm' },
  { id: 4, title: 'Project 4', description: 'Description for Project 4', size: 'md' },
  { id: 5, title: 'Project 5', description: 'Description for Project 5', size: 'sm' },
  { id: 6, title: 'Project 6', description: 'Description for Project 6', size: 'sm' },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${project.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''}
                ${project.size === 'md' ? 'md:col-span-2' : ''}
              `}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;