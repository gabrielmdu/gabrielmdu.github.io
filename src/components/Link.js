import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { links } from '../common.js';

const GsLink = props => {
  const location = useLocation();
  const [, i18n] = useTranslation();

  return (
    <Link
      className={
        'border-b-2 pb-1 pt-2 px-2 my-10 mx-8 text-white uppercase ' +
        'transition-colors duration-500 ease-in-out hover:text-purple-900 hover:bg-white ' +
        (location.pathname === '/' + i18n.language + props.to
          ? 'bg-gray-200 text-gray-800'
          : '')
      }
      to={'/' + i18n.language + props.to}
    >
      {props.children}
    </Link>
  );
};

const GsLinks = () => {
  const [t] = useTranslation();

  return (
    <div className="hidden sm:flex justify-center">
      {links.map(e => (
        <GsLink to={e.to} key={e.to}>
          {t(`sessions.${e.name}`)}
        </GsLink>
      ))}
    </div>
  );
};

export default GsLinks;