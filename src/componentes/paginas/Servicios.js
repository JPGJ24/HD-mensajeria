import React from 'react'
import {useState} from 'react'


	
	const Servicios = () => {

		const [lista, setLista] = useState([]);
		const [recogida, setRecogida] = useState('');
		const [entrega, setEntrega] = useState('');
		const [munucipioRecogida, setMunicipioRecogida] = useState('');
		const [municipioEntrega, setMunicipioEntrega] = useState('');
		const [contactoRecogida, setContactoRecogida] = useState('');
		const [contactoEntrega, setContactoEntrega] = useState('');
		const [fecha, setFecha] = useState('');
		const [horario, setHorario] = useState('');
		const [pago, setpago] = useState('');
		const [vehiculo, setVehiculo] = useState('');
    const [error, setError] = useState(false);

	   
		const handleClick = (seleccionado, ) => {
		// // 	const listaActual = lista
		// //   const nuevaLista = listaActual.push(seleccionado);
		const nuevaLista = new Set([...lista, seleccionado])
   
        

		  setLista(nuevaLista);
		  console.log(nuevaLista)
		};

    const handleSubmit = async (e) =>{
      e.preventDefault()
      console.log('enviando formulario........')

      if([lista, recogida, entrega, munucipioRecogida, municipioEntrega,
         contactoRecogida, contactoEntrega, fecha, horario, pago, vehiculo].includes('')){

              setError(true)
         return;
         }
     setError(false)
    } 

	   
		return (

      
    <div className='row justify-content-center md:w-1/2 lg:w-2/5 mx-5'>
            <h3 className="fs-5 text-center form-label my-5">Te ofrecemos los siguientes servicios</h3>

           
                    

{/*          
              <input type="checkbox" onChange={(e) => handleClick('opcion1', e)} />
              <input type="checkbox" onChange={(e) => handleClick('opcion2', e)} />
              <input type="checkbox" onChange={(e) => handleClick('opcion3', e)} /> */}

            

              <div className="row mb-4">
                  <div className="col-sm-6">
                    <div className="card border-secundary">
                      <div className="card-body"
                      id='flexSwitchCheckDefault'>
                        <h5 className="card-title">Articulos Livianos</h5>
                        <p className="card-text">Objeto o paquete que no superen los 15 kilogramos de peso, asi el traslado sera mas efectivo y seguro. </p>
                        <div className="form-check form-switch">
                        <input className="form-check-input"
                        id='flexSwitchCheckDefault'
                        name='livianos'
                        type="checkbox" 
                        role="switch" 
                        value={lista}
                        onChange={(e) =>handleClick(e.target.value)}/>
                        <label className="form-check-label text-primary" htmlFor="checkbox">Seleccionar</label>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className=" col-sm-6 ">
                    <div className="card border-secundary">
                      <div className="card-body">
                        <h5 className="card-title">Articulos Pesados</h5>
                        <p className="card-text">Objeto o paquete que superen los 15 kilogramos de peso, asi el traslado sera más efectivo y seguro. </p>
                        <div className="form-check form-switch">
                        <input className="form-check-input"
                        name='pesados'
                         type="checkbox"
                          role="switch"
                           id="flexSwitchCheckDefault"/>
                        <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="row mb-4">
                  <div className="col-sm-6">
                    <div className="card border-secundary">
                      <div className="card-body">
                        <h5 className="card-title">Articulos Delicados o frágiles</h5>
                        <p className="card-text">Objeto o paquete que debe ser tratado con delicadeza y el mayor de los cuidado a la hora de trasladarlo.</p>
                        <div className="form-check form-switch">
                        <input className="form-check-input" 
                        name='delicados'
                        type="checkbox" 
                        role="switch" 
                        id="flexSwitchCheckDefault"/>
                        <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card border-secundary">
                      <div className="card-body">
                        <h5 className="card-title">Articulos Perecedero</h5>
                        <p className="card-text">Objeto o paquete que debe ser trasladado lo más pronto posible para conservar su duración limitada.</p>
                        <div className="form-check form-switch">
                        <input className="form-check-input"
                        name='perecedero'
                         type="checkbox" 
                         role="switch" 
                         id="flexSwitchCheckDefault"/>
                        <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="row mb-4">
                  <div className="col-sm-6">
                    <div className="card border-secundary">
                      <div className="card-body">
                        <h5 className="card-title">Documentacíon</h5>
                        <p className="card-text">Los documentos seran trasladados discretamente, asegurando la privacidad del mismo y garantizando la entrega.</p>
                        <div className="form-check form-switch">
                        <input className="form-check-input" 
                        name='documentos'
                        type="checkbox" 
                        role="switch" 
                        id="flexSwitchCheckDefault"/>
                        <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card border-secundary">
                      <div className="card-body">
                        <h5 className="card-title">Prioritarios</h5>
                        <p className="card-text">Se dara una atención priorita dependiendo los requerimientos solicitados, asi el traslado se hara lo más rapido posible.</p>
                        <div className="form-check form-switch">
                        <input className="form-check-input"
                        name='prioritarios'
                         type="checkbox"
                          role="switch" 
                          id="flexSwitchCheckDefault"/>
                        <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="row mb-4">
                  <div className="col-sm-6">
                    <div className="card border-secundary">
                      <div className="card-body">
                        <h5 className="card-title">Masivo</h5>
                        <p className="card-text">Más de 3 articulos para su trasladado, brindando una atención personalizada para cubrir necesidades.</p>
                        <div className="form-check form-switch">
                        <input className="form-check-input" 
                        name='masivo'
                        type="checkbox"
                         role="switch" 
                         id="flexSwitchCheckDefault"/>
                        <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card border-secundary">
                      <div className="card-body">
                        <h5 className="card-title">Cedi</h5>
                        <p className="card-text">Almacenar articulos o objetos para luego ser trasladadas en diferentes días.</p>
                        <div className="form-check form-switch">
                        <input className="form-check-input" 
                        name='cedi'
                        type="checkbox"
                         role="switch"
                          id="flexSwitchCheckDefault"/>
                        <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              
                <h3 className="fs-5 text-center form-label mt-3">Completa la siguiente información</h3>
      
      <div className='row justify-content-center mt-5'>
            <div className='col-12 col-sm-9 col-md-9 col-xl-8 '>

                  <form 
                  onSubmit={handleSubmit}
                  className="row g-3 " >
                        <div className="col-md-5">
                          <label htmlFor="text"  className="fw-bolder form-label">Direccion de recogida</label>
                          <input type="text" 
                          className="form-control" 
                          placeholder="Direccion de recidencia*" 
                          value={recogida}
                          onChange={(e) => setRecogida(e.target.value)}/>
                        </div>

                        <div className="col-md-5">
                          <label htmlFor="text"  className="fw-bolder form-label">Direccion de entrega</label>
                          <input type="text"
                           className="form-control" 
                           placeholder="Direccion de recidencia*" 
                           value={entrega}
                          onChange={(e) => setEntrega(e.target.value)}/>
                        </div>

                          <div className="col-md-5">
                          <label htmlFor="select" className="fw-bolder form-label">Municipio de recogida</label>
                          <select className="form-select" 
                          aria-label="Default select example"
                          value={munucipioRecogida}
                          onChange={(e) => setMunicipioRecogida(e.target.value)}>
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
                            <label htmlFor="select" className="fw-bolder form-label">Municipio de entrega</label>
                            <select className="form-select" 
                            aria-label="Default select example"
                            value={municipioEntrega}
                            onChange={(e) => setMunicipioEntrega(e.target.value)}>
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
                            <label htmlFor="text"  className="fw-bolder form-label">Contacto de recogida</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="+57 Contacto" 
                            value={contactoRecogida}
                          onChange={(e) => setContactoRecogida(e.target.value)}/>
                          </div>

                          <div className="col-md-5">
                            <label  htmlFor="text" className="fw-bolder form-label">Contacto de entrega</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="+57 Contacto"  
                            value={contactoEntrega}
                          onChange={(e) => setContactoEntrega(e.target.value)}/>
                          </div>

                          <div className="col-md-5">
                            <label htmlFor="date" className="fw-bolder form-label">Fecha del servicio</label>
                              <input className="form-control"
                              id="date" 
                              name="date" 
                              type="date"
                              value={fecha}
                          onChange={(e) => setFecha(e.target.value)}/>
                              
                          </div>

                          <div className="col-md-5">
                            <label htmlFor="select" className="fw-bolder form-label">Franja horaria</label>
                            <select className="form-select" 
                            aria-label="Default select example"
                            value={horario}
                            onChange={(e) => setHorario(e.target.value)}>
                            <option select="">Seleccionar</option>
                            <option defaultValue="1">08:00 - 11:59 - Mañana</option>
                            <option defaultValue="2">12:00 - 18:00 - Tarde</option>
                          </select>
                          </div>

                          <div className="col-md-5">
                            <label htmlFor="select" className="fw-bolder form-label">Forma de pago</label>
                            <select className="form-select"
                            aria-label="Default select example"
                            value={pago}
                            onChange={(e) => setpago(e.target.value)}>
                            <option select="">Seleccionar</option>
                            <option defaultValue="1">Pago contra entrega</option>
                            <option defaultValue="2">Pago Transferencia</option>
                          </select>
                          </div>

                          <div className="col-md-5">
                            <label htmlFor="select" className="fw-bolder form-label">Tipo de vehiculo</label>
                            <select className="form-select" 
                            aria-label="Default select example"
                            value={vehiculo}
                            onChange={(e) => setVehiculo(e.target.value)}>
                            <option select="">Seleccionar</option>
                            <option defaultValue="1">Motocicleta</option>
                            <option defaultValue="2">Automovil</option>
                          </select>
                          </div>

                          {error &&<p className="alert alert-danger" role="alert">Todos los campos son obligatorios</p>}

                          <button className="btn btn-primary mt-3 mb-3 col-md-10" type='submit'  >Enviar servicio</button>
              
                   </form>
                 
           </div>
      </div>
                    
  </div>                

		);
	  };
	
	
  export default Servicios;

