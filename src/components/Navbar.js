import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className='logo' src='images/logo.png' alt='logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Página Inicial
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                História
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Serviços
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                Contactos
              </Link>
            </li>
          </ul>
          <ul className = 'lang-btns'>
            {button && <Button buttonStyle='btn--outline' buttonSize='btn--small'>PT</Button>}
            {button && <Button buttonStyle='btn--outline' buttonSize='btn--small'>FR</Button>}
            {button && <Button buttonStyle='btn--outline' buttonSize='btn--small'>ENG</Button>}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;