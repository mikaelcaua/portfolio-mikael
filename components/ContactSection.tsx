import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export interface ContactSectionProps {
  title: string;
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

const btnClass = "px-8 py-4 h-14 rounded-lg text-lg transition-colors flex items-center justify-center";

const iconMap = {
  github: <Github className="mr-2 h-5 w-5" />,
  mail: <Mail className="mr-2 h-5 w-5" />,
  linkedin: <Linkedin className="mr-2 h-5 w-5" />,
};

export function ContactSection({ title, description, buttons }: ContactSectionProps) {
  return (
    <section id="contato" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 tracking-tight">{title}</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">{description}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className={`${btn.className} ${btnClass}`}
              target={btn.target}
              rel={btn.rel}
            >
              {iconMap[btn.iconKey]}{btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}