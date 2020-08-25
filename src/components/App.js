import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { links } from '../common.js';
import Header from './Header.js';
import Menu from './Menu.js';
import GsLinks from './Link.js';
import Gs404 from './404.js';

const Content = () => {
  const [, i18n] = useTranslation();

  const classes = "text-gray-200 mx-8 mb-6 sm:mx-10 md:mx-16 lg:mx-32 xl:mx-64";

  return [
    <Route key={'home'} exact path="/">
      <Redirect to={'/' + i18n.language + '/about'} />
    </Route>,
    ...links.map(e => (
      <Route
        key={e.name}
        exact
        path={'/' + i18n.language + e.to}
        render={() => <e.component classes={classes} />}
      />
    )),
    <Route key={'404'} render={() => <Gs404 classes={classes} />} />
  ];
};

const App = () => {
  return (
    <>
      <div id="gs-background" />
      <Router>
        <div className="container mx-auto">
          <Menu />
          <Header />

          <GsLinks />
          <Switch>
            {Content()}
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;