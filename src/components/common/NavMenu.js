import React, { useContext } from 'react';
import Logo from '../../images/logo.png';
import X from '../../images/x.png';
import { NavMenuContext } from '../../contexts/NavMenuContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NavMenu = () => {
  const { navMenuActive, toggleNavMenu } = useContext(NavMenuContext);

  return (
    <div className={navMenuActive ? 'nav-menu active' : 'nav-menu'}>
      <div className="logo-button-container">
        <div className="logo-container">
          <img src={Logo} className="logo" alt="Meagan Steinkamp Logo" />
        </div>

        <div className="close-menu-button" onClick={()=> toggleNavMenu()}>
          <img src={X} className="close-button" alt="Close Nav Menu" />
        </div>
      </div>

      <div className="nav-links-container">
        <ul className="nav-links">
          <li>about</li>
          <li>contact</li>
          <li>resume</li>
          <li className="icon">
            <a href="https://www.instagram.com/meagan.png/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faInstagram} alt="Instagram" />
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/meagan-steinkamp-24707b50/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavMenu;