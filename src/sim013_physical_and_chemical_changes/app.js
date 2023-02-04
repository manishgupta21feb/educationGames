import React, { useEffect } from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import "./stylesheets/main.scss";
import RootContainer from "./containers/RootContainer";
import { getSimLanguage } from "../app/helpers";

const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);

export default (props) => {
  const onMouseDown = (e) => {
    const body = document.querySelector("body");
    if (body && !body.classList.contains("no-outline")) {
      body.classList.add("no-outline");
    }
  };

  const onKeyDown = (e) => {
    if (e.key && e.key == "Tab") {
      const body = document.querySelector("body");
      if (body && body.classList.contains("no-outline")) {
        body.classList.remove("no-outline");
      }
    }
  };

  useEffect(() => {
    console.log("App component mounted");
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("mousedown", onMouseDown, true);
    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementsByTagName("html")[0].lang = getSimLanguage();

  }, []);

  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};
