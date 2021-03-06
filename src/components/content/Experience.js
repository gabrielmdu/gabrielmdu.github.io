import React from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.scss';

const Experience = ({ classes }) => {
  const [t] = useTranslation();

  const jobs = t('sessions.xp.jobs', { returnObjects: true });

  return (
    <div className={classes}>
      {jobs.map(j =>
        <div key={j.company} className="mb-8">
          <div className="gs-job-title-wrapper flex justify-between items-end p-2 mb-2">
            <div className="gs-job-title uppercase ">{j.position}</div>
            <div className="text-xs sm:text-base">{j.date}</div>
          </div>
          <div className="italic">{j.company}</div>
          <div className="text-xs">{j.location}</div>
          <div className="text-sm mt-3">{j.summary}</div>
          <ul className="gs-activities mt-4">
            {j.activities.map((a, i) => <li key={i} className="mb-1">{a}</li>)}
          </ul>
        </div>)}
    </div>
  );
};

export default Experience;