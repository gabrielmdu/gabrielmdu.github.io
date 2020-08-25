import React from 'react';
import gsPic from '../../assets/img/gs.jpg';
import { useTranslation } from 'react-i18next';
import './About.scss';

const About = ({ classes }) => {
  const [t] = useTranslation();

  const paragraphs = t('sessions.about.paragraphs', { returnObjects: true });

  return (
    <div className={classes}>
      <div className="gs-about flex flex-col sm:flex-row w-full">
        <div className="gs-pic-wrapper flex-grow-0 mb-4 sm:mb-0 sm:mr-4">
          <img
            className="rounded-full border-2 p-1 border-gray-600 mx-auto w-48 sm:w-auto"
            src={gsPic}
            alt="Gabriel Schulte"
          />
        </div>
        <div className="flex-1 text-sm">
          {paragraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
        </div>
      </div>
    </div>
  );
};

export default About;