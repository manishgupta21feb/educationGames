import "react-app-polyfill/ie11"; //added pollyfill suppourt  latest ES feature in IE11
import "react-app-polyfill/stable"; //added pollyfill to suppourt all stable ES features across browser.
import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import * as Tincan from "../app/tincan";

import tincanData from "./data/tincan";

import preloader from "../app/helpers/preloader";

require("webpack-jquery-ui");
require("jquery-ui-touch-punch");

preloader(() => {
  Tincan.init(tincanData, () => {
    ReactDOM.render(<App />, document.querySelector("#root"));
  });
});
