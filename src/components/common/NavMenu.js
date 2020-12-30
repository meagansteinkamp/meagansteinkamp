import React, { useContext } from 'react';
import Logo from '../../images/logo.png';
import X from '../../images/x.png';
import NavLine1 from '../../images/nav_line_1.png';
import NavLine2 from '../../images/nav_line_2.png';
import NavLine3 from '../../images/nav_line_3.png';
import { NavMenuContext } from '../../contexts/NavMenuContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const NavMenu = () => {
  const { navMenuActive, toggleNavMenu } = useContext(NavMenuContext);

  return (
    <div className={navMenuActive ? 'nav-menu active' : 'nav-menu'}>
      <div className="logo-button-container">
        {/*<div className="logo-container">
          <img src={Logo} className="logo" alt="Meagan Steinkamp Logo" />
        </div>*/}

        <div className="close-menu-button" onClick={()=> toggleNavMenu()}>
          <img src={X} className="close-button" alt="Close Nav Menu" />
        </div>
      </div>

      <div className="nav-links-container">
          <p>about</p>
          <img className="nav-line" src={NavLine1} />
          <p>contact</p>
          <img className="nav-line" src={NavLine2} />
          <p>resume</p>
          <img className="nav-line" src={NavLine3} />
          <div className="icons-container">
            <div className="icon">
              <a href="https://www.instagram.com/meagan.png/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="social-icon" icon={faInstagram} alt="Instagram" />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/in/meagan-steinkamp-24707b50/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavMenu;