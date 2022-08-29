import React from 'react';

import triplicata from '../triplicata.png';
import yorcloud from '../yor-cloud.png';
import workstation from '../workstation.png';
import maxthewaitgain from '../max-the-wait-gain.png';

import { useNavigate } from 'react-router-dom';
import { GoGitBranch, GoLink, GoLinkExternal, GoMarkGithub } from 'react-icons/go';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const navi = (path: string) => {
    return () => {
      project_path(path);
    };
  };

  const project_path = (path: string) => {
    return 'projects/' + path;
  };

  const repos = [
    {
      repository: 'https://github.com/Qark-dev/Dotfiles',
      project_name: 'workstation',
      description: 'config for my current setup',
      art: workstation,
      id: 0,
    },
    {
      repository: 'https://github.com/Madoshakalaka/max-the-wait-gain',
      project_name: 'max-the-wait-gain',
      description: "It's a fight to not eat as much",
      art: maxthewaitgain,
      id: 1,
    },
    {
      // TODO: push the repo
      repository: '',
      project_name: 'triplicata',
      description: 'Discord bot for games',
      art: triplicata,
      id: 2,
    },
    {
      repository: 'https://github.com/Qark-dev/yorcloud_client',
      project_name: 'yorcloud',
      description: 'Yor favorite home cloud provider',
      art: yorcloud,
      id: 3,
    },
  ];

  const listItems = repos.map((r) => (
    <article className="project" key={r.id} onClick={navi(r.project_name)}>
      <img className="project__image" src={r.art}></img>
      <h3 className="project__caption">{r.project_name + '   '}</h3>
      <p className="project__caption">{r.description}</p>
      <div className="project_references">
        <div className="project_reference copy-link">
          <a href="">
            <GoLink />
          </a>
        </div>
        <div className="project_reference github">
          <a href={r.repository} className="project_github">
            <GoGitBranch />
          </a>
        </div>
        <div className="project_reference new-tab">
          <a target="_blank" rel="noreferrer" href={project_path(r.project_name)}>
            <GoLinkExternal />
          </a>
        </div>
      </div>
    </article>
  ));

  return (
    <section className="projects">
      <h2 className="projects__title">Passions and Projects </h2>
      <ul className="projects__list">{listItems}</ul>
    </section>
  );
};

export default Projects;
