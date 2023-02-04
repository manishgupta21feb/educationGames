import React, { useEffect } from "react";
import "./style.scss";
const LeftArea = (props) => {
  const {
    leftAreaData,
    imageId,
    helpHintContent,
    hintShow,
    ariaLiveText,
  } = props;
  useEffect(() => {
    if (hintShow) {
      ariaLiveText(helpHintContent);
    }
  }, [hintShow]);
  return (
    <>
      {leftAreaData.map((item, indexes) => {
        const show = item.id == imageId;
        return (
          <div key={indexes}>
            <div
              className={`left-area ${item.classes} ${show ? "show" : ""} `}
              aria-hidden={!show}
            >
              <img className="sr-only sr-image" alt={item.imageAltText} />
              <div className={`left-text ${item.id} `}>
                <div className="arrow" />

                {item.displayData.map((items, index) => {
                  return (
                    <div key={index} className="text-value" aria-hidden="true">
                      <div className={`text${index}`}>{items}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      {hintShow ? (
        <div
          role="alertdialog"
          className="instruction-text-wrapper  "
          aria-label={helpHintContent}
        >
          <div role="img" className="help-hint" />
          <p
            dangerouslySetInnerHTML={{ __html: helpHintContent }}
            className="info-text"
          ></p>
        </div>
      ) : null}
    </>
  );
};
export default LeftArea;
