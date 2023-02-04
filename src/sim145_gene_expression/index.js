import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const App = lazy(() => import("./app"));
import * as Tincan from "../app/tincan";

import tincanData from "./data/tincan";

import preloader from "../app/helpers/preloader";

require("webpack-jquery-ui");
require("jquery-ui-touch-punch");

const loading = () => {
  return <div>Loading...</div>;
};

preloader(() => {
  Tincan.init(tincanData, () => {
    ReactDOM.render(
      <Suspense fallback={loading()}>
        <App />
      </Suspense>,
      document.querySelector("#root")
    );
  });
});
