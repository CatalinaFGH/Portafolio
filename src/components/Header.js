import './Header.css';
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
          <nav>
             <img src={logo} className="header-logo" alt="cata();" />
                <ul className="header-content">
                   <li><a href="#projects" className="header-sections">Proyectos</a></li>
                   <li><a href="#aboutme" className="header-sections">Sobre mí</a></li>
                   <li><a href="#contact" className="header-sections">Contacto</a></li>
                </ul>
          </nav>
      </header>
    </div>
  );
}
export default Header;