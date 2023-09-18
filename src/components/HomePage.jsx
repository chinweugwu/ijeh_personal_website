import React from 'react'
import headShot from '../assets/ijeh_head_shot.jpg'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'

const HomePage = () => {
  return (
    <div class='home-container' id='home-container-id'>
      <div className="home home-main1">
        <div className='home-section-main'>
          <section className='home-section' id='home-section-1'>
            <img src={headShot} id='section-1-img' alt="" />
          </section>
          <section className='home-section' id='home-section-2'></section>
          <section className='home-section' id='home-section-3'></section>
          <section className='home-section' id='home-section-4'>
            <div className="section-4-details">
              <h2 id='section-4-h2'>Ikenna Ijeh Chinazaekpere</h2>
              <div className="sec-4-icons-div">
                <img src={logo1} alt="Logo" className='icons'/>
                <img src={logo2} alt="Logo" className='icons'/>
                <img src={logo3} alt="Logo" className='icons'/>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="home home-main2">
        <div className="home-main2-details">
          <p>
          Ikenna Chinazaekpere Ijeh (Member; IEEE, COREN, NSE) is from Abakaliki, Ebonyi State, 
          southeastern Nigeria. He received a B.Eng. degree in Electrical Electronics Engineering from Caritas University, 
          Enugu, Nigeria, in 2013, an M.Sc. degree in Control and Instrumentation from the University of Derby, Derby, United Kingdom, 
          in 2016, and a Ph.D. degree in Optics, Photonics and Image Processing from École Centrale de Marseille, France, in 2021. 
          He is currently a Lecturer with the Department of Electrical & Electronic Engineering, Alex-Ekwueme Federal University Ndufu-Alike Ikwo, Ebonyi State, Nigeria. 
          He is a Working Group Member of H2020 COST Action CA19111 - “European Network on Future Generation
          Optical Wireless Communication Technologies (NEWFOCUS)”. His research interests include wireless communication systems and the automation of control systems.
          </p>
          <div className="home-main2-icons-div">
                <img src={logo4} alt="Logo" className='p-icons'/>
                <img src={logo5} alt="Logo" className='p-icons'/>
                <img src={logo6} alt="Logo" className='p-icons'/>
                <img src={logo7} alt="Logo" className='p-icons'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
