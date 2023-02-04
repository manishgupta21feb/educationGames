import React, { useRef, useEffect } from 'react';
import Button from '../../../../app/components/Button';
import NextButtonContainer from '../../../containers/NextButtonContainer';
import DraggablesContainer from '../../../containers/DraggablesContainer';
import AccessibleList from '../../../containers/AccessibleList';

const FullViewScreen4 = (props) => {

  const ref = useRef(null);

  const {
    screen4QuestionText,
    screen4Strand1Data,
    screen4Strand2Data,
    droppedItems,
    screen4Dropzones,
    onDrop,
    onSubmitAnswer,
    screen4CorrectAnswer,
    setScreen4Dropzones,
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
          const elements = ref.current.querySelectorAll(".dropzones");
          if (elements && elements.length) {
            createDroppables(elements);
          }
        }
      }, 500);
    }
  }, [dropzoneStatus]);

  useEffect(() => {
    setScreen4Dropzones();
  }, []);

  return (
    <div className="full-view-wrapper">
      <h2 className="instruction-text screen4-heading-gap">
        {screen4QuestionText}
      </h2>
      <DraggablesContainer />
      <div className="strand-img-with-text screen4-strand">
        <span className="first-text" aria-hidden="true">
          5 <sup>'</sup>
        </span>
        <span className="img"></span>
        <img className="sr-only sr-image" alt={imgAltTexts.screen4Strand1AltText} />
        <div className="strand-text-wrapper" aria-hidden="true">
          {
            screen4Strand1Data.map((s) =>
              <span
                key={s.class}
                className={`strand-text ${s.class}`}
              >
                {s.text}
              </span>
            )
          }
        </div>
        <span className="last-text" aria-hidden="true">
          3 <sup>'</sup>
        </span>
      </div>
      <div className="strand-img-with-dropzone-wrapper">
        <div className="strand-img-with-text screen4-strand2">
          <span className="img"></span>
          <img className="sr-only sr-image" alt={imgAltTexts.screen4Strand2AltText} />
          <div className="strand-text-wrapper" aria-hidden="true">
            {
              screen4Strand2Data.map((s) =>
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
        <div className="droppables-wrapper" ref={ref}>
          {
            screen4Dropzones.map((item, i) =>
              <div
                id={item.id}
                data-id={item.id}
                className='dropzones'
                key={`droppable-${item.id}`}
              >
              </div>
            )
          }
          {
            droppedItems.map((item, i) =>
              <div
                className={`dropped-item ${item.id} ${item.dropzone}`}
                key={i}>
                <span className="icon"></span>
                <span className="text">{item.text}</span>
              </div>
            )
          }
        </div>
      </div>
      <AccessibleList />
      <div className="submit-btn-wrapper">
        <Button
          classes="btn primary"
          text="Submit Answer"
          onClick={onSubmitAnswer}
          disabled={droppedItems.length <= 6 || screen4CorrectAnswer}
        >
        </Button>
      </div>
      {screen4CorrectAnswer && <NextButtonContainer />}
    </div>
  )
}

export default FullViewScreen4;