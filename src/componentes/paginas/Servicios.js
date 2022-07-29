import React from 'react'
import {useState} from 'react'


// function Servicios() {

	
	const Servicios = () => {

		const [lista, setLista] = useState([]);
	   
		const handleClick = (seleccionado, e) => {
		// 	const listaActual = lista
		//   const nuevaLista = listaActual.push(seleccionado);
		const nuevaLista = new Set([...lista, seleccionado])
		// if () {
			
		//   } else {
			

			
		//   }
		  setLista(nuevaLista);
		  

		  
		  
		  console.log(nuevaLista)
		};
	   
		return (
	<div>

			    <br/>
			      <h3 className="fs-5 text-center">Te ofrecemos los siguientes servicios</h3>

			<input type="checkbox" onChange={(e) => handleClick('opcion1', e)} />
			<input type="checkbox" onChange={(e) => handleClick('opcion2', e)} />
			<input type="checkbox" onChange={(e) => handleClick('opcion3', e)} />



	<div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Articulos Livianos</h5>
            <p className="card-text">Objeto o paquete que no superen los 15 kilogramos de peso, asi el traslado sera mas efectivo y seguro. </p>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
          </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Articulos Pesados</h5>
            <p className="card-text">Objeto o paquete que superen los 15 kilogramos de peso, asi el traslado sera más efectivo y seguro. </p>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
          </div>
          </div>
        </div>
      </div>
    </div>

	<div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Articulos Delicados o frágiles</h5>
            <p className="card-text">Objeto o paquete que debe ser tratado con delicadeza y el mayor de los cuidado a la hora de trasladarlo</p>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
          </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Articulos Perecedero</h5>
            <p className="card-text">Objeto o paquete que debe ser trasladado lo más pronto posible para conservar su duración limitada.</p>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
          </div>
          </div>
        </div>
      </div>
    </div>

	<div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Documentacíon</h5>
            <p className="card-text">Los documentos seran trasladados, asegurando la privacidad del mismo.</p>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
          </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Prioritarios</h5>
            <p className="card-text">Se dara una atención priorita dependiendo los requerimientos solicitados, asi el traslado se hara lo más rapido posible.</p>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
          </div>
          </div>
        </div>
      </div>
    </div>

	<div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Masivo</h5>
            <p className="card-text">Más de 3 articulos para su trasladado, brindando una atención personalizada para cubrir necesidades.</p>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
          </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Cedi</h5>
            <p className="card-text">Almacenar articulos o objetos para luego ser trasladadas en diferentes días.</p>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Seleccionar</label>
          </div>
          </div>
        </div>
      </div>
    </div>

</div>	

		);
	  };
	
	
  export default Servicios;


    
{/* <form>
			
				<h3>Seleccione un municipio</h3>
				<select>
					<option>Medellin</option>
					<option>Envigado</option>
					<option>Sabaneta</option>
					<option>Itagui</option>
					<option>Barbosa</option>
					<option>Bello</option>
					<option>Copacabana</option>
					<option>Girardota</option>
					<option>La estrella</option>
					<option>Caldas</option>
				</select>
	
			</form> */}
      