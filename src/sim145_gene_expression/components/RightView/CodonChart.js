import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

const CodonChart = (props) => {
  const { closeLabel, onClick, data } = props;
  const ref = useRef(null);
  const tableRef = useRef();

  useEffect(() => {
    const elements = tableRef.current.querySelectorAll(".bodyItem");
    data.codonDataSequence.map((item) => {
      elements[item].setAttribute("rowspan", "4");
    });
  }, []);

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
    <>
      <div className="codon-chart-wrapper">
        <div className="codon-chart-main" ref={ref}>
          <div className="close-btn">
            <Button
              label={closeLabel}
              onClick={onClick}
              classes={`toast-button positive icon-only`}
            />
          </div>

          <div className="codon-chart" ref={tableRef}>
            <table>
              <thead>
                <tr>
                  <th rowSpan="2">{data.codonChart.firstLetter}</th>
                  <th colSpan="4">{data.codonChart.secondLetter}</th>
                  <th rowSpan="2">{data.codonChart.thirdLetter}</th>
                </tr>
                <tr>
                  {data.codonData[0].map((headItem, i) => (
                    <th key={i}>{headItem}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.codonData[1].map((bodyItems, i) => (
                  <tr key={i}>
                    {bodyItems.map((item, i) => (
                      <td key={i} className="bodyItem">
                        {item}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodonChart;
