import React, { useRef } from 'react';
import { GoGrabber } from 'react-icons/go';

const Nav: React.FC = () => {
  const navboxRef = useRef<HTMLUListElement>(null);

  const links = ['contact', 'gallery', 'sponsor', 'hire'];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleMobile = () => {
    if (navboxRef.current) {
      console.log('Navbox exists');
      navboxRef.current.toggleAttribute('nav__box--mobile');
    } else {
      console.error('NAVBOX IS NULL');
    }
  };

  return (
    <nav className="nav nav--mobile nav--mobile--expanded">
      <button className='home-btn'>
        <a href="/">
          <img src="favicon.ico" alt="site logo" style={{ height: '3rem', width: '3rem', imageRendering: 'pixelated' }}/>
        </a>
      </button>
      <button className="nav-btn">
        <GoGrabber className='nav-btn__icon' />
      </button>
      <ul className="nav__box" ref={navboxRef}>
        {links.map((l, idx) => {
          const location = '/' + l;

          return (
            <button className="nav__box__item" key={idx}>
              <a href={location}>{l.toUpperCase()}</a>
            </button>
          );
        })}
      </ul>
      {/* <button onClick={toggleMobile}>Toggle mobile</button> */}
    </nav>
  );
};

export default Nav;
