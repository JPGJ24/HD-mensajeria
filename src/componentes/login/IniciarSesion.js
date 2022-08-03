import React from 'react'
import {useState} from 'react'
import { signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase/usuarios"
import { useHistory } from "react-router-dom";




function IniciarSesion() {

const [user, setUser] = useState({email: '', password: ''});

const history = useHistory()
const [error, setError] = useState();

const handleChange= ({target: {name,value}}) =>
setUser({...user, [name]: value})

const handleSubmit = async (e) =>{
  e.preventDefault()
  
  

  
  try {
  
    await signInWithEmailAndPassword(auth,user.email, user.password);
    history.push('/Servicios')
    e.target.reset()
    
  } catch (error) {
    console.log(error)
    setError(error.message)
    if(error.code === 'auth/user-not-found'){
      setError('Usuario no existe')
      return
  }
  if(error.code === 'auth/invalid-email'){
      setError('Email no válido')
      return
  }

  if(error.code === 'auth/internal-error'){
      setError('Completar los campos porfavor')
      return
  }
  if(error.code === 'auth/wrong-password'){
      setError('Contraseña incorrecta')
      return
  }
     
  }
   
}

const noTienesCuenta = () =>{
  history.push('/Registrarse')
}

const recuperarContraseña = () =>{
  history.push('/RecuperarContraseña')
}

  return (

    <div className='mt-5'>
        <h3 className='text-center'>Iniciar Sesión</h3>
          
          <div className='row justify-content-center md:w-1/2 lg:w-2/5 mx-5'>
            <div className='col-12 col-sm-8 col-md-6 col-xl-4'>

                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label htmlFor="email" className="col-form-label">Correo electronico</label>
                          <input type="email"
                                  name="email"
                                  placeholder="example@example.com"
                                  className="form-control" 
                                  onChange={handleChange}/>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="password" className="col-form-label ">Constraseña:</label>
                          <input type="password" 
                                  name="password"
                                  placeholder="******" 
                                  className="form-control" 
                                  onChange={handleChange}/>
                      </div>


                      {error &&<p className="alert alert-danger" role="alert">{error}</p>}

                      <button className="btn btn-dark w-100 btn-block mb-2"  type='submit' >Acceder</button>
                      <button className="btn btn-primary w-100 btn-block mb-2" onClick={() => noTienesCuenta() }  >¿No tienes cuenta?</button>
                      <button className="btn btn-secondary w-100 btn-block mb-2" onClick={() => recuperarContraseña() }  >Olvide mi contraseña</button>

                  </form>

            </div>
          </div>
      

            
            
    </div>


  )
}

export default IniciarSesion
