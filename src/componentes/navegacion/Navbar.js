import React from 'react';
import {NavLink} from 'react-router-dom';
import { auth } from '../firebase/Users';
import { useHistory } from 'react-router-dom';





const navbar = (props) =>  {

    const history = useHistory();

    const signOff = () => {
        auth.signOut()
        .then(() => {
            history.push('/login')
        })
    };
  return (
    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">           
                <div className="container-fluid">
            
                        <button className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo01"
                                aria-controls="navbarTogglerDemo01"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                             <div className="navbar-brand text-info" >HD MENSAJERIA</div>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <ul className="navbar-nav ms-auto">                     
                                        {
                                            props.firebaseUser !== null ? (
                                                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link text-light" to="/" activeStyle={{ fontWeight: "bold"}}>Inicio</NavLink>
                                                        </li>
                                                         <li className="nav-item">
                                                            <NavLink className="nav-link text-light" to="/services" activeStyle={{ fontWeight: "bold"}}>Servicios</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <button className="btn btn-dark " onClick={() => signOff()}>Cerrar sesión</button>
                                                        </li>
                                                    </div>                                
                                            ) : (
                                                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                                        <ul className="navbar-nav ms-auto">
                                                            <li className="nav-item">
                                                                <NavLink className="nav-link text-light" to="/create-user" activeStyle={{ fontWeight: "bold"}}>Registrarse</NavLink>
                                                            </li>
                                                            <li className="nav-item">
                                                                <NavLink className="nav-link text-light" to="/login" activeStyle={{ fontWeight: "bold"}}>Iniciar Sesión</NavLink>
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
};

export default navbar;