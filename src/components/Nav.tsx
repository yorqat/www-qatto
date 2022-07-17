import React from 'react';

const Nav : React.FC = () => {
    const links = [
        "home",
        "contact",
        "gallery",
        "sponsor",
        "hire",
    ];

    const linksList = links.map((l, idx) => {
        return <ul className='nav__box__item' key={idx}><a href={"/" + l} >{ l.toUpperCase() }</a></ul>
    });

    return (
        <nav className='nav'>
            <ul className='nav__box'>{ linksList }</ul>
        </nav>
    );
}

export default Nav;