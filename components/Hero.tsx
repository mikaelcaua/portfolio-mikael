import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const buttonClasses =
    "px-6 py-3 rounded-lg text-lg transition-colors flex items-center justify-center";

  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Nome */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Mikael Cauã
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Desenvolvedor Full Stack | Instrutor | Estudante de Ciência da Computação
        </p>

        {/* Descrição */}
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Sou apaixonado por desenvolvimento de software e educação em tecnologia. Minha jornada é construir soluções inovadoras e compartilhar conhecimento para capacitar a próxima geração de desenvolvedores.
        </p>

        {/* Botões principais */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <a
            href="https://github.com/mikaelcaua"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-yellow-500 hover:bg-yellow-600 text-black font-semibold ${buttonClasses}`}
          >
            <Github className="mr-2 h-5 w-5" /> GitHub
          </a>

          <a
            href="mailto:mikaelcauasilva1profissional@gmail.com"
            className={`bg-slate-800 hover:bg-slate-700 text-white font-medium ${buttonClasses}`}
          >
            <Mail className="mr-2 h-5 w-5" /> E-mail
          </a>

          <a
            href="https://linkedin.com/in/mikael-caua"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-blue-600 hover:bg-blue-700 text-white font-medium ${buttonClasses}`}
          >
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
