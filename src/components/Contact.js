import './Contact.css'

const Contact = () => {
    return (
       <div className="contact-container" id="contact">

           <div className="contact-title-container">
             <h2 className="contact-title">Si quieres contactarme escríbeme a<br></br><span className="contact-title2">catalinagonzalez1410@gmail.com</span></h2>
           </div>
           <div className="contact-links-container">
             <h3 className="contact-subtitle">¡Estaré feliz de leerte!</h3>
            
             <h3 className="contact-subtitle">
             Además, puedes encontrarme en<br></br>
               <a rel="noopener noreferrer" href="https://www.linkedin.com/in/catalina-fgh/" target="_blank" className="contact-link-style">LinkedIn</a>,
               <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH" target="_blank" className="contact-link-style"> Github</a> o
               <a rel="noopener noreferrer" href="" target="_blank" className="contact-link-style"> apptalento</a>
             </h3>
           </div>

       </div>
    )
}

export default Contact;