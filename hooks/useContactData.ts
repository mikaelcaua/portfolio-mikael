import type { ContactSectionProps } from "@/components/ContactSection";

export function useContactData(): ContactSectionProps {
  return {
    title: "Vamos Conectar?",
    description:
      "Estou sempre aberto a novas oportunidades, colaborações e trocas de ideias. Entre em contato e vamos construir algo incrível juntos!",
    buttons: [
      {
        label: "Email",
        href: "mailto:mikaelcauasilva1profissional@gmail.com",
        className: "bg-teal-500 hover:bg-teal-600 text-white font-bold",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/mikael-caua",
        className: "border border-gray-600 text-gray-300 hover:bg-gray-800",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        label: "GitHub",
        href: "https://github.com/mikaelcaua",
        className: "border border-gray-600 text-gray-300 hover:bg-gray-800",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  };
} 