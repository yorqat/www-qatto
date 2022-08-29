import React from 'react';

import { useNavigate } from 'react-router-dom';
import { GoGitBranch, GoLink, GoLinkExternal, GoMarkGithub } from 'react-icons/go';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const navi = (path: string) => {
    return () => {
      navigate(project_path(path));
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
      art: 'https://i.imgur.com/KRhmq6g.png',
      id: 0,
    },
    {
      repository: 'https://github.com/Madoshakalaka/max-the-wait-gain',
      project_name: 'max-the-wait-gain',
      description: "It's a fight to not eat as much",
      art: 'https://i.imgur.com/TVN1jfg.png',
      id: 1,
    },
    {
      // TODO: push the repo
      repository: '',
      project_name: 'triplicata',
      description: 'Discord bot for games',
      art: 'https://i.imgur.com/l9Q7AHD.png',
      id: 2,
    },
    {
      repository: 'https://github.com/Qark-dev/yorcloud_client',
      project_name: 'yorcloud',
      description: 'Yor favorite home cloud provider',
      art: 'https://i.imgur.com/JXw10LO.png',
      id: 3,
    },
  ];

  const listItems = repos.map((r) => (
    <article className="project" key={r.id} onClick={navi(r.project_name)}>
      <img loading='lazy' className="project__image" src={r.art}></img>
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
