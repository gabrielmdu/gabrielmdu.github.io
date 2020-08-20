import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { ReactComponent as GitHubLogo } from "../assets/img/github.svg";
import { ReactComponent as LinkedInLogo } from "../assets/img/linkedin.svg";

const TranslationButtons = () => {
  const location = useLocation();
  const [, i18n] = useTranslation();

  const availableTranslations = ['en', 'pt'];
  const buttonClasses = 'rounded-full inline-flex items-center justify-center ' +
    'cursor-pointer border-2 h-8 w-8 transition-colors ' +
    'duration-500 ease-in-out hover:bg-purple-900 ';

  return (
    <div className="flex justify-end">
      <div className="flex justify-around w-20 text-white">
        {availableTranslations.map(trans =>
          <Link
            key={trans}
            to={'/' + trans + '/' + location.pathname.split('/')[2]}
            className={
              buttonClasses +
              (i18n.language === trans ? 'bg-indigo-900' : '')
            }
            onClick={() => i18n.language !== trans && i18n.changeLanguage(trans)}
          >
            {trans}
          </Link>)}
      </div>
    </div>
  );
};

const Header = ({ links }) => {
  const [t, i18n] = useTranslation();
  const location = useLocation();

  const socialLinks = [{
    name: 'github',
    href: 'https://www.github.com/gabrielmdu',
    image: GitHubLogo
  }, {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/gabrielschulte',
    image: LinkedInLogo
  }];

  const headerLink = links.filter(
    e => "/" + i18n.language + e.to === location.pathname
  )[0];

  return (
    <div className="name-wrap w-4/5 lg:w-6/12 md:w-2/3 text-center mx-auto mt-3 md:mt-5">
      <TranslationButtons />
      <span className="block name text-4xl md:text-5xl lg:text-6xl leading-none text-gray-200">
        Gabriel Schulte
        </span>
      <div className="flex items-center justify-center">
        <div className="flex-grow box w-auto mx-3" />
        <span className="flex-shrink-0 subtitle text-orange-500">
          {t('title')}
        </span>
        <div className="flex-grow box w-auto mx-3" />
      </div>

      <div className="flex justify-end">
        <div className="flex justify-around w-20 text-white">
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
      <div className={'sm:hidden inline-block uppercase text-white ' +
        'mt-3 mb-4 pb-1 pt-1 px-2 bg-gray-200 text-gray-800'}>
        {headerLink ? t(headerLink.name) : '404'}
      </div>
    </div>
  );
};

export default Header;