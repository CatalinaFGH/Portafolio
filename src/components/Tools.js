import './Tools.css'
import icons from './icons.svg'

const Tools = () => {
    return (

       <div className="tools-content">

          <div>
          <h2 className="tools-title">Herramientas</h2>
          </div> 
        
        <div>
          <img src={icons} className="tools-icons" alt="my icons" />
        </div>
           
       </div>

 )
}

export default Tools;