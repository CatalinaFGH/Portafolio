import './Projects.css'
import onumujeres1 from '../images/onumujeres1.png'
import beautytips4 from '../images/beautytips4.png'
import rickymorty4 from '../images/rickymorty4.png'
import cifradocesar1 from '../images/cifradocesar1.png'
import onuphoto from '../images/onuphoto.svg'

const Projects = () => {
    return (
       <div className="projects-container" id="projects">

          <h2 className="projects-title">Proyectos</h2>

          <div className="the-project-container1">
            <div>
              <img src={onumujeres1} className="project-onu-photo" alt="tu oportunidad" />
          </div>
            <div className="project-description">
              <h3 className="the-project-name">TU OPORTUNIDAD</h3>
              <p>Plataforma web con vista mobile que permite la comunicación de las participantes del programa "Tu Oportunidad" de ONU mujeres.</p>
              <p className="the-project-tools">Desarrollada con HTML5, CSS3, Vanilla Javascript y Firebase.</p>
              <a rel="noopener noreferrer" href="https://catalinafgh.github.io/Tu-oportunidad-ONU-Mujeres/src/" target="_blank">
                <button className="project-demo-button">DEMO</button>
              </a>
              <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH/Tu-oportunidad-ONU-Mujeres" target="_blank">
              <button className="project-github-button">GITHUB</button>
              </a>
            </div>
          </div>

          <div className="onu-presentation-container">
             <h2>Presentación a ONU WOMEN</h2>
             <img src={onuphoto} className="onu-photo" alt="presentación onu" />
             <h3>Laboratoria y UN WOMEN | Marzo – 2021</h3>
             <p className="onu-presentation-description">Tuve la oportunidad de presentar formalmente este proyecto a ONU mujeres,
                                                         mostrando las principales funcionalidades de la app que desarrollamos con mi equipo.
                                                         Todo esto fue gracias al trabajo realizado en conjunto de Front-End y UX Designer.
                                                         Fue un desafío que afrontamos con mucha emoción, ya que la experiencia y el aprendizaje fue muy valioso. </p>
          </div>


          <div className="the-project-container2">
            <div>
              <img src={beautytips4} className="project-beautytips-photo" alt="beauty tips" />
          </div>
            <div className="project-description">
              <h3 className="the-project-name">SOCIAL NETWORK</h3>
              <p>Plataforma web SPA con vista mobile y temática de maquillaje.</p>
              <p className="the-project-tools">Desarrollada con HTML5, CSS3, Vanilla Javascript y Firebase.</p>
              <a rel="noopener noreferrer" href="https://catalinafgh.github.io/SCL015-social-network/src/" target="_blank">
                <button className="project-demo-button">DEMO</button>
              </a>
              <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH/SCL015-social-network" target="_blank">
              <button className="project-github-button">GITHUB</button>
              </a>
            </div>
          </div>

          <div className="the-project-container">
            <div>
              <img src={rickymorty4} className="project-rickymorty-photo" alt="rick y morty" />
          </div>
            <div className="project-description">
              <h3 className="the-project-name">DATA LOVERS</h3>
              <p>Plataforma web con vista mobile tipo enciclopedia de la serie "Rick and Morty". Permite filtrar y ordenar la data.</p>
              <p className="the-project-tools">Desarrollada con HTML5, CSS3 y Vanilla Javascript.</p>
              <a rel="noopener noreferrer" href="https://catalinafgh.github.io/SCL015-data-lovers/src/" target="_blank">
                <button className="project-demo-button">DEMO</button>
              </a>
              <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH/SCL015-data-lovers" target="_blank" >
              <button className="project-github-button">GITHUB</button>
              </a>
            </div>
          </div>

          <div className="the-project-container2">
            <div>
              <img src={cifradocesar1} className="project-cifradocesar-photo" alt="cifrado cesar" />
          </div>
            <div className="project-description">
              <h3 className="the-project-name">CAESAR CIPHER</h3>
              <p>Plataforma web que permite cifrar y descrifrar texto con el método de cifrado césar.</p>
              <p className="the-project-tools">Desarrollada con HTML5, CSS3 y Vanilla Javascript.</p>
              <a rel="noopener noreferrer" href="https://catalinafgh.github.io/SCL015-cipher/src/" target="_blank">
                <button className="project-demo-button">DEMO</button>
              </a>
              <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH/SCL015-cipher" target="_blank">
              <button className="project-github-button">GITHUB</button>
              </a>
            </div>
          </div>
       </div>
 )
}

export default Projects;