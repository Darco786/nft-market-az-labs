import React from "react";
import './Nav.css'
import Logo from '../../assets/logo.png'
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
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                MARKETPLACE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                GENERATE
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
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
