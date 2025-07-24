import type { ContactSectionProps } from "@/components/ContactSection";

export function useContactData(): ContactSectionProps {
  return {
    title: "Vamos Conectar?",
    description:
      "Se interessou pelo meu portfólio? Então, é só clicar nos botões abaixo e me mandar uma mensagem!",
    buttons: [
      {
        label: "Email",
        href: "mailto:mikaelcauasilva1profissional@gmail.com",
        className: "bg-teal-500 hover:bg-teal-600 text-white font-bold",
        iconKey: "mail",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mikael-cau%C3%A3-silva/",
        className: "border border-gray-600 text-gray-300 hover:bg-gray-800",
        target: "_blank",
        rel: "noopener noreferrer",
        iconKey: "linkedin",
      },
      {
        label: "GitHub",
        href: "https://github.com/mikaelcaua",
        className: "border border-gray-600 text-gray-300 hover:bg-gray-800",
        target: "_blank",
        rel: "noopener noreferrer",
        iconKey: "github",
      },
    ],
  };
} 