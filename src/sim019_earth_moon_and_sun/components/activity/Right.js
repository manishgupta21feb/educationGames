import React, { useEffect, useState } from "react";

const right = (props) => {
  const [daysArray, setDaysArray] = useState([]);
  const {
    onClick,
    selectedDay,
    isPopupActive,
    calendarData: { days, daysLabel, monthLabel, rightSectionHeading },
  } = props;

  useEffect(() => {
    const tempArray = [];
    for (let i = 1; i <= days; i++) {
      tempArray.push(i);
    }
    setDaysArray([...tempArray]);
  }, []);

  return (
    <div className="right-section">
      <h2>{rightSectionHeading}</h2>
      <div className="calendar">
        <p className="calendar-month-label">{monthLabel}</p>
        <div className="calendar-days-label">
          {daysLabel.map((day, index) => {
            return (
              <p id={`day-header${index}`} key={`${monthLabel}-${day.id}`}>
                <span className="sr-only">{day.alt}</span>
                <span aria-hidden>{day.label}</span>
              </p>
            );
          })}
        </div>
        <div className="calendar-days">
          {daysArray.map((d) => {
            return (
              <button
                title={d}
                disabled={isPopupActive}
                id={`calendar-button${d}`}
                onClick={() => onClick(d)}
                key={`${monthLabel}-${d}`}
                aria-pressed={selectedDay == d}
                className={selectedDay == d ? "active" : ""}
                aria-labelledby={`calendar-button${d} day-header${(d - 1) % 7}`}
              >
                <span></span>
                <span>{d}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default right;
