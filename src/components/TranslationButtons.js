import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const TranslationButtons = ({ smHidden }) => {
  const location = useLocation();
  const [, i18n] = useTranslation();

  const availableTranslations = ['en', 'pt'];
  const buttonClasses = 'rounded-full inline-flex items-center justify-center ' +
    'cursor-pointer border-2 h-8 w-8 transition-colors ' +
    'duration-500 ease-in-out hover:bg-purple-900 ';

  return (
    <div className={(smHidden ? 'sm:hidden flex' : 'hidden sm:flex') +
      ' justify-end'}>
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