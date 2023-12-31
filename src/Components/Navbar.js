import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';
import AboutDropdown from './Menu/AboutDropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [aboutDropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className={'navbar'}>
        <div className='navbar-logo' >
          <Link to='/' className='logo' onClick={closeMobileMenu}>
              Iskierka
          </Link>
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className='nav-links'>
              O nas
            </Link>
            {aboutDropdown && <AboutDropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/parents' className='nav-links' onClick={closeMobileMenu}>
              Dla rodziców
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/actions' className='nav-links' onClick={closeMobileMenu}>
              Działania
            </Link>
          </li>
          {/*<li className='nav-item'>
            <Link
              to='/galery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Galeria
            </Link>
          </li>*/}
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;