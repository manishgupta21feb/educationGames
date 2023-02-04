import React from 'react';
import Button from '../../../../../app/components/Button';

const Screen1Top = (props) => {

  const {
    screen1HotspotData,
    onClick,
    isPopupActive,
    selectedHotspot,
    visitedHotspots,
    topScreenImgText,
    imgAltTexts
  } = props;

  return (
    <div className="top-section">
      <div className="top-img-wrapper">
        <img className="sr-only sr-image" alt={imgAltTexts.screen1ImgAltText} />
        <div className="top-img-right-wrapper" aria-hidden="true">
          <span className="bg-color-1 text-box">{topScreenImgText.dna}</span>
          <span className="arrow blue"></span>
          <span className="bg-color-2 text-box">{topScreenImgText.mrna}</span>
          <span className="text-round-box">{topScreenImgText.transcription}</span>
          <span className="bg-color-3 text-box">{topScreenImgText.mrnatrna}</span>
          <span className="arrow green"></span>
          <span className="bg-color-1 text-box">{topScreenImgText.protein}</span>
        </div>
        <div className="only-text-wrapper" aria-hidden="true">
          <span className="only-text text-1">{topScreenImgText.aminoAcids}</span>
          <span className="only-text text-2">{topScreenImgText.mrna}</span>
          <span className="only-text text-3">{topScreenImgText.ribosome}</span>
        </div>
        <div className="text-box-wrapper" aria-hidden="true">
          <span className="bg-color-1 text-box first">{topScreenImgText.dna}</span>
          <span className="bg-color-1 text-box second">{topScreenImgText.proteinChain}</span>
          <span className="bg-color-2 text-box third">{topScreenImgText.mrna}</span>
        </div>
        {
          screen1HotspotData.map((h) =>
            <div key={h.id}>
              <div className={`bullet-line-wrapper ${h.id}`}>
                <div className='bullet'></div>
                <div className='dotted-line'></div>
              </div>
              <Button
                classes={`hotspot-btn label ${visitedHotspots.indexOf(h.serNo) >= 0 ? "visited" : ""}`}
                key={h.serNo}
                id={h.id}
                text={h.text}
                disabled={
                  isPopupActive ||
                  !!selectedHotspot ||
                  visitedHotspots.indexOf(h.serNo) >= 0
                }
                ariaHidden={isPopupActive || !!selectedHotspot || null}
                onClick={() => onClick(h.serNo)}
              >
              </Button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Screen1Top;