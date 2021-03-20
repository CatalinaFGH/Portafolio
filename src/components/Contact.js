import './Contact.css'
import gmail from './gmail.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'

const Contact = () => {
    return (
       <div className="contact-container" id="contact">

           <div className="contact-title-container">
             <h2 className="contact-title">Contacto</h2>
           </div>
           <div className="contact-links-container">
           
             <h3><img src={gmail} className="contact-gmail-logo" alt="gmail" />catalinagonzalez1410@gmail.com</h3>
             
             <h3><img src={github} className="contact-github-logo" alt="github" />https://github.com/CatalinaFGH</h3>
             
             <h3><img src={linkedin} className="contact-linkedin-logo" alt="linkedin" />https://www.linkedin.com/in/catalina-fgh/</h3>
           </div>

       </div>
    )
}

export default Contact;