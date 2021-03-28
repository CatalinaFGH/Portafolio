import './Contact.css'

const Contact = () => {
    return (
       <section className="contact-container" id="contact">
           <div className="contact-title-container">
              <h2 className="contact-title">Si quieres contactarme escríbeme a<br></br>
                <a href="mailto:catalinagonzalez1410@gmail.com" className="contact-title-mail">catalinagonzalez1410@gmail.com</a>
              </h2>
            </div>
            <div className="contact-links-container">
               <h3 className="contact-subtitle">¡Estaré feliz de leerte!
               </h3>
               <h3 className="contact-subtitle">
                 Además, puedes encontrarme en<br></br>
               <a rel="noopener noreferrer" href="https://www.linkedin.com/in/catalina-fgh/" target="_blank" className="contact-link-style">LinkedIn</a>,
               <a rel="noopener noreferrer" href="https://github.com/CatalinaFGH" target="_blank" className="contact-link-style"> Github</a> o
               <a rel="noopener noreferrer" href="https://app.talento.laboratoria.la/profile/IIekDjWSgjXXgMinll4hXvQmEjD3" target="_blank" className="contact-link-style"> apptalento</a>
               </h3>
            </div>
       </section>
    )
}

export default Contact;