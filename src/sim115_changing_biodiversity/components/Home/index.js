import React from "react";
import "./home.scss";
import TriangleLines from "../TriangleLines";
import Button from "../../../app/components/Button";
import { getSimLanguage } from "../../../app/helpers";

const Home = (props) => {
  const {
    names,
    nextSection,
    hotspotData,
    hotspotClick,
    clickedButtonValue,
    disabledButton,
    correctOptions,
    isPopupActive,
    triangles,
    ecosystems,
  } = props;

  const name = names?.map((item) => {
    return (
      <span key={item} className="bgImg__name">
        {item}
      </span>
    );
  });

  const triangle = triangles.map((item, index) => {
    return (
      <TriangleLines key={index} totalTriangle={item} lineNumber={index + 1} />
    );
  });

  const button = hotspotData.map((a) => {
    return (
      <div className="button-main" key={a.serNo}>
        <div className={`button-wrapper ${a.class} `}>
          <div className={`bullet `}></div>
          <div className={`dotted-line `}></div>
          <div
            className={`tick-mark`}
            style={{ opacity: correctOptions.includes(a.id) ? "1" : "0" }}
          ></div>
        </div>
        <Button
          classes={`primary-toggle-button ${
            clickedButtonValue.includes(a.id) || correctOptions.includes(a.id)
              ? "selected"
              : ""
          }`}
          id={a.id}
          key={a.serNo}
          text={a.text}
          label={a.altText}
          ariaHidden={isPopupActive || null}
          disabled={
            isPopupActive ||
            (disabledButton && !clickedButtonValue.includes(a.id)) ||
            correctOptions.includes(a.id)
          }
          ariaPressed={
            clickedButtonValue.includes(a.id) || correctOptions.includes(a.id)
          }
          onClick={(e) => hotspotClick(a)}
        ></Button>
      </div>
    );
  });

  return (
    <div className={`bgImg ${getSimLanguage()}`}>
      <img className="sr-only sr-image" alt={ecosystems.alt}></img>
      {nextSection ? null : name}
      {triangle}
      {nextSection ? <div>{button}</div> : null}
    </div>
  );
};

export default Home;
