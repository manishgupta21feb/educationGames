import React, { useRef, useEffect, useState } from "react";
import ButtonContainerPrimary from "../../containers/ButtonContainerprimary";
import ButtonContainerTertiary from "../../containers/ButtonContainertertiary";
import ButtonContainerProducers from "../../containers/ButtonContainerproducers";
import ButtonContainerSecondary from "../../containers/ButtonContainersecondary";
import "./style.scss";

const LeftInteractive = (props) => {
  const ref = useRef(null);
  const levelSelectedRef = useRef("");
  const [visited, setVisited] = useState([]);
  const {
    kitchenItems,
    levelSelected,
    altTexts: { sun, rabbit, plants, snake, eagle, foodChain },
    headingText,
    selectedOrganisms,
    startActivity,
  } = props;

  const Buttons = {
    Primary: ButtonContainerPrimary,
    Producers: ButtonContainerProducers,
    Secondary: ButtonContainerSecondary,
    Tertiary: ButtonContainerTertiary,
  };

  useEffect(() => {
    if (!levelSelected && levelSelectedRef.current) {
      if (ref && ref.current) {
        const button = ref.current.querySelector(
          `.button-wrapper.${levelSelectedRef.current} button`
        );
        if (button) {
          setTimeout(() => {
            button.focus();
          });
        }
      }
    }
    if (levelSelected != "" && !visited.find((e) => e == levelSelected)) {
      setVisited([...visited, levelSelected]);
    }
    levelSelectedRef.current = levelSelected;
  }, [levelSelected]);

  useEffect(() => {
    if (!startActivity) {
      setVisited([]);
    }
  }, [selectedOrganisms.length == 0]);

  return (
    <div className="left-interactive">
      <h1 className="sr-only">{headingText}</h1>
      <div role="img" aria-label={foodChain} className="sr-readOnly"></div>
      <div className="food-chain">
        <div
          role="img"
          aria-label={sun}
          className={`highlighter producers1 ${
            (levelSelected !== "producers" && "no-border") || ""
          }`}
        ></div>
        <div
          aria-hidden={true}
          className={`arrow producers1 ${
            (levelSelected !== "producers" && "no-border") || ""
          }`}
        ></div>
        <div
          role="img"
          aria-label={plants}
          className={`highlighter primary1 ${
            (levelSelected !== "primary" &&
              levelSelected !== "producers" &&
              "no-border") ||
            ""
          }`}
        ></div>
        <div
          aria-hidden={true}
          className={`arrow primary1 ${
            (levelSelected !== "primary" && "no-border") || ""
          }`}
        ></div>
        <div
          role="img"
          aria-label={rabbit}
          className={`highlighter secondary1 ${
            (levelSelected !== "secondary" &&
              levelSelected !== "primary" &&
              "no-border") ||
            ""
          }`}
        ></div>
        <div
          aria-hidden={true}
          className={`arrow secondary1 ${
            (levelSelected !== "secondary" && "no-border") || ""
          }`}
        ></div>
        <div
          role="img"
          aria-label={snake}
          className={`highlighter secondary2 ${
            (levelSelected !== "secondary" &&
              levelSelected !== "tertiary" &&
              "no-border") ||
            ""
          }`}
        ></div>
        <div
          aria-hidden={true}
          className={`arrow tertairy1 ${
            (levelSelected !== "tertiary" && "no-border") || ""
          }`}
        ></div>
        <div
          role="img"
          aria-label={eagle}
          className={`highlighter tertairy2 ${
            (levelSelected !== "tertiary" && "no-border") || ""
          }`}
        ></div>
      </div>
      <p className="text-info">{props.screentext1}</p>
      <div className="pyramid-wrapper">
        <div ref={ref} className="empty-pyramid">
          {kitchenItems.map((q) => {
            const tp = q.id;
            const component = tp[0].toUpperCase() + tp.substr(1);
            const selected = q.id == levelSelected ? "selected" : "";
            return (
              <React.Fragment key={`${q.id}-overlay`}>
                <div
                  role="img"
                  aria-label={q.alt}
                  aria-hidden={!selected}
                  className={`pyramid-sections ${q.className} ${selected}`}
                ></div>
                <div className={`button-wrapper ${q.className} ${q.id}`}>
                  <div className={`bullet `}></div>
                  <div className={`dotted-line `}></div>
                  {React.createElement(Buttons[component], {
                    elem: q.id,
                    ariaPressed: selected == "selected" ? true : false,
                  })}
                  <div
                    className={`tick-mark ${
                      visited.find((e) => e == q.id && levelSelected != q.id)
                        ? "show"
                        : ""
                    }`}
                  ></div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <p aria-hidden={true} className="text-info pyramid-text">
          {props.screentext2}{" "}
        </p>
      </div>
    </div>
  );
};

export default LeftInteractive;
