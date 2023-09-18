import React from 'react'

const Navbar = () => {

  return (
    <div>
      <div className='nav-container'>
        <div className="button-container-pads"></div>
        <div className="button-container">
            <a href="#home-container-id" className="nav-button" id='nav-1'><h4>HOME</h4></a>
            <a href="#about-container"className="nav-button" id='nav-2'><h4>ABOUT</h4></a>
            <a href="#pub-container" className="nav-button" id='nav-3'><h4>PUBLICATIONS</h4></a>
            <a href="#cert-container" className="nav-button" id='nav-4'><h4>CERTIFICATES</h4></a>
        </div>
        <div className="button-container-pads"></div>
      </div>
    </div>
  )
}

export default Navbar
