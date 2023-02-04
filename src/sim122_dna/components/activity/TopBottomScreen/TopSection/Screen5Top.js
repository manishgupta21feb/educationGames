import React from 'react';
import Button from '../../../../../app/components/Button';

const Screen5Top = (props) => {

  const {
    screen5HotspotData,
    isPopupActive,
    selectedHotspot,
    visitedHotspots,
    onClick,
    topScreenImgText,
    imgAltTexts
  } = props;

  return (
    <div className="top-section screen-5-top-section">
      <div className="top-img-wrapper">
        <img className="sr-only sr-image" alt={imgAltTexts.screen5ImgAltText} />
        <div className="top-img-right-wrapper" aria-hidden="true">
          <span className="bg-color-1 text-box">{topScreenImgText.dna}</span>
          <span className="arrow blue"></span>
          <span className="bg-color-2 text-box">{topScreenImgText.mrna}</span>
          <span className="text-round-box">{topScreenImgText.transcription}</span>
          <span className="bg-color-3 text-box">{topScreenImgText.mrnatrna}</span>
          <span className="arrow green"></span>
          <span className="bg-color-1 text-box">{topScreenImgText.protein}</span>
          <span className="only-text text-4">{topScreenImgText.translation}</span>
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
          <span className="bg-color-3 text-box forth">{topScreenImgText.trna}</span>
        </div>
        {
          screen5HotspotData.map((h) =>
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

export default Screen5Top;