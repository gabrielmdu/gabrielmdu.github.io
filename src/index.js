import ReactDOM from "react-dom";
import React from "react";
import { starti18n } from "./i18n.js";
import App from "./components/App.js";
import './tailwind.css';
import "./index.scss";

starti18n();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
