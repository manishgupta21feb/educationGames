import React, { useState, useEffect, useRef } from "react";
import Draggable from "../../containers/DraggableContainer";
import Top from "../../containers/TopHeaderContainer";
import AccessibileList from "../../containers/AccesibilityListContainer";
import "./style.scss";
import Footer from "../../containers/FooterContainer";

const ActivityArea = (props) => {
  const [showNext, setShowNext] = useState(false);
  const ref = useRef(null);
  const dayRef = useRef(null);
  const { data, activeDay, getSelectedDay, days, selectedDraggable, toastMsg } =
    props;
  useEffect(() => {
    const selectedItem = days.filter((item) => item.visited);
    setShowNext(days.length === selectedItem.length);
  }, [days]);

  useEffect(() => {
    if (!selectedDraggable && ref.current) {
      const activeDay = dayRef.current.querySelector(
        ".button-wrapper button:not(:disabled)"
      );
      if (activeDay || toastMsg == "incorrect") {
        const button = ref.current.querySelector(
          ".drag-box button:not(:disabled)"
        );
        if (button) {
          button.focus();
        }
      }
    }
  }, [getSelectedDay, toastMsg]);

  return (
    <div className="activity_area" ref={dayRef}>
      <div className="headinglevelDiv">
        {showNext ? (
          <h2 className={`headingLevel2 ${getSelectedDay}`}>{data.last_ost}</h2>
        ) : (
          <h2 className={`headingLevel2 ${getSelectedDay ? "bottomAdd" : ""}`}>
            {getSelectedDay ? activeDay.headingText : data.ost_same}
          </h2>
        )}
      </div>

      <Top />
      <AccessibileList />
      <div ref={ref}>{showNext ? <Footer /> : <Draggable />}</div>
    </div>
  );
};

export default ActivityArea;
