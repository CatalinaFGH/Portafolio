import './AboutMe.css'
import photo from './photo.png'

const AboutMe = () => {
    return (
       <div className="aboutme-container" id="aboutme">

           <div className="aboutme-title-container">
             <h2 className="aboutme-title">Sobre mí</h2>
           </div>
           
           <div className="aboutme-paragraph-container">
             <p className="aboutme-paragraph">Me gusta el anime y estudiar, me gusta estar con mis gatos bla bla
             estudie en laboratoria porque me gustan lso lenguajes y la tecnología bla bla
             bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla
             bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla
             bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla
             bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla
             bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla
             bla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla bla</p>
             <img src={photo} className="aboutme-page-photo" alt="catalinagonzalez" />
             <button className="aboutme-cv-button">VER CURRICULUM VITAE</button>
           </div>
           
       </div>
    )
}

export default AboutMe;