import "./Projects.css";
<h1>Projetos</h1>
const projects = [
  {
    title: "Conversor de Moedas",
    description: "Desenvolvi minha lógica de programação e estrutura de Orientação a Objetos.",
    repoLink: "https://github.com/V1kator/Conversor_de_Moedas.git"
  },
  {
    title: "Validador de CEP",
    description: "Aprendi a lidar com React e uso de API.",
    repoLink: "https://github.com/V1kator/ValidaCEP.git"
  },
  {
    title: "Consultar Filmes",
    description: "Reforcei conceitos de React e consumo de API.",
    repoLink: "https://github.com/V1kator/ADS-2025-ConsultadeFilme.git"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <a className="project-link" href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Acessar Repositório
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
