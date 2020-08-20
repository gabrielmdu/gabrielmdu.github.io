import React from 'react';
import { useTranslation } from 'react-i18next';

const Gs404 = ({ classes }) => {
  const [t] = useTranslation();

  return (
    <div className={classes}>
      {t('404')}
    </div>
  );
}

export default Gs404;