import './AboutMe.css'
import photo from './photo.png'
import CatalinaGonzalez_FrontEndDev from './CatalinaGonzalez_FrontEndDev.pdf'
import tallerista from './tallerista.jpg'
import mediadora from './mediadora.jpg'
import oradora from './oradora.png'

const AboutMe = () => {
    return (
       <div className="aboutme-container" id="aboutme">

           <div className="aboutme-title-container">
             <h2 className="aboutme-title">Sobre mí</h2>
           </div>
           
           <div className="aboutme-paragraph-container">
             <p className="aboutme-paragraph">
                   Soy Front-End Developer, traductora y profesora de japonés.
                   Me apasionan los idiomas, la cultura japonesa, el anime, manga y el código.
                   Soy autodidacta, resiliente y me agrada trabajar en equipo.
                   Me considero una persona muy paciente y atrevida.
                   No temo enfrentar desafíos, ya que disfruto mucho aprender cosas nuevas.
                   </p>
                   <h3 className="cv-button-text">
                   Te invito a ver mi cv en el siguiente enlace:
                   </h3>
             <img src={photo} className="aboutme-page-photo" alt="catalinagonzalez" />

             <a href= {CatalinaGonzalez_FrontEndDev} target="_blank">
               <button className="aboutme-cv-button">VER CURRICULUM VITAE</button>
             </a>

             <div className="aboutme-photos-container">

               <div className="photo-container">
                 <img src={tallerista} className="aboutme-photos" alt="tallerista" />
                    <div className="photos-details-container">
                       <h4 className="photo-title">Tallerista de japonés</h4>
                       <p className="photo-description">Clases de japonés básico en la biblioteca de santiago, abierto a todo público</p>
                    </div>
               </div>

               <div className="photo-container">
               <img src={mediadora} className="aboutme-photos" alt="mediadora" />
                    <div className="photos-details-container-S">
                       <h4 className="photo-title">Mediadora de lectura</h4>
                       <p className="photo-description">Mediadora cultural y cuenta cuentos en Biblioteca Viva Vespucio</p>
                    </div>
               </div>

               <div className="photo-container">
               <img src={oradora} className="aboutme-photos" alt="oradora" />
                    <div className="photos-details-container">
                       <h4 className="photo-title">Competencia de Oratoria</h4>
                       <p className="photo-description">Participación en la competencia interna del Instituto Cultural Chileno Japonés</p>
                    </div>
               </div>

             </div>

           </div>
           
       </div>
    )
}

export default AboutMe;