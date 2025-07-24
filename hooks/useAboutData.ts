import type { AboutSectionProps } from "@/components/AboutSection";

export function useAboutData(): Omit<AboutSectionProps, 'skills'> & { skills: Array<{ iconKey: "code" | "graduation" | "users"; title: string; description: string }> } {
  return {
    skills: [
      {
        iconKey: "code",
        title: "Desenvolvimento de Software",
        description:
          "Tenho interesse nas áreas de front-end e desenvolvimento mobile, atuando principalmente com React, Next.js, React Native, Expo e Flutter.",
      },
      {
        iconKey: "graduation",
        title: "Educação e Mentoria",
        description:
          "Desde o ensino médio, fui responsável pelas monitorias das disciplinas de programação e, na faculdade, não foi diferente. Além das monitorias, tive experiências práticas com o ensino de programação na Alura.",
      },
      {
        iconKey: "users",
        title: "Maratona de Programação",
        description:
          "Sou fã de LeetCode e participo ativamente da Maratona de Programação da Sociedade Brasileira de Computação. Tenho bastante interesse em temas como complexidade de algoritmos, estruturas de dados, programação dinâmica, grafos e assuntos relacionados.",
      },
    ],
  };
} 