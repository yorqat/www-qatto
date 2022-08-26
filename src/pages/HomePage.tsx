import React from 'react';
import Project from '../components/Projects';
import Nav from '../components/Nav';
import pattern from '../pattern1.svg';

import arrow from '../right-arrow--yellow.png';

const HomePage: React.FC = () => {
  return (
    <>
      <section className="title-sect">
        <article className="title-sect__intro">
          <h1>
            <img className="chevron chevron--left-side" src={arrow} />
            <code>Qatto</code>
            <img className="chevron chevron--right-side" src={arrow} />
          </h1>
          <p>Welcome to my humble abode.</p>
          <p>I&apos;m Qatto your friendly neighborhood full stacker</p>
        </article>
        <article className="title-sect__visuals">
          <img src={pattern} alt="visuals" className="title-sect__visuals_image" />
        </article>
      </section>
      <Project />
    </>
  );
};

export default HomePage;
