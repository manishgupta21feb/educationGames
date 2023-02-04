import React, { useState, useEffect } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const LeftInteractive = (props) => {
  const {
    questions,
    onClick,
    selectedQuestion,
    selectedOrganisms,
    startActivity,
    isPopupActive,
    correctAnswer,
    ariaLiveText,
  } = props;

  const [itemClicked, setItemClicked] = useState("");
  const [changeWidth, setChangeWidth] = useState(false);
  const [ariaText, setAriaText] = useState("");

  useEffect(() => {
    setChangeWidth(false);
  }, [selectedQuestion]);

  const showInternalParts = (item, ariaText) => {
    if (selectedQuestion == 2) {
      if (changeWidth && itemClicked == item) {
        setChangeWidth(false);
      } else {
        setChangeWidth(true);
        ariaLiveText(ariaText);
      }
    }
  };

  return (
    <div className="left-interactive">
      {questions
        .filter((q) => q.id == selectedQuestion)
        .map((q) => {
          return (
            <React.Fragment key={q.id}>
              <img
                className="sr-only sr-image"
                alt={ariaText && q.id == 2 ? ariaText : q.altText}
              />
              <div
                className={`${q.className} ${
                  changeWidth ? "change-width" : ""
                } ${startActivity ? "play" : ""} `}
                key={q.id}
              >
                {q.animals.map((a) => {
                  return (
                    <React.Fragment key={`${a.id}`}>
                      {selectedQuestion == 2 ? (
                        <div
                          className={`text-position-${a.id} ${
                            itemClicked == a.id && changeWidth == true
                              ? "position2"
                              : ""
                          }`}
                        >
                          <span>{`${a.text}`}</span>
                          <div
                            style={{
                              opacity:
                                itemClicked == a.id && changeWidth == true
                                  ? "1"
                                  : "0",
                            }}
                            className={`system-label-${a.id} 
                            `}
                          >
                            <div
                              className={`${
                                itemClicked == a.id && changeWidth == true
                                  ? `pointer-${a.id}`
                                  : null
                              }`}
                            ></div>
                          </div>
                        </div>
                      ) : null}
                      <Button
                        hideTooltip={true}
                        type="button"
                        id={a.id}
                        key={a.id}
                        title={a.text}
                        label={a.text}
                        ariaLabel={a.text}
                        ariaHidden={isPopupActive}
                        isPopUpOpen={isPopupActive}
                        text={
                          selectedQuestion == 2 || selectedQuestion == 1
                            ? ""
                            : a.text
                        }
                        ariaPressed={itemClicked == a.id ? true : false}
                        classes={`hotspot-btn label ${
                          selectedOrganisms.indexOf(a.id) >= 0 ? "active" : ""
                        } ${a.id}`}
                        onClick={() => {
                          onClick(a.id, selectedOrganisms.indexOf(a.id) >= 0);
                          showInternalParts(a.id, a.liveText);
                          setItemClicked(a.id);
                          setAriaText(a.liveText);
                        }}
                      ></Button>
                    </React.Fragment>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default LeftInteractive;
