import React from 'react';
import './style.scss';
import Button from '../../../../app/components/Button';

const FullViewScreen = (props) => {

  const {
    fullViewData,
    onClick,
    visitedHotspotData,
    isPopupActive
  } = props;

  return (
    <div className="full-view-wrapper">
      <h2 className="instruction-text">
        {
          fullViewData.headings.map((text, i) =>
            <span
              key={i}
              dangerouslySetInnerHTML={{
                __html: text
              }}
            ></span>
          )
        }
      </h2>
      <div className="tabs-wrapper">
        {
          fullViewData.imgTexts?.map((item, i) =>
            <div className={`tab-box ${item.classes}`} key={i}>
              <img className="sr-only sr-image" alt={item.altText} />
              <span className="img" aria-hidden="true"></span>
              {
                item.texts &&
                <div className="texts" aria-hidden="true">
                  {
                    item.texts?.map((textItem, i) =>
                      <span
                        key={i}
                        className={textItem.classes}
                        dangerouslySetInnerHTML={{
                          __html: textItem.text
                        }}
                      >
                      </span>
                    )
                  }
                </div>
              }
              <div className="button-wrapper">
                <Button
                  id={item.hotspotButton.id}
                  classes={`hotspot-btn label ${visitedHotspotData.indexOf(item.hotspotButton.id) >= 0 ? "visited" : ""}`}
                  text={item.hotspotButton.text}
                  disabled={
                    isPopupActive || visitedHotspotData.indexOf(item.hotspotButton.id) >= 0
                  }
                  onClick={() => onClick(item.hotspotButton.id)}
                ></Button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FullViewScreen;