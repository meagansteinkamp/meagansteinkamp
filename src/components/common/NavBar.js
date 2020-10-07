import React from 'react';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={Logo} className="logo" alt="Meagan Steinkamp Logo" />

        <ul className="nav-links">
          <li>about</li>
          <li>contact</li>
          <li>resume</li>
          <li>
            <a href="https://www.instagram.com/meagan.png/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faInstagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;