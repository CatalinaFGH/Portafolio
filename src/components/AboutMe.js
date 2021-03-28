import './AboutMe.css'
import myphoto from '../images/mypicture2.svg'
import CatalinaGonzalez_FrontEndDev from '../images/CatalinaGonzalez_FrontEndDev.pdf'
import tallerista from '../images/tallerista.jpg'
import mediadora from '../images/mediadora.jpg'
import oradora from '../images/oradora.png'

const AboutMe = () => {
    return (
       <section className="aboutme-container" id="aboutme">
           <div className="aboutme-title-container">
             <h2 className="aboutme-title">Sobre mí
             </h2>
           </div>
           <div className="aboutme-paragraph-container">
             <h3 className="aboutme-subtitle">Soy Front-End Developer, traductora y profesora de japonés.
             </h3>
             <p className="aboutme-paragraph">
                   Me apasionan los idiomas, la cultura japonesa, el anime, manga y el código.
                   Soy autodidacta, resiliente y me agrada trabajar en equipo.
                   Me considero una persona muy paciente y atrevida.
                   No temo enfrentar desafíos, ya que disfruto mucho aprender cosas nuevas.
             </p>
             <img src={myphoto} className="aboutme-page-photo" alt="catalinagonzalez" />
             <a href= {CatalinaGonzalez_FrontEndDev} target="_blank">
               <button className="aboutme-cv-button">VER CURRICULUM VITAE</button>
             </a>
             <img src={myphoto} className="aboutme-page-photo-mobile" alt="catalinagonzalez" />
             <div className="aboutme-photos-container">
               <div className="photo-container">
                 <img src={tallerista} className="aboutme-photos" alt="tallerista" />
                    <div className="photos-details-container">
                       <h4 className="photo-title">Tallerista de japonés
                       </h4>
                       <p className="photo-description">Clases de japonés básico en la biblioteca de santiago, abierto a todo público
                       </p>
                    </div>
               </div>
               <div className="photo-container">
               <img src={mediadora} className="aboutme-photos" alt="mediadora" />
                    <div className="photos-details-container-middle">
                       <h4 className="photo-title">Mediadora de lectura
                       </h4>
                       <p className="photo-description">Mediadora cultural y cuenta cuentos en Biblioteca Viva Vespucio
                       </p>
                    </div>
               </div>
               <div className="photo-container">
               <img src={oradora} className="aboutme-photos" alt="oradora" />
                    <div className="photos-details-container">
                       <h4 className="photo-title">Competencia de Oratoria
                       </h4>
                       <p className="photo-description">Participación en la competencia interna del Instituto Cultural Chileno Japonés
                       </p>
                    </div>
               </div>
             </div>
           </div>
       </section>
    )
}

export default AboutMe;