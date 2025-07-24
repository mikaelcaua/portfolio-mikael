import { Code, GraduationCap, Users } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: <Code className="w-12 h-12 text-teal-500" />,
      title: "Desenvolvimento de Software",
      description:
        "A arte de construir software é minha paixão e principal área de atuação. Busco desenvolver soluções eficientes e escaláveis, com foco em Flutter, React Native e tecnologias web modernas como React e Next.js.",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-teal-500" />,
      title: "Educação e Mentoria",
      description:
        "Acredito que o conhecimento se multiplica ao ser compartilhado. Como instrutor na Alura e criador de conteúdo, tenho a oportunidade de trocar experiências e contribuir com a jornada de aprendizado de novos talentos na tecnologia.",
    },
    {
      icon: <Users className="w-12 h-12 text-teal-500" />,
      title: "Conexão e Comunidade",
      description:
        "Ninguém cresce sozinho. Gosto de participar e fortalecer comunidades, ajudando a criar pontes entre pessoas, ideias e projetos para que todos possam evoluir em um ambiente colaborativo.",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">O Nexo do Conhecimento</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-teal-500">
              <div className="mb-6">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.title}</h3>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
