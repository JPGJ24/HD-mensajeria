import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { auth } from '../firebase/usuarios'
import { useHistory } from 'react-router-dom';



const navbar = (props) =>  {

    const history = useHistory()

    const cerrarSesion = () => {
        auth.signOut()
        .then(() => {
            history.push('/IniciarSesion')
        })
    }
  return (
    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <div className="container-fluid">
            
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* < img src={"/logohd"} alt="" width="30" height="24" className="d-inline-block align-text-top"/> */}
                             <Link className="navbar-brand text-info" to="/">HD MENSAJERIA</Link>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/" activeStyle={{ fontWeight: "bold"}}>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/Servicios" activeStyle={{ fontWeight: "bold"}}>Servicios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/Contactanos" activeStyle={{ fontWeight: "bold"}}>Contactanos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/Trabaja-con-nosotros" activeStyle={{ fontWeight: "bold"}}>Trabaja con nosotros</NavLink>
                            </li>
                            {
                                props.firebaseUser !== null ? (
                                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                                        <li className="nav-item">
                                            <button className="btn btn-dark " onClick={() => cerrarSesion()}>Cerrar sesión</button>
                                        </li>
                                    </div>
                              
                                ) : (
                                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                        <ul className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <NavLink className="nav-link text-light" to="/Registrarse" activeStyle={{ fontWeight: "bold"}}>Registrarse</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link text-light" to="/IniciarSesion" activeStyle={{ fontWeight: "bold"}}>Iniciar Sesión</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                         
                                )
                            }
                           
                        </ul>
                    </div>
                </div>
            </nav>

    
  )
}

export default navbar