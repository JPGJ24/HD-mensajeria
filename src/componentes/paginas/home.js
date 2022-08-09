import React from 'react';
import Logo from '../img/Logo.jpg';
import Cedi from '../img/Cedi.jpg';
import WhatsApp from '../img/Whatsapp.png';
import Sim from '../img/Sim.png';
import Instagram from '../img/Instagram.png';
import Gmail from '../img/Gmail.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMotorcycle,
        faMapLocationDot,
        faTruckFast,
        faBriefcase,
        faPeopleCarryBox,
        faHeadset}
        from '@fortawesome/free-solid-svg-icons';


function Home() {
  return (
      <div className='container' >
                                                
            <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="true">
                  <div className="carousel-indicators" >
                        <button type="button" data-bs-target="#carouselExampleIndicators" 
                                data-bs-slide-to="0" className="active" aria-current="true"
                                aria-label="Slide 1">
                        </button>

                        <button type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1" aria-label="Slide 2">
                        </button>

                        <button type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2" aria-label="Slide 3">
                        </button>
                  </div>

                  <div className="carousel-inner mt-2" >
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src={Logo}
                            height="400"
                            width="400"
                            className="rounded mx-auto d-block img-fluid"
                            alt="logo"/>
                        </div>

                        <div className="carousel-item" data-bs-interval="3000">
                              <img src={Sim} 
                              height="600" 
                              width="600" 
                              className="rounded mx-auto d-block img-fluid" 
                              alt="sim"/>
                        </div>

                        <div className="carousel-item" data-bs-interval="3000">
                              <img src={Cedi} 
                              height="600" 
                              width="600" 
                              className="rounded mx-auto d-block img-fluid" 
                              alt="cedi"/>
                        </div>
                  </div>
                        <button className="carousel-control-prev"
                                type="button" data-bs-target="#carouselExampleIndicators" 
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" 
                                  aria-hidden="true">
                            </span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next"
                                type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon"
                                  aria-hidden="true">      
                            </span>
                            <span className="visually-hidden">Next</span>
                        </button>
            </div>
                <div className= "row my-5 text-center">
                        <div className="col-md-4">
                            <div className="text-center h1">
                                <FontAwesomeIcon icon={faMotorcycle} />
                            </div>
                                <p className=' text-muted'>Somos tu mejor aliado</p>
                                <h4 className='text-uppercase'>Brindamos confianza y efectividad</h4>
                                <p className='font-weight-light'>Siempre tendrás un agente a disposición para tu requerimiento.</p>
                        </div>

                        <div className="col-md-4">
                            <div className="text-center h1">
                                <FontAwesomeIcon icon={faMapLocationDot} />
                            </div>
                                <p className=' text-muted'>Llegamos donde nos necesites</p>
                                <h4 className='text-uppercase'>Contamos con personal capacitado</h4>
                                <p className='font-weight-light'>No importa el articulo o el tamaño, nos tomamos en serio lo que a ti te importa.</p>
                        </div>

                        <div className="col-md-4" >
                            <div className="text-center h1">
                                <FontAwesomeIcon icon={faTruckFast} />
                            </div>
                                <p className=' text-muted'>Servicio oportuno y confiable</p>
                                <h4 className='text-uppercase'>Gestionamos tus envíos locales y nacionales</h4>
                                <p className='font-weight-light' id='Contactanos'>Planificación estratégica para la logistica de tu negocio</p>
                        </div>
                </div >
      <hr></hr>                    
        <h4 className='mt-3  text-center text-uppercase '>Nuestros contactos</h4>
              <div className='row my-5 text-center' >
                    <div className='col-md-4'>
                          <a href="https://wa.me/573187421131?text=Estoy%20solicitando%20un%20servicio"
                              target="_blank">
                          <img src={WhatsApp}
                              alt='whatsapp' 
                              className='img-fluid mt-3 ' 
                              height="70" 
                              width="70"/></a>
                          <p className='font-weight-light h6 '>Contacto de WhatsApp</p>
                          <p className=' font-weight-light h6'>(+57) 318 7421131</p>
                        
                
                    </div>

                    <div className='col-md-4'>
                          <a href="https://www.instagram.com/hdmensajeriahenryhr/" 
                             target="_blank">
                          <img src={Instagram} 
                              alt='instagram'
                              className='img-fluid mt-3 '
                              height="70"
                              width="70"/></a>
                          <p className='font-weight-light h6 mt-3'>HD MENSAJERÍA MEDELLIN</p>
                    </div>

                    <div className='col-md-4'>
                          <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=CllgCKCFTNhDTVdHDRCcpJxXPKWGsSkwggTfvKRzhhljLtCQwcCllRzkqCkLbxmVgsMjSGxwlRg" 
                              target="_blank">
                          <img src={Gmail} 
                              alt='gmail'
                              className='img-fluid mt-3 ' 
                              height="70" 
                              width="70"/></a>
                          <p className='font-weight-light h6 mt-3'>HDmensajeria@gmail.com</p>
                    </div>
            </div>
      <hr></hr>
        <h4 className='mt-3  text-center text-uppercase mb-4'>¿Quiénes somos?</h4>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleDark"
                              data-bs-slide-to="0" className="active" aria-current="true" 
                              aria-label="Slide 1">
                      </button>

                      <button type="button" data-bs-target="#carouselExampleDark"
                              data-bs-slide-to="1" aria-label="Slide 2">
                      </button>

                      <button type="button" data-bs-target="#carouselExampleDark" 
                              data-bs-slide-to="2" aria-label="Slide 3">
                      </button>
                </div>
                <div className="carousel-inner">
                      <div className="carousel-item active mb-5 text-center" data-bs-interval="3000">
                            <h5>HDmensajeria</h5>
                            <p>Nos especializamos en servicio de logística y planificación de envíos seguros.</p>
                      </div>
                      <div className="carousel-item text-center mb-5 " data-bs-interval="3000">
                            <h5>Contamos con 4 años en el mercado</h5>
                            <p>Contando con 200 clientes activos y satisfechos con nuestros servicios.</p>
                      </div>
                      <div className="carousel-item text-center mb-5 "data-bs-interval="3000">
                            <h5>Desarrollo continuo de soluciones</h5>
                            <p>Personal capacitado y amplio conocimiento en nomenclatura urbana y rural.</p>
                      </div>
                </div>
            </div>
      <hr></hr>
        <footer>
                  <h2 className='text-center'>Trabaja con nosotros</h2>
              <div className='row justify-content-between text-center '>
                   <div className='col-md mb-5 text-start md:w-1/2 lg:w-2/5 mx-5'>
                      <h5>Requisitos:</h5>
                      <p>
                            <li className='mb-2'>Motocicleta</li>
                            <li className='mb-2'>Documentación en regla</li>
                            <li className='mb-2'>Experiencia en nomenclatura</li>
                            <li className='mb-2'>Buen servicio al cliente</li>
                            <li className='mb-2'>Buena presentación personal</li>
                      </p>
                   </div>
                   <div className='col-md-4 text-md-right'>
                         <div className='h3'>
                              <FontAwesomeIcon icon={faBriefcase} className="mx-3" />
                              <FontAwesomeIcon icon={faPeopleCarryBox} className="mx-3"/>
                              <FontAwesomeIcon icon={faHeadset} className="mx-3" />
                         </div>  
                          <div>
                              <img src={Logo} height="150" width="150" className="rounded mx-auto d-block img-fluid mt-5" alt="logo"/>
                         </div>             
                   </div>
              </div>
        </footer>
      </div>
  )
}
export default Home;