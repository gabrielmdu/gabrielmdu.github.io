import React from "react";
import { ReactComponent as AboutLogo } from "../assets/img/about.svg";
import { ReactComponent as XpLogo } from "../assets/img/xp.svg";
import { ReactComponent as SkillsLogo } from "../assets/img/skills.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import About from "./content/About";
import Experience from "./content/Experience";
import Skills from "./content/Skills";
import Header from "./Header";
import Menu from "./Menu";
import GsLinks from "./Link";
import Gs404 from "./404";

const Content = links => {
  const [, i18n] = useTranslation();

  const classes = "text-white mx-8 sm:mx-10 md:mx-16 lg:mx-32 xl:mx-64";

  return [
    <Route key={'home'} exact path="/">
      <Redirect to={"/" + i18n.language + "/about"} />
    </Route>,
    ...links.map(e => (
      <Route
        key={e.name}
        exact
        path={"/" + i18n.language + e.to}
        render={() => <e.component classes={classes} />}
      />
    )),
    <Route key={'404'} render={() => <Gs404 classes={classes} />} />
  ];
};

const App = () => {
  const links = [
    { to: "/about", component: About, name: "about", icon: AboutLogo },
    { to: "/xp", component: Experience, name: "xp", icon: XpLogo },
    { to: "/skills", component: Skills, name: "skills", icon: SkillsLogo }
  ];

  return (
    <Router>
      <div className="container mx-auto">
        <Menu links={links} />
        <Header links={links} />

        <GsLinks links={links} />
        <Switch>
          {Content(links)}
        </Switch>
      </div>
    </Router>
  );
};

export default App;