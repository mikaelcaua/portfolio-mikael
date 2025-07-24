import React from "react";
import { Code, GraduationCap, Users } from "lucide-react";

export interface AboutSectionProps {
  skills: Array<{
    iconKey: "code" | "graduation" | "users";
    title: string;
    description: string;
  }>;
}

const cardClass = "bg-white p-8 rounded-lg shadow-sm border-l-4 border-teal-500";
const iconClass = "mb-6";
const titleClass = "text-xl font-bold text-gray-900 mb-4";
const descClass = "text-gray-600 leading-relaxed";

const iconMap = {
  code: <Code className="w-12 h-12 text-teal-500" />,
  graduation: <GraduationCap className="w-12 h-12 text-teal-500" />,
  users: <Users className="w-12 h-12 text-teal-500" />,
};

export function AboutSection({ skills }: AboutSectionProps) {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">O Nexo do Conhecimento</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className={cardClass}>
              <div className={iconClass}>{iconMap[skill.iconKey]}</div>
              <h3 className={titleClass}>{skill.title}</h3>
              <p className={descClass}>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 