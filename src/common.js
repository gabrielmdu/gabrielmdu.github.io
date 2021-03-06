import About from './components/content/About.js';
import Experience from './components/content/Experience.js';
import Skills from './components/content/Skills.js';
import Projects from './components/content/Projects.js';
import { ReactComponent as GitHubLogo } from './assets/img/github.svg';
import { ReactComponent as LinkedInLogo } from './assets/img/linkedin.svg';
import { ReactComponent as AboutLogo } from './assets/img/about.svg';
import { ReactComponent as XpLogo } from './assets/img/xp.svg';
import { ReactComponent as SkillsLogo } from './assets/img/skills.svg';
import { ReactComponent as ProjectsLogo } from './assets/img/projects.svg';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CvLogo } from './assets/img/cv.svg';

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