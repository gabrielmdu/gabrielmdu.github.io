import React from 'react';
import { useTranslation } from 'react-i18next';
import warpgImg from '../../assets/img/warpg.png';
import './Projects.scss';

const Projects = ({ classes }) => {
  const [t] = useTranslation();

  const projs = [{
    title: 'Steam Store Tooltip',
    link: 'https://github.com/gabrielmdu/Steam-Store-Tooltip',
    video: 'https://user-images.githubusercontent.com/4662954/169218360-a2ee190d-4c16-456b-965c-1525d86654c5.mp4',
    videoWidth: 600,
    description: t('sessions.projects.sstDescription'),
    madeWith: ['JavaScript', 'SCSS', 'HTML']
  }, {
    title: 'Web ASCII RPG',
    link: 'https://github.com/gabrielmdu/Web-ASCII-RPG',
    image: warpgImg,
    imageAlt: 'WARPG sample',
    imageWidth: '400',
    description: t('sessions.projects.warpgDescription'),
    madeWith: ['PHP', 'Laravel', 'React', 'MongoDB', 'SCSS']
  }, {
    title: t('sessions.projects.siteName'),
    link: 'https://github.com/gabrielmdu/gabrielmdu.github.io',
    description: t('sessions.projects.siteDescription'),
    madeWith: ['React', 'Tailwind', 'i18next', 'SCSS']
  }];

  return (
    <div className={classes}>
      {projs.map((p, i) =>
        <div key={i} className="gs-projects mb-6">
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
          {p.video
            && <video controls width={p.videoWidth}>
              <source src={p.video} type="video/mp4"></source>
            </video>
          }
          <div className="flex items-center gs-made-with mt-3 text-sm">
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
