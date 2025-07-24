import type { ProjectsSectionProps } from "@/components/ProjectsSection";

export function useProjectsData(): ProjectsSectionProps {
  return {
    projects: [
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
    ],
  };
} 