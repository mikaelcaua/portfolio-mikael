import React from "react";

export interface ExperienceSectionProps {
  experiences: Array<{
    company: string;
    position: string;
    period: string;
    description: string;
  }>;
}

const timelineLineClass = "absolute left-4 top-0 bottom-0 w-0.5 bg-teal-500";
const timelineDotClass = "absolute left-2 w-4 h-4 bg-teal-500 rounded-full -translate-x-1/2";
const cardClass = "bg-gray-50 p-6 rounded-lg";
const companyClass = "text-xl font-bold text-teal-600 mb-2";
const positionClass = "text-lg font-semibold text-gray-900 mb-2";
const periodClass = "text-sm text-gray-500 mb-4";
const descClass = "text-gray-700 leading-relaxed";

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Minha Jornada</h2>
        </div>
        <div className="relative">
          <div className={timelineLineClass}></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 pb-12 last:pb-0">
              <div className={timelineDotClass}></div>
              <div className={cardClass}>
                <h3 className={companyClass}>{exp.company}</h3>
                <h4 className={positionClass}>{exp.position}</h4>
                <p className={periodClass}>{exp.period}</p>
                <p className={descClass}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 