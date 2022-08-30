import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { GoGitBranch, GoLink, GoLinkExternal } from 'react-icons/go';

interface Project {
  _id: string,
  repository: string,
  project_name: string,
  description: string,
  art: string,
}

const Projects: React.FC = () => {
  const [projs, setProjs] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState<any | null>(null);

  useEffect(() => {
    fetch('/assets/projects')
    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setProjs(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setIsError(error);
      },
    );
  }, []);

  const navigate = useNavigate();

  const navi = (path: string) => {
    return () => {
      navigate(project_path(path));
    };
  };

  const project_path = (path: string) => {
    return 'projects/' + path;
  };

  if (isError) {
    return (
      <section className='projects projects--error'>
          <h2 className="projects__title">Passions and Projects </h2>
          <h4 className='no-content-yet'>Error: {isError}</h4>
      </section>
    ); 
  } else if (!isLoaded) {
    return (
      <section className='projects projects--loading'>
          <h2 className="projects__title">Passions and Projects </h2>
          <h4 className='no-content-yet'>Loading...</h4>
      </section>
    );
  } else {
    return (
      <section className="projects">
        <h2 className="projects__title">Passions and Projects </h2>
        <ul className="projects__list">{projs.map((p) => {
          return (
            <article className="project" key={p._id} onClick={navi(p.project_name)}>
              <img loading="lazy" className="project__image" src={p.art}></img>
              <h3 className="project__caption">{p.project_name + '   '}</h3>
              <p className="project__caption">{p.description}</p>
              <div className="project_references">
                <div className="project_reference copy-link">
                  <a href="">
                    <GoLink />
                  </a>
                </div>
                <div className="project_reference github">
                  <a href={p.repository} className="project_github">
                    <GoGitBranch />
                  </a>
                </div>
                <div className="project_reference new-tab">
                  <a target="_blank" rel="noreferrer" href={project_path(p.project_name)}>
                    <GoLinkExternal />
                  </a>
                </div>
              </div>
            </article>
          );
        })}</ul>
      </section>
    );

  }

};

export default Projects;
