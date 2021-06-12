import React,{useRef} from "react";
import {Carousel} from 'bootstrap'
import Combo1 from '../assets/Combo1.jpg'
import Combo2 from '../assets/Combo2.jpg'
import Combo3 from '../assets/Combo3.jpg'

export default function CustomCaruosel() {
// Referencia
  let refCarousel = useRef()
// Elemento HTML
  let myCarousel = refCarousel.current
// Instancia Carousel de Boostrap
  let bsCarousel = new Carousel(myCarousel)


  const avanzarCarousel = () =>{
      bsCarousel.next()
  }
  const regresarCarousel = () =>{
      bsCarousel.prev()
  }
    return (
    <div>
      <div
        ref={refCarousel}
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Combo1} className="d-block w-100" alt="..." />
            <div className="bannerCarousel position-absolute top-50 start-50 translate-middle">
                <small>Tu estilo</small>
                <h5>Temporada Invierno</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Combo2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Combo3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={regresarCarousel}
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={avanzarCarousel}
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
