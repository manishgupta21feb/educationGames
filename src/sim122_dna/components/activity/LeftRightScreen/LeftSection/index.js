import React, { useRef, useEffect } from 'react';
import './style.scss';
import AccessibleList from '../../../../containers/AccessibleList';

const LeftSection = (props) => {

  const ref = useRef(null);

  const {
    screen6StandData,
    screen6Dropzones,
    onDrop,
    droppedItems,
    screen6BoxText1,
    screen6BoxText2,
    topScreenImgText,
    setScreen6Dropzones,
    dropzoneStatus,
    setDropzoneStatus,
    imgAltTexts
  } = props;

  const createDroppables = (elements) => {
    $(elements).droppable({
      drop: function (event, ui) {
        const {
          dataset: { id },
        } = event.target;
        const dropzone = id;
        ui.helper[0].style.display = "none";
        onDrop(dropzone);
        setDropzoneStatus(false);
      },
    });
  };

  useEffect(() => {
    if (dropzoneStatus) {
      setTimeout(() => {
        if (ref.current) {
          const elements = ref.current.querySelectorAll(".screen6-dropzones");
          if (elements && elements.length) {
            createDroppables(elements);
          }
        }
      }, 500);
    }
  }, [dropzoneStatus]);

  useEffect(() => {
    setScreen6Dropzones();
  }, []);

  return (
    <div className="left-section">
      <p className="instruction-text">{topScreenImgText.mrna}:</p>
      <div className="strand-img-with-text screen6-strand">
        <span className="img"></span>
        <img className="sr-only sr-image" alt={imgAltTexts.screen6Strand1AltText} />
        <div className="strand-text-wrapper" aria-hidden="true">
          {
            screen6StandData.map((s) =>
              <span
                key={s.class}
                className={`strand-text ${s.class}`}
              >
                {s.text}
              </span>
            )
          }
        </div>
      </div>
      <div className="screen6-droppable-main-wrapper">
        <p className="instruction-text bottom-gap">{screen6BoxText1.heading}:</p>
        <div className="screen6-droppable-row" aria-hidden="true">
          {
            screen6BoxText1.data.map((item, i) =>
              <span className={`box ${item.class}`} key={i}>
                <span className="text">{item.text}</span>
              </span>
            )
          }
        </div>
        <p className="instruction-text bottom-gap">{screen6BoxText2.heading}:</p>
        <div className="screen6-droppable-row" aria-hidden="true">
          {
            screen6BoxText2.data.map((item, i) =>
              <span className={`box ${item.class}`} key={i}>
                <span className="text">{item.text}</span>
              </span>
            )
          }
        </div>
        <div className="droppables-wrapper" ref={ref}>
          {
            screen6Dropzones.map((item, i) =>
              <div
                id={item.id}
                data-id={item.id}
                className='screen6-dropzones'
                key={`droppable-${item.id}`}
              >
              </div>
            )
          }
          {
            droppedItems.map((item, i) =>
              <div
                className={`screen6-dropped-item ${item.id} ${item.dropzone}`}
                key={i}>
                <span className="text">{item.text}</span>
              </div>
            )
          }
        </div>
      </div>
      <AccessibleList />
    </div>
  )
}

export default LeftSection;