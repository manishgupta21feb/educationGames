import React, { useEffect, useRef } from "react";
import "./style.scss";
import Button from "../../../../app/components/Button";
const zoomView = (props) => {
  // const zoomRef = useRef(null);
  const ref = useRef(null);
  const {
    onClick,
    buttonId,
    chartData,
    closeLabel,
    sliderDisabled,
    sliderValue,
    zoomPopupOpen,
    label,
  } = props;

  useEffect(() => {
    if (ref && ref.current) {
      const buttons = ref.current.querySelectorAll("button");
      if (buttons && buttons.length) {
        if (props.setPopupFirstElement) {
          props.setPopupFirstElement(buttons[0]);
        }
        if (props.setPopupLastElement) {
          props.setPopupLastElement(buttons[buttons.length - 1]);
        }
      }
    }
  }, []);
  return (
    <div className="zoom-view-wrapper">
      <div className="zoom-view-container" ref={ref}>
        <div aria-modal role="dialog" aria-label={label}>
          <div className="close-btn">
            <Button
              label={closeLabel}
              onClick={onClick}
              classes={`toast-button positive icon-only`}
            />
          </div>
          {chartData.map((items) => {
            const showZoomView = items.id == buttonId;
            return (
              <div
                key={items.id}
                aria-hidden={!showZoomView ? "true" : "false"}
              >
                <div
                  className={`zoomview ${items.id} ${
                    showZoomView ? "show" : ""
                  }`}
                >
                  <p
                    className="zoom-heading"
                    dangerouslySetInnerHTML={{ __html: items.graphTitle }}
                  ></p>
                  <p
                    className="zoom-yaxis"
                    dangerouslySetInnerHTML={{ __html: items.yaxis }}
                  ></p>
                  {items.reading.map((read, index) => {
                    return (
                      <p
                        aria-hidden="true"
                        key={`${items.id}${index}`}
                        className={`zoom-read zoom${items.id}${index}`}
                      >
                        {read}
                      </p>
                    );
                  })}

                  <div
                    role="img"
                    className="zoom-imageAlt"
                    aria-label={`${items.id}`}
                  />

                  {!sliderDisabled ? (
                    <>
                      <div
                        className={`zoom-hidden-part1 slider${sliderValue}`}
                      />
                      <div
                        className={`zoom-hidden-part2 slider${sliderValue}`}
                      />
                    </>
                  ) : null}
                  <p aria-hidden="true" className="zoom-xaxis">
                    {items.xaxis}
                  </p>
                  {items.years.map((year) => {
                    return (
                      <p
                        aria-hidden="true"
                        key={`${items.id}${year}`}
                        className={`zoom-year zoom${items.id}${year}`}
                      >
                        {year}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default zoomView;
