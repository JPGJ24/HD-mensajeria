import React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";
import { auth } from '../firebase/Users';
import { sendPasswordResetEmail} from "firebase/auth";
import{useCallback} from 'react';

const PasswordReset = () => {

    const [user, setUser] = useState({email: ''});
    const history = useHistory();
    const [error, setError] = useState();

    const handleChange= ({target: {name,value}}) =>
        setUser({...user, [name]: value})

    const handleSubmit = async (e) =>{
         e.preventDefault()
  
  try {
    retrieve()
  
  } catch (error) {
    setError(error.message)

  if(error.code === 'auth/invalid-email'){
      setError('Email no válido')
      return
  }

  if(error.code === 'auth/internal-error'){
      setError('Completar los campos porfavor')
      return
  }
  if(error.code === 'auth/missing-email'){
      setError('Completar los campos porfavor')
      return
  }
  if(error.code === 'auth/user-not-found'){
      setError('Completar los campos porfavor')
      return
  }
     
  }
  
}
const retrieve = useCallback(
    async () => {
        try {
            await sendPasswordResetEmail(auth, user.email)
                console.log('correo enviado')
            history.push('/login')
         
            
        } catch (error) {
            console.log(error)
            setError(error.message)
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
                return
            }
    
            if(error.code === 'auth/missing-email'){
                setError('Completar los campos porfavor')
                return
            }
            if(error.code === 'auth/user-not-found'){
                setError('Usuario no registrado')
                return
            }
        }
    },
[user.email, history])




  return (
        <div className='mt-5'>
            <h3 className='text-center'>Recupera tu contraseña</h3>  
              <div className='row justify-content-center md:w-1/2 lg:w-2/5 mx-5'>
                <div className='col-12 col-sm-8 col-md-6 col-xl-4'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                             <label htmlFor="email"
                                    className="col-form-label">Correo electronico
                             </label>
                             <input type="email"
                                    name="email"
                                    placeholder="example@example.com"
                                    className="form-control" 
                                    onChange={handleChange}/>
                        </div>
          {error &&<p className="alert alert-danger" role="alert">{error}</p>}
                        <button className="btn btn-dark w-100 btn-block mb-2"  type='submit' >Enviar</button>
                    </form>
                </div>
              </div>        
          </div>
  )
};

export default PasswordReset;