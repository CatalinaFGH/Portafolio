import './Projects.css'
import onumujeres1 from './onumujeres1.png'

const Projects = () => {
    return (
       <div className="projects-container">

         <div>
          <h2 className="projects-title">Proyectos</h2>
          </div>
          <div className="the-project-container">
            <div>
              <img src={onumujeres1} className="project-onu-photo" alt="tu oportunidad" />
          </div>
            <div className="project-description">
              <h3 className="the-project-name">TU OPORTUNIDAD</h3>
              <p>Plataforma web con vista mobile que permite la comunicación de las participantes del programa "Tu Oportunidad" de ONU mujeres.</p>
              <p>Desarrollada con HTML5, CSS3, Vanilla Javascript y Firebase.</p>
              <button className="project-demo-button">DEMO</button>
              <button className="project-github-button">GITHUB</button>
            </div>
          </div>

       </div>
 )
}

export default Projects;