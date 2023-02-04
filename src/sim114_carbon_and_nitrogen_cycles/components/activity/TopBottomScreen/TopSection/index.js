import React from 'react';
import './style.scss';

const TopSection = (props) => {

  const {
    screenTopdata
  } = props;

  return (
    <div className={`top-section-wrapper ${screenTopdata.classes}`}>
      <img className="sr-image sr-only" alt={screenTopdata.altText} />
      {
        screenTopdata.imgTexts &&
        <div className="text-wrapper" aria-hidden="true">
          {
            screenTopdata.imgTexts?.map((item, i) =>
              <span
                className={item.classes}
                key={i}
                dangerouslySetInnerHTML={{
                  __html: item.text
                }}
              ></span>
            )
          }
        </div>
      }
    </div>
  )
}

export default TopSection;