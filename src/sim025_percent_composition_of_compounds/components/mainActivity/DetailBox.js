import React, { useEffect, useState, useRef } from "react";
import Button from "../../../app/components/Button";
import { common, setButtonShow, ariaLiveText } from "../../actions";
import data from "../../data";
import "./style.scss";

const DetailBox = (props) => {
  const {
    item,
    infoTableCommonText,
    onClick,
    onClick2,
    setButtonShow,
    onClick3,
    isPopupActive,
    ariaLiveText,
    helpText,
    showText
  } = props;

  const [shows, setShows] = useState(false);

  const onShowClick = (val, percent) => {
    setShows(true);
    ariaLiveText(val, percent);
  };

  useEffect(() => {
    setShows(false);
  }, []);

  return (
    <div key={`itemdetails-${item.id}`} className="item-details">
      <h3>
        <p>{item.name}</p>
      </h3>
      <div className="info">
        {infoTableCommonText.map((text, index) => {
          return (
            <div key={`itemdetails-info-${item.id}${index}`}>
              <p className="buttoninfo">{text.name}</p>
              {text.hide ? (
                setButtonShow ? (
                  <p>
                    {item.info[text.id]}
                    <Button
                      classes={`question-text`}
                      onClick={onClick3}
                      isPopupActive={isPopupActive}
                      label={item.name + helpText}
                    >
                      {text.labelHelp}
                    </Button>
                  </p>
                ) : (
                  <div className="parent">
                    <Button
                      classes={`question-text`}
                      onClick={onClick3}
                      isPopupActive={isPopupActive}
                      label={item.name + helpText}
                    >
                      {text.labelHelp}
                    </Button>
                    {shows ? (
                      <p
                        className="percentage"
                        role="navigation"
                        aria-label={`${text.name} of ${item.name} is ${
                          item.info[text.id]
                        }`}
                      >
                        {item.info[text.id]}
                      </p>
                    ) : (
                      <button
                        className="show-btn"
                        aria-label={item.name + showText}
                        onClick={() =>
                          onShowClick(item.name, item.info[text.id])
                        }
                        disabled={isPopupActive}
                      >
                        <p className="showButton">{text.labelShow}</p>
                      </button>
                    )}
                  </div>
                )
              ) : (
                <p>{item.info[text.id]}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailBox;
