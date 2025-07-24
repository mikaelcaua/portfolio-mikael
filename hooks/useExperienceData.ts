import type { ExperienceSectionProps } from "@/components/ExperienceSection";

export function useExperienceData(): ExperienceSectionProps {
  return {
    experiences: [
      {
        company: "Telessaúde Maranhão",
        position: "Desenvolvedor Full Stack",
        period: "Maio 2025 - Atual",
        description:
          "Atuação no desenvolvimento de soluções tecnológicas para a área da saúde, com manutenção de sistemas legados e criação de novos sistemas usando React, Next.js, PHP Laravel e React Native.",
      },
      {
        company: "UFMA",
        position: "Maratonista de Programação pela SBC",
        period: "Set 2023 - Atual",
        description:
          "Desenvolvimento de soluções algorítmicas otimizadas em Python para competições da SBC. Análise de complexidade de algoritmos e implementação de estruturas de dados complexas.",
      },
      {
        company: "Alura",
        position: "Instrutor",
        period: "Ago 2024 - Maio 2025",
        description:
          "Criação de conteúdo didático em Dart, Flutter, React Native e Expo. Desenvolvimento de cursos, artigos e atividades para o ensino de tecnologia, com foco em boas práticas e metodologias ágeis.",
      },
      {
        company: "Pulse",
        position: "Jovem Tech - Bolsista",
        period: "Jan 2024 - Jul 2024",
        description:
          "Desenvolvimento frontend com HTML, CSS, JavaScript, React e Next.js.",
      },
      {
        company: "PETComp",
        position: "Monitor e Desenvolvedor",
        period: "Abr 2023 - Jan 2024",
        description:
          "Desenvolvimento mobile com Expo, automação com Google Apps Script e monitorias acadêmicas em Algoritmos, Matemática Discreta, Lógica e Cálculo.",
      },
    ],
  };
} 