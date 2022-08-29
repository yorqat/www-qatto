import React from 'react';
import Project from '../components/Projects';
import Nav from '../components/Nav';
import pattern from '../pattern0.svg';

const arrowBlack = 'https://imgur.com/YyT9BpB';
const arrow = 'https://imgur.com/5PHiUIi';

const HomePage: React.FC = () => {
  return (
    <>
      <section className="title-sect">
        <article className="title-sect__intro">
          <h1>
            <img loading='lazy' className="chevron chevron--left-side" src={arrow} />
            Qatto
            <img loading='lazy' className="chevron chevron--right-side" src={arrow} />
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
