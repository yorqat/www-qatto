import React from 'react'
import DateDisplay from '../components/DateDisplay'
import Project from '../components/Projects'
import Nav from '../components/Nav'

import arrow from '../right-arrow--yellow.png';

const HomePage: React.FC = () => {
    return (
        <div id='root__child' >
            <Nav />
            <h1 style={{ fontSize: '4em' }}>
                <img className='chevron chevron--left-side' src={arrow} />
                {/* <img className='chevron chevron--left-side' src={arrow} /> */}
                <code>Qatto</code>
                {/* <img className='chevron chevron--right-side' src={arrow} /> */}
                <img className='chevron chevron--right-side' src={arrow} />
            </h1>
            <p>Welcome to my humble abode. I&apos;m Qatto your friendly neighborhood full stacker</p>
            <Project />
            <footer><DateDisplay /></footer>
        </div>
    )
}

export default HomePage
