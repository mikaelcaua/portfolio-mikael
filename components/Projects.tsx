import { Github, ExternalLink } from "lucide-react";
import { Badge } from "./Badge";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Telessaúde",
      description:
        "Plataforma completa para gestão de consultas médicas remotas com foco em acessibilidade e performance, desenvolvida com React, Next.js e Spring Boot.",
      tags: ["React", "Next.js", "Spring Boot", "PostgreSQL"],
      githubUrl: "https://github.com/mikaelcaua",
      liveUrl: "#",
    },
    {
      title: "App Mobile Flutter",
      description:
        "Aplicativo mobile desenvolvido em Flutter com integração a APIs REST, gerenciamento de estado com BLoC e implementação de testes unitários.",
      tags: ["Flutter", "Dart", "BLoC", "Firebase"],
      githubUrl: "https://github.com/mikaelcaua",
      liveUrl: "#",
    },
    {
      title: "Plataforma de Ensino",
      description:
        "Sistema web para criação e gerenciamento de cursos online, com dashboard administrativo e área do aluno, desenvolvido com React Native e Expo.",
      tags: ["React Native", "Expo", "TypeScript", "Supabase"],
      githubUrl: "https://github.com/mikaelcaua",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projetos em Destaque</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha jornada, aplicando as melhores práticas e tecnologias modernas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-xl text-teal-600 font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-teal-100 text-teal-700">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold">
                  <Github className="w-4 h-4 mr-2" /> Código
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm font-semibold">
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
