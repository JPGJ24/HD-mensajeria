import React from 'react';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';
import {faFeatherPointed,
      faHippo,
      faTriangleExclamation,  
      faDrumstickBite,
      faEnvelopeOpenText, 
      faClockRotateLeft,
      faEarthAmericas,
      faDolly} from '@fortawesome/free-solid-svg-icons';
      
     

 const Services = () => {

 const [list, setList] = useState([]);
 const [name, setName] = useState('');
 const [lastName, setLastName] = useState('');
 const [pickUp, setPickUp] = useState('');
 const [deliver, setDeliver] = useState('');
 const [placePickUp, setPlacePickUp] = useState('');
 const [placeDeliver, setPlaceDeliver] = useState('');
 const [pickupContact, setPickupContact] = useState('');
 const [deliveryContact, setDeliveryContact] = useState('');
 const [date, setDate] = useState('');
 const [timeZone, setTimeZone] = useState('');
 const [paga, setPaga] = useState('');
 const [vehicle, setVehicle] = useState('');
 const [error, setError] = useState(false);
 const history = useHistory()


    const sendEmail = (e) => {
      e.preventDefault();
      
          if([list, name, lastName, pickUp, deliver, placeDeliver, placePickUp, pickupContact, deliveryContact,
            date, timeZone, paga, vehicle].includes('')){

              setError(true)
         return
         }
     setError(false)
  
      emailjs.sendForm('service_m255rod', 'template_o4phjud', e.target, 'T5iglbnWxYbO2OHS1')
        .then((result) => {
          history.push('/messages-checked')
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

		const handleClick = (seleccionado, e) => {
	
      if(!e.target.checked){
        setList(prev => prev.filter(fruit => fruit !== seleccionado ))
      } else{
        setList(prev => [...prev, seleccionado])
      }
	
		};
 return (

      
    <div className='row justify-content-center md:w-1/2 lg:w-2/5 mx-5'>
            <h3 className="fs-5 text-center form-label my-5">Te ofrecemos los siguientes servicios</h3>
            
              <form onSubmit={sendEmail}
                    className="row g-3 border border-2 rounded justify-content-center" >
               <div className="row mb-4">
                  <div className="col-sm-6">
                    <div className="card border border-0 ">
                      <div className="card-body "
                            id='flexSwitchCheckDefault'>
                         <div className="h2 text-center">
                              <FontAwesomeIcon icon={faFeatherPointed} />
                         </div>
                                <h5 className="card-title text-center">Articulos Livianos</h5>
                                <p className="card-text text-center">Objetos o paquetes que no superen los 5 kilogramos de peso, así el traslado será más efectivo y seguro. </p>
                         <div className="form-check form-switch ">
                              <input className="form-check-input"
                                     name='Liviano'
                                     type="checkbox" 
                                     value="Articulos Livianos"
                                     onChange={(e) => handleClick('Articulos Livianos',e)}/>
                              <label className="form-check-label text-primary" 
                                     htmlFor="checkbox">Seleccionar
                              </label>
                         </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className=" col-sm-6 ">
                      <div className="card border border-0">
                        <div className="card-body">
                          <div className="h2 text-center">
                              <FontAwesomeIcon icon={faHippo} />
                          </div>
                                <h5 className="card-title text-center">Articulos Pesados</h5>
                                <p className="card-text text-center">Objetos o paquetes que superen los 5 kilogramos de peso, asi el traslado sera más efectivo y seguro. </p>
                          <div className="form-check form-switch">
                               <input className="form-check-input"
                                      name='Pesados'
                                      type="checkbox"                       
                                      value="Articulos Pesados"
                                      onChange={(e) => handleClick('Articulos Pesados',e)}/>
                               <label className="form-check-label text-primary"  
                                      htmlFor="flexSwitchCheckDefault">Seleccionar
                               </label>
                          </div>
                       </div>
                     </div>
                  </div>
                </div>
                
                <div className="row mb-4">
                    <div className="col-sm-6">
                      <div className="card border border-0">
                        <div className="card-body">
                           <div className="h2 text-center">
                              <FontAwesomeIcon icon={faTriangleExclamation} />
                           </div>
                                  <h5 className="card-title text-center">Articulos Delicados o frágiles</h5>
                                  <p className="card-text text-center">Objetos o paquetes que deben ser tratados con delicadeza y mayor cuidado a la hora de su traslado.</p>
                           <div className="form-check form-switch">
                                <input className="form-check-input" 
                                       name='Delicados'
                                       type="checkbox"                      
                                       value="Articulos Delicados o frágiles"
                                       onChange={(e) => handleClick('Articulos Delicados o frágiles',e)}/>
                                <label className="form-check-label text-primary" 
                                       htmlFor="flexSwitchCheckDefault">Seleccionar
                                </label>
                           </div>
                        </div>
                      </div>
                   </div>       

                    <div className="col-sm-6">
                      <div className="card border border-0">
                        <div className="card-body">
                          <div className="h2 text-center">
                              <FontAwesomeIcon icon={faDrumstickBite} />
                          </div>
                                <h5 className="card-title text-center">Articulos Perecedero</h5>
                                <p className="card-text text-center">Objetos o paquetes que deben ser trasladados lo más pronto posible para conservar su duración limitada.</p>
                           <div className="form-check form-switch">
                                  <input className="form-check-input"
                                         name='Perecedero'
                                         type="checkbox"
                                         value="Articulos Perecedero"
                                         onChange={(e) => handleClick('Articulos Perecedero',e)}/>
                                  <label className="form-check-label text-primary" 
                                         htmlFor="flexSwitchCheckDefault">Seleccionar
                                  </label>
                           </div>
                        </div>
                      </div>
                    </div>
                </div>
                
                  <div className="row mb-4">
                      <div className="col-sm-6">
                          <div className="card border border-0">
                             <div className="card-body">
                                <div className="h2 text-center">
                                      <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                </div>
                                      <h5 className="card-title text-center">Documentación</h5>
                                      <p className="card-text text-center">Los documentos serán trasladados discretamente, asegurando la privacidad del mismo y garantizando la entrega.</p>
                                 <div className="form-check form-switch">
                                      <input className="form-check-input" 
                                             name='Documentos'
                                             type="checkbox"                        
                                             value="Documentacíon"
                                             onChange={(e) => handleClick('Documentacíon',e)}/>
                                      <label className="form-check-label text-primary" 
                                             htmlFor="flexSwitchCheckDefault">Seleccionar
                                      </label>
                                 </div>
                              </div>
                            </div>
                       </div>

                   <div className="col-sm-6">
                      <div className="card border border-0">
                          <div className="card-body">
                            <div className="h2 text-center">
                                <FontAwesomeIcon icon={faClockRotateLeft} />
                            </div>
                                <h5 className="card-title text-center">Prioritarios</h5>
                                <p className="card-text text-center">Se dara una atención prioritaria dependiendo los requerimientos solicitados, asi el traslado se hará lo más rapido posible.</p>
                            <div className="form-check form-switch">
                                  <input className="form-check-input"
                                         name='Prioritarios'
                                         type="checkbox"                      
                                         value="Prioritarios"
                                         onChange={(e) => handleClick('Prioritarios',e)}/>
                                  <label className="form-check-label text-primary" 
                                        htmlFor="flexSwitchCheckDefault">Seleccionar
                                  </label>
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <div className="card border border-0">
                              <div className="card-body">
                                 <div className="h2 text-center">
                                    <FontAwesomeIcon icon={faEarthAmericas} />
                                 </div>
                                      <h5 className="card-title text-center">Masivo</h5>
                                      <p className="card-text text-center">Más de 3 articulos para su trasladado, brindando una atención personalizada para cubrir necesidades.</p>
                                  <div className="form-check form-switch">
                                        <input className="form-check-input" 
                                               name='Masivo'
                                               type="checkbox"
                                               value="Masivo"
                                               onChange={(e) => handleClick('Masivo',e)}/>
                                        <label className="form-check-label text-primary" 
                                              htmlFor="flexSwitchCheckDefault">Seleccionar
                                        </label>
                                  </div>
                               </div>
                           </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card border border-0">
                                <div className="card-body">
                                    <div className="h2 text-center">
                                           <FontAwesomeIcon icon={faDolly} />
                                    </div>  
                                          <h5 className="card-title text-center">Cedi</h5>
                                          <p className="card-text text-center">Almacenar articulos u objetos para luego ser trasladados en diferentes días.</p>
                                    <div className="form-check form-switch">
                                          <input className="form-check-input" 
                                                 name='Cedi'
                                                 type="checkbox"
                                                 value="Cedi"
                                                 onChange={(e) => handleClick('Cedi',e)}/>
                                          <label className="form-check-label text-primary" 
                                                htmlFor="flexSwitchCheckDefault">Seleccionar
                                          </label>
                                    </div>
                                 </div>
                              </div>
                          </div>
                    </div>
        {error &&<p className="alert alert-danger" role="alert">Seleccionar un Servicio</p>}
              
                    <h3 className="fs-5 text-center form-label mt-3">Completa la siguiente información</h3>
      
                    <div className='row justify-content-center mt-5 '>
                        <div className='col-12 col-sm-9 col-md-9 col-xl-8 '>
                            <div className="row g-3 border border-2 rounded justify-content-center" >
                              <div className="col-md-5">
                                   <label htmlFor="text"  
                                          className="fw-bolder form-label">Nombre
                                   </label>
                                    <input type="text"
                                    name='nombre' 
                                    className="form-control" 
                                    placeholder="" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}/>
                              </div>

                              <div className="col-md-5">
                                    <label htmlFor="text"  
                                          className="fw-bolder form-label">Apellido
                                    </label>
                                    <input type="text"
                                          name='apellido' 
                                          className="form-control" 
                                          placeholder="" 
                                          value={lastName}
                                          onChange={(e) => setLastName(e.target.value)}/>
                              </div>

                              <div className="col-md-5">
                                    <label htmlFor="text"  
                                          className="fw-bolder form-label">Direccion de recogida
                                    </label>
                                    <input type="text"
                                          name='recogida' 
                                          className="form-control" 
                                          placeholder="Direccion de residencia*" 
                                          value={pickUp}
                                          onChange={(e) => setPickUp(e.target.value)}/>
                              </div>

                              <div className="col-md-5">
                                    <label htmlFor="text"  
                                          className="fw-bolder form-label">Direccion de entrega
                                    </label>
                                    <input type="text"
                                          name='entrega'
                                          className="form-control" 
                                          placeholder="Direccion de residencia*" 
                                          value={deliver}
                                          onChange={(e) => setDeliver(e.target.value)}/>
                              </div>

                              <div className="col-md-5">
                                    <label htmlFor="select" 
                                          className="fw-bolder form-label">Municipio de recogida
                                    </label>
                                    <select className="form-select" 
                                            name='municipioRecogida'
                                            aria-label="Default select example"
                                            value={placePickUp}
                                            onChange={(e) => setPlacePickUp(e.target.value)}>
                                                    <option select="">Seleccionar</option>
                                                    <option defaultValue="1">Medellin</option>
                                                    <option defaultValue="2">Envigado</option>
                                                    <option defaultValue="3">Sabaneta</option>
                                                    <option defaultValue="4">Itagui</option>
                                                    <option defaultValue="5">La estrella</option>
                                                    <option defaultValue="6">Caldas</option>
                                                    <option defaultValue="7">Barbosa</option>
                                                    <option defaultValue="8">Bello</option>
                                                    <option defaultValue="9">Copacabana</option>
                                                    <option defaultValue="10">Oriente</option>
                                                    <option defaultValue="11">Occidente</option>                     
                                    </select>
                              </div>

                              <div className="col-md-5">
                                    <label htmlFor="select"
                                          className="fw-bolder form-label">Municipio de entrega
                                    </label>
                                    <select className="form-select" 
                                            name='mentrega'
                                            aria-label="Default select example"
                                            value={placeDeliver}
                                            onChange={(e) => setPlaceDeliver(e.target.value)}>
                                                    <option select="">Seleccionar</option>
                                                    <option defaultValue="1">Medellin</option>
                                                    <option defaultValue="2">Envigado</option>
                                                    <option defaultValue="3">Sabaneta</option>
                                                    <option defaultValue="4">Itagui</option>
                                                    <option defaultValue="5">La estrella</option>
                                                    <option defaultValue="6">Caldas</option>
                                                    <option defaultValue="7">Barbosa</option>
                                                    <option defaultValue="8">Bello</option>
                                                    <option defaultValue="9">Copacabana</option>
                                                    <option defaultValue="10">Oriente</option>
                                                    <option defaultValue="11">Occidente</option>
                                  </select>
                          </div>

                          <div className="col-md-5">
                                <label htmlFor="text" 
                                      className="fw-bolder form-label">Contacto de recogida
                                </label>
                                <input type="text" 
                                      name='contactoRecogida'
                                      className="form-control" 
                                      placeholder="+57 Contacto" 
                                      value={pickupContact}
                                      onChange={(e) => setPickupContact(e.target.value)}/>
                          </div>

                          <div className="col-md-5">
                                <label  htmlFor="text" 
                                        className="fw-bolder form-label">Contacto de entrega
                                </label>
                                <input type="text" 
                                      name='contactoEntrega'
                                      className="form-control" 
                                      placeholder="+57 Contacto"  
                                      value={deliveryContact}
                                      onChange={(e) => setDeliveryContact(e.target.value)}/>
                          </div>

                          <div className="col-md-5">
                                <label htmlFor="date" 
                                      className="fw-bolder form-label">Fecha del servicio
                                </label>
                                  <input className="form-control"
                                        id="date" 
                                        name="date" 
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}/>                            
                          </div>

                          <div className="col-md-5">
                                <label htmlFor="select" 
                                      className="fw-bolder form-label">Franja horaria</label>
                                <select className="form-select" 
                                        name="horario"
                                        aria-label="Default select example"
                                        value={timeZone}
                                        onChange={(e) => setTimeZone(e.target.value)}>
                                <option select="">Seleccionar</option>
                                <option defaultValue="1">08:00 - 11:59 - Mañana</option>
                                <option defaultValue="2">12:00 - 18:00 - Tarde</option>
                              </select>
                          </div>

                          <div className="col-md-5">
                                <label htmlFor="select" 
                                      className="fw-bolder form-label">Forma de pago
                                </label>
                                <select className="form-select"
                                        name="pago"
                                        aria-label="Default select example"
                                        value={paga}
                                        onChange={(e) => setPaga(e.target.value)}>
                                <option select="">Seleccionar</option>
                                <option defaultValue="1">Pago contra entrega</option>
                                <option defaultValue="2">Pago Transferencia</option>
                              </select>
                          </div>

                          <div className="col-md-5">
                                <label htmlFor="select" 
                                      className="fw-bolder form-label">Tipo de vehiculo
                                </label>
                                <select className="form-select" 
                                        name="vehiculo"
                                        aria-label="Default select example"
                                        value={vehicle}
                                        onChange={(e) => setVehicle(e.target.value)}>
                                <option select="">Seleccionar</option>
                                <option defaultValue="1">Motocicleta</option>
                                <option defaultValue="2">Automovil</option>
                              </select>
                          </div>
                       </div> 
          {error &&<p className="alert alert-danger mt-3" role="alert">Todos los campos son obligatorios</p>}
                  </div>     
              </div>
                <button className="btn btn-primary mt-3 mb-3 col-md-10" type='submit'  >Enviar servicio</button>
          </form>            
    </div>                

		);
	  };
  export default Services;

