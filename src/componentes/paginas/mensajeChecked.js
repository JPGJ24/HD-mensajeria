import React from 'react'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function mensajeChecked() {
  return (
    <div className="alert alert-success mt-3 text-center md:w-1/2 lg:w-2/5 mx-5" role="alert">
    <p >
      Tus datos han sido enviados exitosamente, 
      estaremos dando respuesta a tu requerimiento en el menor tiempo posible;
       Adjuntado cotización del servicio</p>
       <div className="h2 text-center">
                          <FontAwesomeIcon icon={faCheck} />
                          </div>
    </div>
    
  ) 
}

export default mensajeChecked