import React, { useEffect, useRef, useState } from "react";
import Button from "../../../app/components/Button";
import { Pie } from "react-chartjs-2";
import SecondaryButtonContainer from "../../containers/SecondaryButtonContainer";
import FinishButtonContainer from "../../containers/FinishButtonContainer";

const options = {
  animation: {
    duration: 0,
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false,
    },
  }
};

const DescriptionBox = ({
  isPopupActive,
  closeDialog,
  isToggle,
  timelineInfo,
  selectedTimeline,
  data,
  selectedTab,
  travsedArray1,
  travsedArray2,
  setliveText,
}) => {
  const [graphdata, setData] = useState({ datasets: [] });
  const [piePatterns, setPiePatterns] = useState([]);
  const buttonCloseRef = useRef(null);
  const loadImage = (src, cb) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.getElementById(`canvas`);
      if (canvas) {
        const ctx = canvas.getContext("2d");
        const fillPattern = ctx.createPattern(img, "no-repeat");
        if (cb && typeof cb == "function") {
          cb(null, fillPattern);
        }
      } else {
        cb("Error: unable to access canvas element.");
      }
    };
    img.onerror = (error) => {
      if (cb && typeof cb == "function") {
        cb(error);
      }
    };
  };

  const createPatterns = (patterns) => {
    const _patterns = {};
    for (let pattern of patterns) {
      ((_pattern) => {
        loadImage(_pattern.src, (error, response) => {
          if (!error) {
            _patterns[_pattern.class] = { pattern: response };
          } else {
            console.log("error: ", error);
          }
        });
      })(pattern);
    }
    return _patterns;
  };

  useEffect(() => {
    let canvas = null;
    if (!document.getElementById(`canvas`)) {
      canvas = document.createElement("canvas");
      canvas.id = `canvas`;
      canvas.width = 80;
      canvas.height = 80;
      canvas.style.top = 0;
      canvas.ariaHidden = "true";
      canvas.style.position = "absolute";
      const root = document.querySelector("#root");
      document.body.insertBefore(canvas, root);
    }
    const p = createPatterns(data.patterns);
    setPiePatterns(p);
    setTimeout(() => {
      const canvasEl = document.querySelector("#canvas");
      if (canvasEl) {
        canvasEl.remove();
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (timelineInfo != undefined) {
      if (Array.isArray(timelineInfo.graphLabel)) {
        const patterns2 = [];
        const images = [];
        for (let i in timelineInfo.graphLabel) {
          const patternClass = timelineInfo.graphLabel[i].class;
          patterns2.push(piePatterns[patternClass].pattern);
          images.push(patternClass);
        }
        const pieCreated = {
          type: "pie",
          maintainAspectRatio: true,
          labels: timelineInfo.graphLabel.map((val, i) => val.text),
          datasets: [
            {
              borderWidth: 0,
              data: timelineInfo.graphData,
              backgroundColor: patterns2,
            },
          ],
        };
        setData(pieCreated);
      }
    }
  }, [selectedTimeline]);

  const dialogClose = (id, travsedId) => {
    closeDialog(id);
    setliveText(travsedId);
  };

  useEffect(() => {
    if (selectedTimeline > 0 && Object.keys(timelineInfo).length > 0) {
      if (buttonCloseRef && buttonCloseRef.current) {
        buttonCloseRef.current.focus();
      }
    }
  }, [selectedTimeline]);

  const showFinishButton =
    travsedArray1.length == 5 && travsedArray2.length == 4;
  const tab0Continue =
    selectedTab == 0 && travsedArray1.length == 5 && travsedArray2.length == 0;
  const tab1Continue =
    selectedTab == 1 && travsedArray1.length == 0 && travsedArray2.length == 4;
  const tab0Finish = selectedTab == 0 && showFinishButton;
  const tab1Finish = selectedTab == 1 && showFinishButton;

  return (
    <div>
      {selectedTimeline > 0 && Object.keys(timelineInfo).length > 0 && (
        <div>
          <div
            role="alertdialog"
            aria-hidden={isToggle || null}
            key={`dbox${timelineInfo.travseralId}`}
            className={`wrapper-1 ${timelineInfo.classes}`}
            aria-labelledby={`dialogheading-${timelineInfo.travseralId} pieChartDescription-${timelineInfo.travseralId}`}
            //aria-describedby={`dialogheading-${timelineInfo.travseralId} pieChartDescription-${timelineInfo.travseralId}`}
            style={{
              display: isToggle ? "none" : "block",
            }}
          >
            <div className="close-btn">
              <Button
                label={data.buttonLabels.close}
                onClick={() =>
                  dialogClose(timelineInfo.id, timelineInfo.travseralId)
                }
                isPopupActive={isPopupActive}
                ariaHidden={isPopupActive}
                classes={`toast-button positive icon-only`}
                ref={buttonCloseRef}
              />
            </div>
            <p
              className="content"
              id={`dialogheading-${timelineInfo.travseralId}`}
              dangerouslySetInnerHTML={{ __html: timelineInfo.infoText }}
            ></p>
            {selectedTab == 0 && (
              <div
                className="graph-container"
                id={`pieChartDescription-${timelineInfo.travseralId}`}
              >
                <div className="graph" aria-hidden={true}>
                  <Pie
                    width={64}
                    data={graphdata}
                    height={64}
                    redraw={true}
                    options={options}
                  />
                </div>
                <div className="label-container">
                  <h3 className="title">{data.pieChartHeader}</h3>
                  <div role="list" className="labels">
                    {timelineInfo.graphLabel.map((label, index) => {
                      return (
                        <div key={index} role="listitem" className="label">
                          <div
                            role="img"
                            aria-label={label.altText}
                            className={`label-box ${label.class}`}
                          ></div>
                          <p className="patternLabel">{label.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="footerBtn"
            style={{
              opacity: tab0Continue ? "1" : "0",
            }}
          >
            <SecondaryButtonContainer
              classes={`next-btn toast-secondary-button positive right-arrow ${isToggle ? "hide" : "show"
                }
               ${timelineInfo.id == 1 || timelineInfo.id == 4
                  ? "bottomChange"
                  : "defaultBottom"
                }`}
              disabled={tab0Continue ? false : true}
              ariaHidden={!tab0Continue || isPopupActive}
              isPopupActive={!tab0Continue || isPopupActive}
            />
          </div>
          <div
            className="footerBtn"
            style={{
              opacity: tab0Finish ? "1" : "0",
            }}
          >
            <FinishButtonContainer
              classes={`next-btn toast-secondary-button positive ${isToggle ? "hide" : "show"
                }
            ${timelineInfo.id == 1 || timelineInfo.id == 4
                  ? "bottomChange"
                  : "defaultBottom"
                }`}
              disabled={tab0Finish ? false : true}
              ariaHidden={!tab0Finish || isPopupActive}
              isPopupActive={!tab0Finish || isPopupActive}
            />
          </div>
          <div
            style={{
              opacity: tab1Continue ? "1" : "0",
            }}
          >
            <SecondaryButtonContainer
              classes={`next-btn toast-secondary-button positive right-arrow custom`}
              disabled={tab1Continue ? false : true}
              ariaHidden={!tab1Continue || isPopupActive}
              isPopupActive={!tab1Continue || isPopupActive}
            />
          </div>
          <div
            style={{
              opacity: tab1Finish ? "1" : "0",
            }}
          >
            <FinishButtonContainer
              classes="next-btn toast-secondary-button positive custom"
              disabled={tab1Finish ? false : true}
              ariaHidden={!tab1Finish || isPopupActive}
              isPopupActive={!tab1Finish || isPopupActive}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
