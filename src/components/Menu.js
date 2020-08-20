import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Menu = ({ links }) => {
  const [isShown, setIsShown] = useState(false);
  const [t, i18n] = useTranslation();

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

export default Menu;