import React, { useState } from 'react'
import {Link} from "react-router-dom"

export default function NavTop() {
    const [colapsado, setColapsado] = useState(true)

    const manejarNavbar = () => setColapsado(!colapsado)

    return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">CodiShop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!colapsado ? true : false}
    aria-label="Toggle navigation"
    onClick={manejarNavbar}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`${colapsado ? 'collapse': ''} navbar-collapse`}id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Portada
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cat-casual">
            Casual
          </Link>
        </li>
      </ul>
      <div className="d-flex">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/carrito"><i className="fas fa-shopping-cart me-1"></i>Ir a Carrito</Link>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</nav>
    )
}
