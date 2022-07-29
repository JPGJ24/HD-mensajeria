import React from 'react'
import {useState} from 'react'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase/usuarios"
import { useHistory } from 'react-router-dom';



function Registrarse() {

const [user, setUser] = useState({email: '', password: ''});

const history = useHistory()
const [error, setError] = useState();

const handleChange= ({target: {name,value}}) =>
setUser({...user, [name]: value})

const handleSubmit = async (e) =>{
  e.preventDefault()
  

  try {
  
    await createUserWithEmailAndPassword(auth,user.email, user.password);
    history.push('/IniciarSesion')
    e.target.reset()
    
  } catch (error) {
    
    console.log(error)
    setError(error.message)
    if(error.code === 'auth/email-already-in-use'){
      setError('Usuario ya registrado...')
      return
  }
  if(error.code === 'auth/invalid-email'){
      setError('Email no válido')
      return
  }
  if(error.code === 'auth/weak-password'){
      setError('La contraseña debe tener al menos 6 caracteres')
      return
  }
  if(error.code === 'auth/internal-error'){
      setError('Completar los campos porfavor')
      return
  }
  
    
  }
  
}

const yaTienesCuenta = () =>{
  history.push('/IniciarSesion')
}

  return (

    <div className='mt-5'>
        <h3 className='text-center'>Registro de usuarios</h3>
          
          <div className='row justify-content-center'>
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
                          <label htmlFor="nameLastName" className="col-form-label">Nombres y apellidos</label>
                          <input type="text" 
                                  name="nameLastName" 
                                  className="form-control"
                                  onChange={handleChange}/>
                        </div>


                        <div className="mb-3">
                          <label htmlFor="password" className="col-form-label ">Crear constraseña:</label>
                          <input type="password" 
                                  name="password"
                                  placeholder="******" 
                                  className="form-control" 
                                  onChange={handleChange}/>
                      </div>


                      {error &&<p className="alert alert-danger" role="alert">{error}</p>}

                      <button className="btn btn-dark w-100 btn-block mb-2"  type='submit' >Regístrarse</button>
                      <button className="btn btn-primary w-100 btn-block mb-2" onClick={() => yaTienesCuenta() }   >¿Ya tienes cuenta?</button>

                  </form>


            </div>
          </div>
      

            
            
    </div>


  )
}

export default Registrarse
