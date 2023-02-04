import React from "react";
import Button from "../../../app/components/Button";

const About = (props) => {
  const {
    buttonLabel,
    aboutScreen,
    onAboutHandler,
    aboutContent: { text, list, announcement },
    isPopupActive,
  } = props;

  const li = list.map((item, index) => (
    <li key={index} className="list__item">
      {item}
    </li>
  ));

  return (
    <>
      <p
        className="paragraph"
        key={aboutScreen ? "about" : "intro"}
        dangerouslySetInnerHTML={{
          __html: aboutScreen ? text : announcement,
        }}
      ></p>
      {aboutScreen ? (
        <>
          <ul className="list">{li}</ul>
          <Button
            text={buttonLabel}
            classes="toast-secondary-button positive right-arrow"
            onClick={onAboutHandler}
            isPopUpOpen={isPopupActive}
          />
        </>
      ) : null}
    </>
  );
};

export default About;
