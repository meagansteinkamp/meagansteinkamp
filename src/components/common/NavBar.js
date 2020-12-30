import React, { useContext } from 'react';
import Logo from '../../images/logo.png';
import { NavMenuContext } from '../../contexts/NavMenuContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  const { navMenuActive, toggleNavMenu } = useContext(NavMenuContext);

  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img src={Logo} className="logo" alt="Meagan Steinkamp Logo" />
      </div>

      <div className="nav-links-container">
        <ul className="nav-links">
          <li>about</li>
          <li>contact</li>
          <li>resume</li>
          <li>
            <a href="https://www.instagram.com/meagan.png/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faInstagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/meagan-steinkamp-24707b50/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>

      <div className="open-menu-button" onClick={()=> toggleNavMenu()}>
        open
      </div>

    </nav>
  )
}

export default NavBar;