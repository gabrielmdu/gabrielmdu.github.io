import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TranslationButtons } from './TranslationButtons.js';
import { useSocialLinks, links } from '../common.js';
import { ReactComponent as GsLogo } from '../assets/img/favicon.svg';
import './Menu.scss';

const Menu = () => {
  const [isShown, setIsShown] = useState(false);
  const [t, i18n] = useTranslation();
  const socialLinks = useSocialLinks();

  return (
    // adapted from https://www.w3schools.com/howto/howto_css_menu_icon.asp
    <div className="gs-menu">
      <div className="sm:hidden m-0 p-0 h-12" />
      <div className="gs-menu-top-bar fixed inset-0 sm:hidden m-0 p-0 w-full h-12">
        <div
          className={
            'absolute inline-flex flex-col justify-between ml-2 mt-2 h-8 w-10 cursor-pointer ' +
            (isShown ? 'gs-change' : '')
          }
          onClick={() => setIsShown(!isShown)}
        >
          <div className="gs-bar1 h-2" />
          <div className="gs-bar2 h-2" />
          <div className="gs-bar3 h-2" />
        </div>
        <div className="flex items-center h-full inline-block float-right mr-6">
          <TranslationButtons smHidden />
        </div>
      </div>
      <div
        className={
          'gs-hidden-menu sm:hidden fixed h-screen transition transform duration-500 ease-in-out gs-top-12 w-64 ' +
          (isShown
            ? 'translate-x-0 gs-menu-shadow'
            : '-translate-x-full no-shadow')
        }
      >
        <div className="flex justify-center mt-4">
          <GsLogo className={"w-16 h-16"} />
        </div>
        <ul className="text-gray-200 text-xl gs-menu-link">
          {links.map(e => (
            <li className="p-3 my-2" key={e.name}>
              <Link
                className="block pl-2 border-b-4"
                to={'/' + i18n.language + e.to}
                onClick={() => setIsShown(false)}
              >
                {
                  <e.icon className="inline-block mb-1 mr-2 w-4 h-4 fill-current text-gray-200" />
                }
                {t(`sessions.${e.name}.title`)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-evenly p-6 my-2">
          {socialLinks.map(link =>
            <a
              key={link.name}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
            >
              <link.image className="inline-block w-10 h-10 fill-current text-gray-200" />
            </a>)}
        </div>
      </div>
    </div>
  );
};

export default Menu;