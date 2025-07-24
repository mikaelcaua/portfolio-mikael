import type { ProjectsSectionProps } from "@/components/ProjectsSection";

export function useProjectsData(): ProjectsSectionProps {
  return {
    projects: [
      {
        title: "Sofia",
        description:
          "Refatorando a plataforma SOFIA, atualmente altamente acoplada ao Blade e PHP Laravel, para um sistema com backend em Laravel (API), frontend em NextJS e mobile em React Native.",
        tags: [ "NextJS","TypeScript", "PHP Laravel", "Blade"],
        githubUrl: "https://github.com/mikaelcaua/sofia-frontend-gilab-branch-clone",
        liveUrl: "https://sofia.telessaude.ufma.br/",
      },
      {
        title: "Welcome Comp",
        description:"Desenvolvi o app Welcome Comp para reunir conteúdos das disciplinas do curso de Ciência da Computação da Universidade Federal do Maranhão.",
        tags: ["Flutter", "Dart", "Supabase"],
        githubUrl: "https://github.com/mikaelcaua/welcome_comp",
        liveUrl: "https://play.google.com/store/apps/details?id=br.mikael.welcome_comp",
      },
      {
        title: "Conecta Santa Rita App",
        description:
          "App que estou construindo em parceira com a prefeitura de Santa Rita, com o objetivo de facilitar o agendamento de consultas médicas.",
        tags: ["React Native", "TypeScript"],
        githubUrl: "https://github.com/Conecta-Santa-Rita/conecta-santa-rita-app-mobile/tree/develop",
        liveUrl: "https://github.com/Conecta-Santa-Rita/conecta-santa-rita-app-mobile/tree/develop",
      },
    ],
  };
} 