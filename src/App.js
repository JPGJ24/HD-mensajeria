import React from 'react';
import MensajeChecked from './componentes/paginas/mensajeChecked.js';
import Navbar from './componentes/navegacion/Navbar.js';
import Inicio from './componentes/paginas/Inicio.js';
import Servicios from './componentes/paginas/Servicios.js';
import TrabajaConNosotros from './componentes/paginas/Trabaja-con-nosotros.js';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import IniciarSesion from './componentes/login/IniciarSesion.js';
import Registrarse from './componentes/login/Registrarse.js';
import RecuperarContraseña from './componentes/login/RecuperarContraseña'
import {auth} from "./componentes/firebase/usuarios"
import {useState, useEffect} from 'react'
// import Logo from './componentes/img/carro11.jpg'





function App() {
  const [firebaseUser, setFirebaseUser] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else {
        setFirebaseUser(null)
      }

    })
  });


  return firebaseUser !== false ? ( 
  

    <Router>
      
      <div>
   
      
        <Navbar firebaseUser={firebaseUser} />
        
        {/* <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/> */}
        <Switch>
          
          <Route path='/' exact component={Inicio}/>
          <Route path='/Servicios' component={Servicios}/>
          <Route path='/mensajeChecked' component={MensajeChecked}/>
          <Route path='/Trabaja-con-nosotros' component={TrabajaConNosotros}/>
          <Route path='/Registrarse' component={Registrarse}/>
          <Route path='/IniciarSesion' component={IniciarSesion}/>
          <Route path='/RecuperarContraseña' component={RecuperarContraseña}/>
        </Switch>
        
        
        </div>
      </Router>




  

) : (
  <div>Cargando...</div>
)
}



export default App;
