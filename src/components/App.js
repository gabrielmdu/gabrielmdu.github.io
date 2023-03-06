import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { links } from '../common.js';
import Header from './Header.js';
import Menu from './Menu.js';
import GsLinks from './Link.js';
import Gs404 from './404.js';
import ScrollToTop from './ScrollToTop.js';

const Content = () => {
  const [, i18n] = useTranslation();

  const classes = "text-gray-200 mx-8 mb-6 sm:mx-10 md:mx-16 lg:mx-32 xl:mx-64";

  return [
    <Route key={'home'} exact path="/" element={<Navigate to={'/' + i18n.language + '/about'} />} />,
    ...links.map(e => (
      <Route
        key={e.name}
        exact
        path={'/' + i18n.language + e.to}
        element={<e.component classes={classes} />}
      />
    )),
    <Route key={'404'} path='*' element={<Gs404 classes={classes} />} />
  ];
};

const App = () => {
  return (
    <>
      <div id="gs-background" />
      <Router>
        <div className="container mx-auto">
          <ScrollToTop />
          <Menu />
          <Header />

          <GsLinks />
          <Routes>
            {Content()}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;