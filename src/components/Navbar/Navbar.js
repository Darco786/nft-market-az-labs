import React from "react";
import './Nav.css'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
    <div className="head-1">
    
    </div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
         <div>
         <a className="navbar-brand" href="/">
           <img src={Logo} alt="NSFW-logo"/>
          </a>
         </div>
          
      
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to='/'>HOME</Link>
              
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/nft-market'> MARKETPLACE</Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/generate'>GENERATE</Link>
              
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/profile'>Profile</Link>
              
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/dapp'>Dapp</Link>
              
              </li>
            
            </ul>
          </div>

          <div>
            <a  className="btn-connect" href="/" role="button">CONNECT WALLET</a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
