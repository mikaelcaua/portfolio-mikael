export default function Experience() {
  const experiences = [
    {
      company: "Telessaúde Maranhão",
      position: "Desenvolvedor Full Stack (Atual)",
      period: "Maio 2025 – Atual",
      description:
        "Atuação no desenvolvimento de soluções tecnológicas para a área da saúde, com manutenção de sistemas legados e criação de novos sistemas usando React, Next.js, Java Spring Boot e React Native.",
    },
    {
      company: "Alura",
      position: "Instrutor",
      period: "Ago 2024 – Maio 2025",
      description:
        "Criação de conteúdo didático em Dart, Flutter, React Native e Expo. Desenvolvimento de cursos, artigos e atividades para o ensino de tecnologia, com foco em boas práticas e metodologias ágeis.",
    },
    {
      company: "UFMA",
      position: "Maratonista de Programação pela SBC",
      period: "Set 2023 – Atual",
      description:
        "Desenvolvimento de soluções algorítmicas otimizadas em Python para competições da SBC. Análise de complexidade de algoritmos e implementação de estruturas de dados complexas.",
    },
    {
      company: "Pulse",
      position: "Jovem Tech - Bolsista",
      period: "Jan 2024 – Jul 2024",
      description:
        "Desenvolvimento frontend com HTML, CSS, JavaScript, React e Next.js. Foco em layouts responsivos, SEO e desenvolvimento de soft skills com metodologias ágeis.",
    },
    {
      company: "PETComp",
      position: "Monitor e Desenvolvedor",
      period: "Abr 2023 – Jan 2024",
      description:
        "Desenvolvimento mobile com Expo, automação com Google Apps Script e monitorias acadêmicas em Algoritmos, Matemática Discreta, Lógica e Cálculo.",
    },
  ]

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Minha Jornada</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-2 w-4 h-4 bg-teal-500 rounded-full -translate-x-1/2"></div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-teal-600 mb-2">{exp.company}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{exp.position}</h4>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
