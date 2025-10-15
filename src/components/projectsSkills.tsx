import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  type: 'Featured' | 'Personal' | 'Open Source';
}

const ProjectsSkills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Languages',
      items: ['TypeScript', 'Python', 'Go', 'C++', 'SQL']
    },
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'WebGL']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'gRPC', 'GraphQL', 'PostgreSQL', 'Redis']
    },
    {
      category: 'DevOps & Cloud',
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    }
  ];

  const projects: Project[] = [
    {
      title: 'StyleGAN Image Generation',
      description: 'GAN implementation for musical motif spectrogram generation. This project was done as a senior capstone project in my undergrad studies.',
      technologies: ['Python', 'PyTorch', 'CUDA'],
      github: 'https://github.com/TylerWeir/motifgan',
      type: 'Featured'
    },
    {
      title: 'GRPC Task Scheduler',
      description: 'Distributed task scheduling system. This project was created as part of a personal exploration into distributed systems.',
      technologies: ['Go', 'gRPC', 'Protocol Buffers', 'Redis', 'Kubernetes'],
      github: 'https://github.com/VeroDomenico/GRPCTaskScheduler',
      type: 'Featured'
    },
    {
      title: 'Stable Algorithms Library',
      description: 'An algorithm game made for children to learn about math. This project was done as part of a group exercise with the goal of, beyond making a functional game, taking turns leading daily SCRUM meetings and getting familiar with agile methodology. ',
      technologies: ['Java', 'SQL'],
      github: 'https://github.com/bretabel/cool-Math-Game',
      type: 'Open Source'
    },
    {
      title: 'Game Development Portfolio',
      description: 'Multiplayer card game under development.',
      technologies: ['Unity', 'C#', 'GoLang', 'React', 'Node.js', 'PostgreSQL', 'Supabase'],

      type: 'Personal'
    },
    {
      title: 'One Imprint Web Platform',
      description: 'Architecture for a web platform for a printing company. Now defunct.',
      technologies: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'AWS'],
      link: 'https://www.oneimprint.com',
      type: 'Featured'
    }
  ];

  return (
    <section className="background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="text-secondary-light dark:text-secondary-dark max-w-2xl">
            A collection of software projects showcasing my expertise in distributed systems, 
            machine learning, and full-stack development. Each project demonstrates clean architecture, 
            scalability, and best practices.
          </p>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-mono mb-8 text-text-light dark:text-text-dark">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-surface-light dark:bg-surface-dark rounded-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-6 right-6">
                  <span className={`
                    px-3 py-1 text-xs rounded-full font-mono
                    ${project.type === 'Featured' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : ''}
                    ${project.type === 'Personal' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100' : ''}
                    ${project.type === 'Open Source' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100' : ''}
                  `}>
                    {project.type}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-mono text-text-light dark:text-text-dark mb-4 pr-24">
                    {project.title}
                  </h3>
                  <p className="text-secondary-light dark:text-secondary-dark">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-background-light dark:bg-background-dark text-secondary-light dark:text-secondary-dark rounded-md border border-accent-light/10 dark:border-accent-dark/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent-light dark:text-accent-dark hover:text-hover-light dark:hover:text-hover-dark text-sm group-hover:translate-x-1 transition-transform"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent-light dark:text-accent-dark hover:text-hover-light dark:hover:text-hover-dark text-sm group-hover:translate-x-1 transition-transform"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkills;
