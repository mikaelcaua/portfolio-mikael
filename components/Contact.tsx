// import { Button } from "@/components/ui/button"
// import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8 tracking-tight">Vamos Conectar?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Estou sempre aberto a novas oportunidades, colaborações e trocas de ideias. Entre em contato e vamos construir
          algo incrível juntos!
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a href="mailto:mikaelcauasilva1profissional@gmail.com" className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">Email</a>
          <a href="https://linkedin.com/in/mikael-caua" target="_blank" rel="noopener noreferrer" className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-lg text-lg transition-colors">LinkedIn</a>
          <a href="https://github.com/mikaelcaua" target="_blank" rel="noopener noreferrer" className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-lg text-lg transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  )
}
