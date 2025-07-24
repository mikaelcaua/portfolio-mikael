import { Github, Linkedin, Mail } from "lucide-react";
import type { HeroSectionProps } from "../components/HeroSection";

export function useHeroData(): HeroSectionProps {
  return {
    name: "Mikael Cauã",
    subtitle: "Desenvolvedor Full Stack | Instrutor | Estudante de Ciência da Computação",
    description:
      "Sou apaixonado por desenvolvimento de software e educação em tecnologia. Minha jornada é construir soluções inovadoras e compartilhar conhecimento para capacitar a próxima geração de desenvolvedores.",
    buttons: [
      {
        label: "GitHub",
        href: "https://github.com/mikaelcaua",
        iconKey: "github",
        className: "bg-yellow-500 hover:bg-yellow-600 text-black font-semibold",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        label: "E-mail",
        href: "mailto:mikaelcauasilva1profissional@gmail.com",
        iconKey: "mail",
        className: "bg-slate-800 hover:bg-slate-700 text-white font-medium",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/mikael-caua",
        iconKey: "linkedin",
        className: "bg-blue-600 hover:bg-blue-700 text-white font-medium",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  };
} 