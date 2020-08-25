import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ProgLogo } from '../../assets/img/prog.svg';
import { ReactComponent as ToolsLogo } from '../../assets/img/tools.svg';
import { ReactComponent as LanguagesLogo } from '../../assets/img/languages.svg';
import './Skills.scss';

const Skills = ({ classes }) => {
  const [t] = useTranslation();

  const skillSessions = [{
    title: t('sessions.skills.prog'),
    skills: ['PHP', 'JavaScript', 'CSS/SCSS', 'HTML', 'Python', 'C++', 'SQL'],
    image: ProgLogo
  }, {
    title: t('sessions.skills.tools'),
    skills: [
      'VS Code',
      'GIT',
      'Jira',
      'Docker',
      'Postman',
      'MySQL Workbench',
      'Visual Studio',
      'SQL Manager',
      'SVN',
      'C++Builder',
      'Redmine',
      'GIMP',
      'Inkscape'],
    image: ToolsLogo
  }, {
    title: t('sessions.skills.languages.title'),
    skills: t('sessions.skills.languages.list', { returnObjects: true }),
    image: LanguagesLogo
  }];

  return (
    <div className={classes}>
      {skillSessions.map((s, i) =>
        <div key={i} className="gs-skills mb-5">
          <div className="gs-skill-title flex items-center px-2 py-1">
            <s.image className="inline-block mr-1 fill-current text-gray-200" />{s.title}
          </div>
          <div className="flex flex-wrap pt-2 pl-2">
            {s.skills.map((p, i) =>
              <div key={i} className="pb-2 pr-2">
                <span className="gs-skill rounded-full text-sm px-2 py-1">{p}</span>
              </div>)}
          </div>
        </div>)}
    </div>
  );
};

export default Skills;