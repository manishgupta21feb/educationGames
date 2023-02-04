import React from "react";
import "./style.scss";
const Top = (props) => {
  const {
    ifSubScreen,
    screenTwoTxt,
    imgText,
    imgId,
    mcqImgTxt,
    mcqImgId,
    altText,
  } = props;

  return (
    <div className="top-area">
      <div className={ifSubScreen ? imgId : mcqImgId}>
        <img className="sr-only sr-image" alt={altText} />
      </div>
      {ifSubScreen
        ? imgText && imgText.length
          ? imgText.map((txt) => {
              return (
                <span
                  aria-hidden
                  key={txt.id}
                  className={`static${txt.id}`}
                  dangerouslySetInnerHTML={{
                    __html: txt.name,
                  }}
                ></span>
              );
            })
          : null
        : mcqImgTxt && mcqImgTxt.length
        ? mcqImgTxt.map((mcqImg) => {
            if (mcqImg.id == "helps" || mcqImg.id == "feed") {
              return (
                <div className={`mcq${mcqImg.id}`} key={`div--${mcqImg.id}`}>
                  <span
                    aria-hidden
                    dangerouslySetInnerHTML={{
                      __html: mcqImg.name,
                    }}
                  ></span>
                </div>
              );
            } else {
              return (
                <span
                  aria-hidden
                  key={mcqImg.id}
                  className={`mcq${mcqImg.id}`}
                  dangerouslySetInnerHTML={{
                    __html: mcqImg.name,
                  }}
                ></span>
              );
            }
          })
        : null}
    </div>
  );
};

export default Top;
