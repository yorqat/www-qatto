import React, { useRef } from 'react';

const Nav: React.FC = () => {
  const navboxRef = useRef<HTMLUListElement>(null);

  const links = ['home', 'contact', 'gallery', 'sponsor', 'hire'];

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
    <nav className="nav">
      <ul className="nav__box " ref={navboxRef}>
        {links.map((l, idx) => {
          let location = '/' + l;
          if (l === 'home') {
            location = '/';
          }

          return (
            <li className="nav__box__item" key={idx}>
              <a href={location}>{l.toUpperCase()}</a>
            </li>
          );
        })}
      </ul>
      {/* <button onClick={toggleMobile}>Toggle mobile</button> */}
    </nav>
  );
};

export default Nav;
