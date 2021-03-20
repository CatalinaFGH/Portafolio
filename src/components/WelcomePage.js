import './WelcomePage.css'
import photo from './photo.png';
import hand from './hand.svg';
import laptop from './laptop.svg';

const WelcomePage = () => {
   return (
     <div className="welcome-page-container">

      <div className="welcome-page">
      <img src={photo} className="welcome-page-photo" alt="catalinagonzalez" />
        <h1 className="welcome-page-title">¡Hola!<img src={hand} className="welcome-page-hand" alt="waving hand" />
        <br></br>
        Soy Catalina González</h1>
        <h4 className="welcome-subtitle">Front-End Developer<img src={laptop} className="welcome-page-laptop" alt="cool laptop" /></h4>
      </div>

      

     </div>

   )
    
}

export default WelcomePage;