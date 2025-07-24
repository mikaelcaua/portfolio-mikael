import type { AboutSectionProps } from "@/components/AboutSection";

export function useAboutData(): Omit<AboutSectionProps, 'skills'> & { skills: Array<{ iconKey: "code" | "graduation" | "users"; title: string; description: string }> } {
  return {
    skills: [
      {
        iconKey: "code",
        title: "Desenvolvimento de Software",
        description:
          "A arte de construir software é minha paixão e principal área de atuação. Busco desenvolver soluções eficientes e escaláveis, com foco em Flutter, React Native e tecnologias web modernas como React e Next.js.",
      },
      {
        iconKey: "graduation",
        title: "Educação e Mentoria",
        description:
          "Acredito que o conhecimento se multiplica ao ser compartilhado. Como instrutor na Alura e criador de conteúdo, tenho a oportunidade de trocar experiências e contribuir com a jornada de aprendizado de novos talentos na tecnologia.",
      },
      {
        iconKey: "users",
        title: "Conexão e Comunidade",
        description:
          "Ninguém cresce sozinho. Gosto de participar e fortalecer comunidades, ajudando a criar pontes entre pessoas, ideias e projetos para que todos possam evoluir em um ambiente colaborativo.",
      },
    ],
  };
} 