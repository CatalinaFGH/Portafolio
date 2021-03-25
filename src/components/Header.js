import './Header.css';
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <div className="header-container">

      <header className="header">
      <div className="logo-container">
        <img src={logo} className="header-logo" alt="cgh" />
        </div>
        <div className="header-content">
          <a href="#projects" className="header-sections">Proyectos</a>
          <a href="#aboutme" className="header-sections">Sobre mí</a>
          <a href="#contact" className="header-sections">Contacto</a>
        </div>
      </header>

    </div>
  );

}
export default Header;