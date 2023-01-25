import React from 'react'
import { Link } from 'react-router-dom';

import Portfolioicon from 'D:/React - projects/my-website/src/images/website.png'



export default function Navbar() {
    
  
  const handleOnCLick = () =>{
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
  });
  }

  return (
    <>
        <nav className="navbar bg-dark sticky-top" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand mx-2" to="/">
      <img src={Portfolioicon} alt="Logo" style={{marginRight:'7px'}} width="30" height="27" className="d-inline-block align-text-top" />
      My Projects
    </Link>
    <button className='btn btn-outline-primary' onClick={handleOnCLick}>About Me</button>
  </div>
</nav>
    </>
  )
}
