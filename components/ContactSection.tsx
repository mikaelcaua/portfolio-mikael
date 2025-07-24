import React from "react";

export interface ContactSectionProps {
  title: string;
  description: string;
  buttons: Array<{
    label: string;
    href: string;
    className: string;
    target?: string;
    rel?: string;
  }>;
}

const btnClass = "px-8 py-4 rounded-lg text-lg transition-colors";

export function ContactSection({ title, description, buttons }: ContactSectionProps) {
  return (
    <section id="contato" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 tracking-tight">{title}</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">{description}</p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              className={`${btn.className} ${btnClass}`}
              target={btn.target}
              rel={btn.rel}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 