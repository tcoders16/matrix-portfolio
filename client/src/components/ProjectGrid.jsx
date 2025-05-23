// components/ProjectGrid.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../projectdata/projects';

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-10 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}