'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaBars, FaTimes } from 'react-icons/fa'
import { SiPython, SiFastapi, SiDjango, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpress, SiNodedotjs } from 'react-icons/si'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-50/80 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold text-gray-900 dark:text-gray-900">
              Lucas Guimarães Borges
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#sobre" className="text-gray-700 hover:text-black transition-colors font-medium">
                Sobre
              </a>
              <a href="#skills" className="text-gray-700 hover:text-black transition-colors font-medium">
                Habilidades
              </a>
              <a href="#projetos" className="text-gray-700 hover:text-black transition-colors font-medium">
                Projetos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-black transition-colors font-medium">
                Contato
              </a>
              <a 
                href="/curriculo.pdf" 
                download
                className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Baixar Currículo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-900 text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
              <a 
                href="#sobre" 
                onClick={closeMenu}
                className="block text-gray-700 hover:text-black transition-colors font-medium py-2"
              >
                Sobre
              </a>
              <a 
                href="#skills" 
                onClick={closeMenu}
                className="block text-gray-700 hover:text-black transition-colors font-medium py-2"
              >
                Habilidades
              </a>
              <a 
                href="#projetos" 
                onClick={closeMenu}
                className="block text-gray-700 hover:text-black transition-colors font-medium py-2"
              >
                Projetos
              </a>
              <a 
                href="#contato" 
                onClick={closeMenu}
                className="block text-gray-700 hover:text-black transition-colors font-medium py-2"
              >
                Contato
              </a>
              <a 
                href="/curriculo.pdf" 
                download
                className="block bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-center"
              >
                Baixar Currículo
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-24 md:pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-900">
                Olá, eu sou <span className="gradient-text">Lucas Borges</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-800">
                Desenvolvedor Backend
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-800 leading-relaxed">
                Estudante de Engenharia de Software na UnB, especializado em desenvolvimento backend. Apaixonado por criar soluções eficientes e escaláveis, com experiência 
                em FastAPI, Django e tecnologias modernas do ecossistema JavaScript/TypeScript.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="/curriculo.pdf" 
                  download
                  className="inline-flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <FaDownload />
                  Baixar Currículo
                </a>
                <a 
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-black dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
                >
                  Entre em Contato
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full blur opacity-50"></div>
                <img 
                  src="https://avatars.githubusercontent.com/u/131381377?v=4"
                  alt="Lucas Borges"
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white dark:border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-white dark:bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-900">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-900">
                Formação Acadêmica
              </h3>
              <p className="text-gray-700 dark:text-gray-800">
                Atualmente cursando <strong>Engenharia de Software na Universidade de Brasília (UnB)</strong>, 
                onde desenvolvo uma base sólida em princípios de desenvolvimento de software, 
                arquitetura de sistemas e boas práticas de programação.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-900">
                Experiência em Pesquisa
              </h3>
              <p className="text-gray-700 dark:text-gray-800">
                Participei de projetos <strong>PIBIC (Programa Institucional de Bolsas de Iniciação Científica)</strong> focados no monitoramento e análise de dados de uma estufa indoor, aplicando conhecimentos 
                em coleta, processamento e visualização de dados em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-900">
            Habilidades <span className="gradient-text">Técnicas</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-50 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-900">Backend</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <SiPython className="text-4xl text-blue-500" />
                  <span className="text-lg text-gray-900 dark:text-gray-900">Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiFastapi className="text-4xl text-teal-500" />
                  <span className="text-lg text-gray-900 dark:text-gray-900">FastAPI</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiDjango className="text-4xl text-green-700" />
                  <span className="text-lg text-gray-900 dark:text-gray-900">Django</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiNodedotjs className="text-4xl text-green-600" />
                  <span className="text-lg text-gray-900 dark:text-gray-900">Node.js</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiExpress className="text-4xl text-gray-700 dark:text-gray-700" />
                  <span className="text-lg text-gray-900 dark:text-gray-900">Express.js</span>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-50 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-900">Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <SiJavascript className="text-4xl text-yellow-400" />
                  <span className="text-lg text-gray-900 dark:text-gray-900">JavaScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiTypescript className="text-4xl text-blue-600" />
                  <span className="text-lg text-gray-900 dark:text-gray-900">TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiReact className="text-4xl text-cyan-500" />
                  <span className="text-lg text-gray-900 dark:text-gray-900">React</span>
                </div>
                <div className="flex items-center gap-3">
                  <SiNextdotjs className="text-4xl text-black dark:text-black" />
                  <span className="text-lg text-gray-900 dark:text-gray-900">Next.js</span>
                </div>
              </div>
            </div>

            {/* Especialidades */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-50 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-900">Especialidades</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 dark:text-gray-900 mt-1">✓</span>
                  <span>Agentes de IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 dark:text-gray-900 mt-1">✓</span>
                  <span>Automações</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 dark:text-gray-900 mt-1">✓</span>
                  <span>Análise de Dados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 dark:text-gray-900 mt-1">✓</span>
                  <span>APIs RESTful</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 dark:text-gray-900 mt-1">✓</span>
                  <span>Sistemas Escaláveis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-4 bg-gray-50 dark:bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-900">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-900">
                  Sistema de Monitoramento - Estufa Indoor
                </h3>
                <p className="text-gray-700 dark:text-gray-800">
                  Projeto PIBIC para coleta, análise e visualização de dados em tempo real de uma 
                  estufa indoor, utilizando Python para processamento de dados e automação.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-900 rounded-full text-sm font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-900 rounded-full text-sm font-medium">
                    IoT
                  </span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-900 rounded-full text-sm font-medium">
                    Análise de Dados
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-900">
                  Automações com Agentes de IA
                </h3>
                <p className="text-gray-700 dark:text-gray-800">
                  Desenvolvimento de agentes inteligentes para automação de processos, utilizando 
                  técnicas modernas de IA e integração com APIs diversas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-900 rounded-full text-sm font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-900 rounded-full text-sm font-medium">
                    IA
                  </span>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-900 rounded-full text-sm font-medium">
                    Automação
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-900">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-800 mb-12">
            Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/lcsgborges"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-black dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-guimaraes-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-700 dark:bg-gray-600 text-white rounded-full hover:bg-gray-900 dark:hover:bg-gray-500 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="mailto:lcsgborges@gmail.com"
              className="p-4 bg-gray-600 dark:bg-gray-500 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-400 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Email"
            >
              <FaEnvelope className="text-3xl" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black dark:bg-gray-900 text-white text-center border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Lucas Borges. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
