// import logo from './logo.svg';
// import './App.css';
import './Header.css';
import logo from './logo.svg'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//------------------------------------------------------------------------------------------



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