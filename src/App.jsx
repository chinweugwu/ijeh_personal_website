import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Publications from './components/Publications';
import Certificates from './components/Certificates';
import './App.css';

function App() {

  return (
    <div className='profile-root'>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <About></About>
      <Publications></Publications>
      <Certificates></Certificates>
    </div>
  )
}

export default App
