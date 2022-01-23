import React from 'react'
import { NavLink } from 'react-router-dom'
import navicon from '../assets/images/logoo.png'

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary float right">
  <div className="container-fluid">
           <img src={navicon} class="d-block w-70" alt="..."height="40px"width="100px"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Acceuil
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog"> Nos articles</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact"> Contact</NavLink>
      </li>
      <NavLink className="nav-link" to="/login">Connexion</NavLink>
          <li className="nav-item">
          </li>
          <NavLink className="nav-link "  to="/connexion">Inscription</NavLink>
          <li className="nav-item">
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/panier"> Panier</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
 }
export default Navbar

