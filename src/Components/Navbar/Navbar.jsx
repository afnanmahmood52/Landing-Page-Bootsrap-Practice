import React from 'react'
import './Navbar.css'
import LogoImage from "../../Images/logo.png"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#">
    <img src={LogoImage} height="22" alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#section1">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section1">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section1">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section1">Pages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#section1">Fact</a>
      </li>
    </ul>
  </div>
</nav>
    )
}
