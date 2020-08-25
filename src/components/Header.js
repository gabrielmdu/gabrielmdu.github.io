import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { TranslationButtons } from './TranslationButtons.js';
import { useSocialLinks, links } from '../common.js';
import './Header.scss';

const Header = () => {
  const [t, i18n] = useTranslation();
  const location = useLocation();
  const socialLinks = useSocialLinks();

  const headerLink = links.filter(
    e => '/' + i18n.language + e.to === location.pathname
  )[0];

  return (
    <div className="gs-header">
      <div className="gs-name-wrap w-4/5 lg:w-6/12 md:w-2/3 text-center mx-auto mt-3 md:mt-5">
        <TranslationButtons smHidden={false} />
        <span className="gs-block gs-name text-4xl md:text-5xl lg:text-6xl leading-none text-gray-200">
          Gabriel Schulte
        </span>
        <div className="flex items-center justify-center">
          <div className="flex-grow gs-box w-auto mx-3" />
          <span className="flex-shrink-0 gs-subtitle text-orange-500">
            {t('title')}
          </span>
          <div className="flex-grow gs-box w-auto mx-3" />
        </div>

        <div className="hidden sm:flex justify-end">
          <div className="flex justify-around w-32 text-gray-200">
            {socialLinks.map(link =>
              <a
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
                href={link.href}
              >
                <link.image className="inline-block w-8 h-8 fill-current text-gray-200" />
              </a>)}
          </div>
        </div>
        <div className={'sm:hidden inline-block uppercase text-gray-200 ' +
          'mt-3 mb-4 pb-1 pt-1 px-2 bg-gray-200 text-gray-800'}>
          {headerLink ? t(`sessions.${headerLink.name}.title`) : '404'}
        </div>
      </div>
    </div>
  );
};

export default Header;