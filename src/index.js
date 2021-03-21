import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import Tools from './components/Tools'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <WelcomePage />
    <Tools />
    <Projects />
    <AboutMe />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
