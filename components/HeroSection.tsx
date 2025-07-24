import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export interface HeroSectionProps {
  name: string;
  subtitle: string;
  description: string;
  buttons: Array<{
    label: string;
    href: string;
    iconKey: "github" | "mail" | "linkedin";
    className: string;
    target?: string;
    rel?: string;
  }>;
}

const buttonClasses =
  "px-6 py-3 rounded-lg text-lg transition-colors flex items-center justify-center";

const iconMap = {
  github: <Github className="mr-2 h-5 w-5" />,
  mail: <Mail className="mr-2 h-5 w-5" />,
  linkedin: <Linkedin className="mr-2 h-5 w-5" />,
};

export function HeroSection({ name, subtitle, description, buttons }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 pt-16 md:pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">{subtitle}</p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">{description}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              target={btn.target}
              rel={btn.rel}
              className={`${btn.className} ${buttonClasses}`}
            >
              {iconMap[btn.iconKey]} {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 