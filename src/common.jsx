import About from './components/content/About.jsx';
import Experience from './components/content/Experience.jsx';
import Skills from './components/content/Skills.jsx';
import Projects from './components/content/Projects.jsx';
import GitHubLogo from './assets/img/github.svg?react';
import LinkedInLogo from './assets/img/linkedin.svg?react';
import AboutLogo from './assets/img/about.svg?react';
import XpLogo from './assets/img/xp.svg?react';
import SkillsLogo from './assets/img/skills.svg?react';
import ProjectsLogo from './assets/img/projects.svg?react';
import CvLogo from './assets/img/cv.svg?react';
import { useTranslation } from 'react-i18next';

export const links = [{
  to: '/about',
  component: About,
  name: 'about',
  icon: AboutLogo
}, {
  to: '/xp',
  component: Experience,
  name: 'xp',
  icon: XpLogo
}, {
  to: '/skills',
  component: Skills,
  name: 'skills',
  icon: SkillsLogo
}, {
  to: '/projects',
  component: Projects,
  name: 'projects',
  icon: ProjectsLogo
}];

export const useSocialLinks = () => {
  const [t] = useTranslation();

  return [{
    name: 'github',
    href: 'https://www.github.com/gabrielmdu',
    image: GitHubLogo
  }, {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/gabrielschulte',
    image: LinkedInLogo
  }, {
    name: 'cv',
    href: t('cvLink'),
    image: CvLogo
  }];
};