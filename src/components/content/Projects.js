import React from 'react';
import { useTranslation } from 'react-i18next';
import warpgImg from '../../assets/img/warpg.png';
import './Projects.scss';

const Projects = ({ classes }) => {
  const [t] = useTranslation();

  const projs = [{
    title: 'Steam Store Tooltip',
    link: 'https://github.com/gabrielmdu/Steam-Store-Tooltip',
    image: 'https://raw.githubusercontent.com/gabrielmdu/Steam-Store-Tooltip/master/demo.gif',
    imageAlt: 'SST sample',
    imageWidth: '500',
    description: t('sessions.projects.sstDescription'),
    madeWith: ['JavaScript', 'SCSS', 'HTML']
  }, {
    title: 'Web ASCII RPG',
    link: 'https://github.com/gabrielmdu/Web-ASCII-RPG',
    image: warpgImg,
    imageAlt: 'WARPG sample',
    imageWidth: '400',
    description: t('sessions.projects.warpgDescription'),
    madeWith: ['PHP', 'Laravel', 'React', 'SCSS']
  }, {
    title: t('sessions.projects.siteName'),
    link: 'https://github.com/gabrielmdu/gabrielmdu.github.io',
    description: t('sessions.projects.siteDescription'),
    madeWith: ['React', 'SCSS']
  }];

  return (
    <div className={classes}>
      {projs.map((p, i) =>
        <div key={i} className="projects mb-6">
          <a
            className="underline"
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {p.title}
          </a>
          <div className="mb-3 text-sm">{p.description}</div>
          {p.image
            && <img
              src={p.image}
              alt={p.imageAlt}
              width={p.imageWidth}
            />}
          <div className="flex items-center made-with mt-3 text-sm">
            <div className="mr-2">
              {t('sessions.projects.madeWith')}:
            </div>
            <div className="flex flex-wrap">
              {p.madeWith.map((m, mi) =>
                <span key={mi} className="m-1">{m}</span>)}
            </div>
          </div>
        </div>)}
    </div>
  );
};

export default Projects;