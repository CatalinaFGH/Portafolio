import './WelcomePage.css'
import photo from './photo.png';

const WelcomePage = () => {
   return (
     <div className="welcome-page-container">

      <div className="welcome-page">
        <h1 className="welcome-page-title">¡Hola!<br></br>Soy Catalina González</h1>
        <h4 className="welcome-subtitle">Front-End Developer</h4>
      </div>

      <div>
      <img src={photo} className="welcome-page-photo" alt="my photo" />
      </div>

     </div>

   )
    
}

export default WelcomePage;