import ReactDOM from "react-dom";
import React, { useState } from "react";
import i18n from "./i18n.js";
import { useTranslation } from "react-i18next";
import './tailwind.css';
import "./index.scss";
import { ReactComponent as GitHubLogo } from "./img/github.svg";
import { ReactComponent as LinkedInLogo } from "./img/linkedin.svg";
import { ReactComponent as AboutLogo } from "./img/about.svg";
import { ReactComponent as XpLogo } from "./img/xp.svg";
import { ReactComponent as SkillsLogo } from "./img/skills.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";

const GsLink = props => {
  const location = useLocation();

  return (
    <Link
      className={
        "border-b-2 pb-1 pt-2 px-2 my-10 mx-8 text-white uppercase transition-colors duration-500 ease-in-out hover:text-purple-900 hover:bg-white " +
        (location.pathname === "/" + i18n.language + props.to
          ? "bg-gray-200 text-gray-800"
          : "")
      }
      to={"/" + i18n.language + props.to}
    >
      {props.children}
    </Link>
  );
};

const GsLinks = ({ links }) => {
  const [t] = useTranslation();

  return (
    <div className="hidden sm:flex justify-center">
      {links.map(e => (
        <GsLink to={e.to} key={e.to}>
          {t(e.name)}
        </GsLink>
      ))}
    </div>
  );
};

const Skills = ({ classes }) => {
  return (
    <div className={classes}>
      <div>Skills</div>
    </div>
  );
};

const Experience = ({ classes }) => {
  return (
    <div className={classes}>
      <div>Experience</div>
    </div>
  );
};

const About = ({ classes }) => {
  return (
    <div className={classes}>
      <div>
        <img
          className="float-none sm:float-left w-64 sm:w-32 mx-auto"
          src="https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2018/02/is-your-dog-fat-shutterstock_618287804.jpg"
          alt=""
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget
        nunc scelerisque viverra. Elementum nibh tellus molestie nunc non
        blandit massa. Ultrices sagittis orci a scelerisque purus. Lorem mollis
        aliquam ut porttitor leo a. Iaculis urna id volutpat lacus laoreet non
        curabitur. Risus pretium quam vulputate dignissim. Posuere morbi leo
        urna molestie at. Cras pulvinar mattis nunc sed. Curabitur gravida arcu
        ac tortor dignissim convallis aenean et tortor. Vel quam elementum
        pulvinar etiam non quam. Viverra vitae congue eu consequat ac felis
        donec et. Dolor magna eget est lorem. Scelerisque eu ultrices vitae
        auctor eu augue. Scelerisque fermentum dui faucibus in ornare quam.
        Fringilla phasellus faucibus scelerisque eleifend donec pretium
        vulputate sapien. Proin fermentum leo vel orci porta non.
      </div>
    </div>
  );
};

const Menu = ({ links }) => {
  const [isShown, setIsShown] = useState(false);
  const [t] = useTranslation();

  return (
    // adapted from https://www.w3schools.com/howto/howto_css_menu_icon.asp
    <div>
      <div className="sm:hidden m-0 p-0 h-12" />
      <div className="fixed inset-0 sm:hidden m-0 p-0 w-full h-12 bg-black">
        <div
          className={
            "absolute inline-flex flex-col justify-between ml-2 mt-2 h-8 w-10 cursor-pointer " +
            (isShown ? "change" : "")
          }
          onClick={() => setIsShown(!isShown)}
        >
          <div className="bar1 h-2" />
          <div className="bar2 h-2" />
          <div className="bar3 h-2" />
        </div>
      </div>
      <div
        className={
          "sm:hidden fixed h-screen transition transform duration-500 ease-in-out top-12 w-64 bg-indigo-900 " +
          (isShown
            ? "translate-x-0 menu-shadow"
            : "-translate-x-full no-shadow")
        }
      >
        <ul className="text-white text-xl menu-link">
          {links.map(e => (
            <li className="p-3 my-2" key={e.name}>
              <Link
                className="block pl-2 border-b-4 border-pink-800"
                to={"/" + i18n.language + e.to}
                onClick={() => setIsShown(false)}
              >
                {
                  <e.icon className="inline-block mb-1 mr-2 w-4 h-4 fill-current text-gray-200" />
                }
                {t(e.name)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Gs404 = ({ classes }) => {
  const [t] = useTranslation();

  return (
    <div className={classes}>
      {t('404')}
    </div>
  );
}

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
            onClick={() =>
              i18n.language !== trans && i18n.changeLanguage(trans)
            }
          >
            {trans}
          </Link>)}
      </div>
    </div>
  );
};

const Header = ({ links }) => {
  const [t] = useTranslation();
  const location = useLocation();

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

      <div className="text-right">
        <a
          className="mr-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/gabrielmdu"
        >
          <GitHubLogo className="inline-block w-8 h-8 fill-current text-gray-200" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/gabrielschulte"
        >
          <LinkedInLogo className="inline-block w-8 h-8 fill-current text-gray-200" />
        </a>
      </div>
      <div className="sm:hidden inline-block uppercase text-white mt-3 mb-4 pb-1 pt-1 px-2 bg-gray-200 text-gray-800">
        {headerLink ? t(headerLink.name) : '404'}
      </div>
    </div>
  );
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
