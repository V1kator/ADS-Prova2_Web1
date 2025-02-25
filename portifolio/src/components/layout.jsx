import "../styles/Layout.css";
import { useEffect } from "react";
import Projects from "./Projects/Projects"; // Importa a seção de Projetos

const Layout = () => {
  // Função para ativar as animações quando o usuário rolar a página
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const revealOnScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="container">
      {/* Home - Centralizada no topo */}
      <section id="home" className="section">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Desenvolvedor Web | Criador de Experiências Digitais</p>
      </section>

      {/* Projetos - Título central e projetos dentro da seção */}
      <section id="projects" className="section">
        <h1>PROJETOS</h1>
        <Projects />
      </section>

      {/* Sobre Mim e Habilidades - Lado a Lado */}
      <div className="row">
        <section id="about" className="section">
          <h1>SOBRE MIM</h1>
          <p>Sou um desenvolvedor apaixonado por tecnologia e aprendizado contínuo.</p>
        </section>
        <section id="skills" className="section">
          <h1>HABILIDADES</h1>
          <p>JavaScript, React.js, Node.js, APIs, Banco de Dados e muito mais!</p>
        </section>
      </div>

      {/* Educação - Título central e conteúdo abaixo */}
      <section id="education" className="section">
        <h1>EDUCAÇÃO</h1>
        <p><strong>Ensino Médio Técnico</strong><br />Instituto Federal de Rondônia<br />2018-2021</p>
        <p><strong>Cursando Ensino Superior</strong><br />Instituto Federal de Rondônia<br />2023 -</p>
      </section>

      {/* Contato - Centralizado */}
      <section id="contact" className="section">
        <h1>CONTATO</h1>
        <div className="contact-links">
          <p>Email: <a href="mailto:victor.daniel.oliveira.com@gmail.com">victor.daniel.oliveira.com@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/victor-daniel-de-oliveira-cruz-972513243/" target="_blank" rel="noopener noreferrer">Meu LinkedIn</a></p>
          <p>GitHub: <a href="https://github.com/V1kator" target="_blank" rel="noopener noreferrer">Meu GitHub</a></p>
        </div>
      </section>
    </div>
  );
};

export default Layout;
