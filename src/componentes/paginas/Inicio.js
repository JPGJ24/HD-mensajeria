import React from 'react'
import Logo from '../img/logo.jpg';
import Cedi from '../img/cedii.jpg';
import WhatsApp from '../img/whatsapp.png';
import Sim from '../img/sim.png';
import Instagram from '../img/Instagram.png';
import Gmail from '../img/gmail.png';
// import Tel from '../img/tel.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMotorcycle,
        faMapLocationDot,
        faTruckFast,
        faBriefcase,
        faPeopleCarryBox,
        faHeadset
        }
        from '@fortawesome/free-solid-svg-icons'




function Inicio() {
  return (
    <div className='container  ' >
                                                    {/* //CARRUSEL PRINCIPAL */}
          <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="true">

          <div className="carousel-indicators" >
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner mt-2" >
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={Logo} height="400" width="400" className="rounded mx-auto d-block img-fluid" alt="logo"/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={Sim} height="600" width="600" className="rounded mx-auto d-block img-fluid" alt="sim"/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={Cedi} height="600" width="600" className="rounded mx-auto d-block img-fluid" alt="cedi"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
  
  
  
    </div>

                                                  {/* //FRAGMENTO ICONS */}
    <div className= "row my-5 text-center">
        <div className="col-md-4">
            <div className="text-center h1">
            <FontAwesomeIcon icon={faMotorcycle} />
            </div>
              <p className=' text-muted'>Somos tu mejor aliado</p>
              <h4 className='text-uppercase'>Confia somo los tuyos</h4>
              <p className='font-weight-light'>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach </p>
        </div>

        <div className="col-md-4">
            <div className="text-center h1">
            <FontAwesomeIcon icon={faMapLocationDot} />
            </div>
              <p className=' text-muted'>Somos tu mejor aliado</p>
              <h4 className='text-uppercase'>Confia somo los tuyos</h4>
              <p className='font-weight-light'>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach </p>
        </div>

        <div className="col-md-4" >
            <div className="text-center h1">
            <FontAwesomeIcon icon={faTruckFast} />
            </div>
              <p className=' text-muted'>Somos tu mejor aliado</p>
              <h4 className='text-uppercase'>Confia somo los tuyos</h4>
              <p className='font-weight-light' id='Contactos'>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach </p>
        </div>
    </div >
        <hr></hr>
                                              {/* //CONTACTOS */}
                                   
        <h4 className='mt-3  text-center text-uppercase '>Nuestros contactos</h4>
        <div className='row my-5 text-center' >

              <div className='col-md-4'>
                  <img src={WhatsApp} alt='whatsapp' className='img-fluid mt-3 ' height="70" width="70"/>
                  <p className='font-weight-light h6 '>Contacto de WhatsApp</p>
                  <p className=' font-weight-light h6'>(+57) 318 7421131</p>
              </div>

              <div className='col-md-4'>
                  <img src={Instagram} alt='instagram' className='img-fluid mt-3 ' height="70" width="70"/>
                  <p className='font-weight-light h6 mt-3'>HD MENSAJERÍA MEDELLIN</p>
              </div>

              <div className='col-md-4'>
                  <img src={Gmail} alt='gmail' className='img-fluid mt-3 ' height="70" width="70"/>
                  <p className='font-weight-light h6 mt-3'>HDmensajeria@gmail.com</p>
              </div>
        </div>
        <hr></hr>
                                          {/* //QUIÉNES SOMOS */}
        <h4 className='mt-3  text-center text-uppercase mb-4'>¿Quiénes somos?</h4>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active mb-5 text-center" data-bs-interval="3000">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      
    </div>
    <div className="carousel-item text-center mb-5 " data-bs-interval="3000">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      
    </div>
    <div className="carousel-item text-center mb-5 "data-bs-interval="3000">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
    </div>
  </div>
    </div>

    <hr></hr>
                                              {/* // FOOTER */}
    <footer className='mt-5 border border-0 rounded'>
      <div className='row justify-content-between text-center '>
                <div className='col-md-4 mb-5'>
                  <h2>Trabaja con nosotros</h2>
                  <p> trying to grow my channel, so if you find this video useful please #subscribe & hit the notification #bell :) Thanks for watching and I hope you liked and learned something new !!!!!</p>
                </div>
                <div className='col-md-4 text-md-right'>
                  <div className='h3'>
                  <FontAwesomeIcon icon={faBriefcase} className="mx-3" />
                  <FontAwesomeIcon icon={faPeopleCarryBox} className="mx-3"/>
                  <FontAwesomeIcon icon={faHeadset} className="mx-3" />
                   </div>  
                   <div>
                   <img src={Logo} height="100" width="100" className="rounded mx-auto d-block img-fluid mt-5" alt="logo"/>
                    </div>             
                </div>
            </div>

    </footer>
     

  </div>


  )
}

export default Inicio