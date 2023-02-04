import React from "react";
import "./style.scss";
const Top = (props) => {
  const {
    ifSubScreen,
    questionScreen2,
    questionScreen1,
    mcqImgTxt,
    staticImgTxt,
    topStaticAltTxt,
    topScreen2AltTxt,
  } = props;

  return (
    <div className="top-area">
      <div className={ifSubScreen ? questionScreen1 : questionScreen2}>
        <img
          className="sr-only sr-image"
          alt={ifSubScreen ? topStaticAltTxt : topScreen2AltTxt}
        />
      </div>
      {ifSubScreen
        ? staticImgTxt && staticImgTxt.length
          ? staticImgTxt.map((txt) => {
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
          })
        : null}
    </div>
  );
};

export default Top;
