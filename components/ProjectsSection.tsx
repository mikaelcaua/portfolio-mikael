import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "./Badge";

export interface ProjectsSectionProps {
  projects: Array<{
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
  }>;
}

const cardClass = "bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300";
const titleClass = "text-xl text-teal-600 font-bold mb-2";
const descClass = "text-gray-600 leading-relaxed mb-4";
const badgeClass = "bg-teal-100 text-teal-700";
const codeBtnClass = "flex items-center border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold";
const liveBtnClass = "flex items-center bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm font-semibold";

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projetos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha jornada.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={cardClass}>
              <div>
                <h3 className={titleClass}>{project.title}</h3>
                <p className={descClass}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className={badgeClass}>{tag}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={codeBtnClass}>
                  <Github className="w-4 h-4 mr-2" /> Código
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={liveBtnClass}>
                  <ExternalLink className="w-4 h-4 mr-2" /> Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 