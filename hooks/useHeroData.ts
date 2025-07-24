import { Github, Linkedin, Mail } from "lucide-react";
import type { HeroSectionProps } from "../components/HeroSection";

export function useHeroData(): HeroSectionProps {
  return {
    name: "Mikael Cauã",
    subtitle: "Desenvolvedor Full Stack | Professor | Maratonista de Programação",
    description:
      "Desenvolvedor de software e professor de programação, com interesse em front-end e desenvolvimento mobile. Nas horas vagas, participo de competições de programação e LeetCode.",
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
        href: "https://www.linkedin.com/in/mikael-cau%C3%A3-silva/",
        iconKey: "linkedin",
        className: "bg-blue-600 hover:bg-blue-700 text-white font-medium",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  };
} 