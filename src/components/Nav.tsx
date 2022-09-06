import React, { useEffect, useRef, useState } from 'react';
import { GoGrabber } from 'react-icons/go';
import useMediaQuery from "../hooks/useMediaQuery";

const Nav: React.FC = () => {
  const navboxRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  }

  const links = ['contact', 'gallery', 'sponsor', 'hire'];

  const isMobile = useMediaQuery('(max-width: 600px)');

  let navClass = "nav";

  const toMobile = () => {
    navClass = navClass + " nav--mobile";
  }
  
  if (isMobile) {
    toMobile();

    if (isExpanded) {
      navClass = navClass + " nav--mobile--expanded";
    }
  }

  useEffect(() => {
    if (!isMobile && isExpanded) {
      setExpanded(false);
    }
  })

  return (
    <nav className={navClass}>
      <button className='home-btn'>
        <a href="/">
          <img src="favicon.ico" alt="site logo" style={{ height: '3rem', width: '3rem', imageRendering: 'pixelated' }}/>
        </a>
      </button>
      <div className="nav__box" ref={navboxRef}>
        {(!isMobile || (isMobile && isExpanded)) && links.map((l, idx) => {
          const location = '/' + l;
          return (
            <button className="nav__box__item" key={idx}>
              <a href={location}>{l.toUpperCase()}</a>
            </button>
          );
        })}
      </div>
      {
        isMobile && 
          <button className="nav-btn" onClick={toggleExpanded}>
            <GoGrabber className='nav-btn__icon' />
          </button>
      }
    </nav>
  );
};

export default Nav;
