import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import LineGraph from "../../containers/LineGraphContainer";
import BarGraph from "../../containers/BarGraphContainer";
import { getStringMonths, getStringRecord } from "../../helper";
import TabPanel from "../../containers/TabPanel";
import Tab from "../../containers/Tab";

const CenterArea = (props) => {
  let {
    selected,
    currentBarChart1,
    currentBarChart2,
    currentLineChart2,
    currentLineChart1,
    seasonLabels,
    data,
    isPopupActive,
  } = props;

  let tabArr = [selected];
  return (
    <>
      <TabPanel>
        {tabArr.map((val, index) => {
          return (
            <Tab key={index} isPopupActive={isPopupActive}>
              <>
                <div className="graph-container">
                  <div className="graph-item">
                    <BarGraph
                      month={getStringMonths(currentBarChart1)}
                      Calgary={getStringRecord(currentBarChart1, 1)}
                      Houston={getStringRecord(currentBarChart1, 2)}
                      SanGabriel={getStringRecord(currentBarChart1, 3)}
                      arrayIndex={0}
                      seasonLabels={seasonLabels}
                    />
                  </div>
                  <div className="graph-item">
                    <LineGraph
                      month={getStringMonths(currentLineChart1)}
                      Calgary={getStringRecord(currentLineChart1, 1)}
                      Houston={getStringRecord(currentLineChart1, 2)}
                      SanGabriel={getStringRecord(currentLineChart1, 3)}
                      arrayIndex={1}
                      seasonLabels={seasonLabels}
                    />
                  </div>
                  <div className="graph-item">
                    <BarGraph
                      month={getStringMonths(currentBarChart2)}
                      Calgary={getStringRecord(currentBarChart2, 1)}
                      Houston={getStringRecord(currentBarChart2, 2)}
                      SanGabriel={getStringRecord(currentBarChart2, 3)}
                      arrayIndex={2}
                      seasonLabels={seasonLabels}
                    />
                  </div>
                  <div className="graph-item">
                    <LineGraph
                      month={getStringMonths(currentLineChart2)}
                      Calgary={getStringRecord(currentLineChart2, 1)}
                      Houston={getStringRecord(currentLineChart2, 2)}
                      SanGabriel={getStringRecord(currentLineChart2, 3)}
                      arrayIndex={3}
                      seasonLabels={seasonLabels}
                    />
                  </div>
                </div>

                <div className="legends-area">
                  <span
                    className="legend1"
                    role="definition"
                    aria-label={data.legendArea[0].title}
                  >
                    {data.legendArea[0].title}
                  </span>
                  <span
                    className="legend2"
                    role="definition"
                    aria-label={data.legendArea[1].title}
                  >
                    {data.legendArea[1].title}
                  </span>
                  <span
                    className="legend3"
                    role="definition"
                    aria-label={data.legendArea[2].title}
                  >
                    {data.legendArea[2].title}
                  </span>
                </div>
              </>
            </Tab>
          );
        })}
      </TabPanel>
    </>
  );
};

export default CenterArea;
