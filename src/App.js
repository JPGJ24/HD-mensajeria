import React from 'react';
import Navbar from './componentes/navegacion/navbar.js';
import Home from './componentes/paginas/home.js';
import Services from './componentes/paginas/services.js';
import Login from './componentes/login/login.js';
import CreateUser from './componentes/login/create-user.js';
import PasswordReset from './componentes/login/password-reset';
import MessagesChecked from './componentes/mensajes/messages-checked.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./componentes/firebase/Users";
import {useState, useEffect} from 'react';


function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);

          useEffect(() => {
            auth.onAuthStateChanged(user => {
              if(user){
                setFirebaseUser(user);
              }else {
                setFirebaseUser(null);
              }
            })
          });
  return firebaseUser !== false ? ( 
  

    <Router>
      <div>
            <Navbar firebaseUser={firebaseUser} />
            <Switch>
                  <Route path='/' exact component={Home}/>
                  <Route path='/services' component={Services}/>
                  <Route path='/messages-checked' component={MessagesChecked}/>
                  <Route path='/create-user' component={CreateUser}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/password-reset' component={PasswordReset}/>
            </Switch>
      </div>
    </Router>
) : (
  <div className="sk-chase">
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
  <div className="sk-chase-dot"></div>
</div>
)
}

export default App;
