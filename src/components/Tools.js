import './Tools.css'
import icons from '../images/icons.svg'
import iconsmobile from '../images/iconsmobile.svg'

const Tools = () => {
    return (
       <section className="tools-content">
          <div>
             <h2 className="tools-title">Herramientas</h2>
          </div>
          <div>
             <img src={icons} className="tools-icons" alt="my icons" />
             <img src={iconsmobile} className="tools-icons-mobile" alt="my icons" />
          </div>
       </section>

 )
}

export default Tools;