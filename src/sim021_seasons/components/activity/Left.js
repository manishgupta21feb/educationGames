import React from "react";
import "./style.scss";

const LeftArea = (props) => {
  const { questions, selectedQuestion, graphcommon } = props;
  const { lowTempAltText, highTempAltText } = graphcommon;
  return (
    <div className="left-area">
      {questions.map((q) => {
        const show = q.id == selectedQuestion ? "show" : "";
        const ahidden = q.id !== selectedQuestion || null;
        const gData = q.graphData;
        let tempLeft1Alt = "";
        let tempRight1Alt = "";
        let tempLeft2Alt = "";
        let tempRight2Alt = "";
        if (gData) {
          tempLeft1Alt =
            gData.data1.templeft > gData.data1.tempright
              ? highTempAltText
                  .replace("-1-", gData.data1.city)
                  .replace("-2-", gData.data1.templeft)
              : lowTempAltText
                  .replace("-1-", gData.data1.city)
                  .replace("-2-", gData.data1.templeft);
          tempRight1Alt =
            gData.data1.tempright > gData.data1.templeft
              ? highTempAltText
                  .replace("-1-", gData.data1.city)
                  .replace("-2-", gData.data1.tempright)
              : lowTempAltText
                  .replace("-1-", gData.data1.city)
                  .replace("-2-", gData.data1.tempright);
          tempLeft2Alt =
            gData.data2.templeft > gData.data2.tempright
              ? highTempAltText
                  .replace("-1-", gData.data2.city)
                  .replace("-2-", gData.data2.templeft)
              : lowTempAltText
                  .replace("-1-", gData.data2.city)
                  .replace("-2-", gData.data2.templeft);
          tempRight2Alt =
            gData.data2.tempright > gData.data2.templeft
              ? highTempAltText
                  .replace("-1-", gData.data2.city)
                  .replace("-2-", gData.data2.tempright)
              : lowTempAltText
                  .replace("-1-", gData.data2.city)
                  .replace("-2-", gData.data2.tempright);
        }

        return (
          <div
            aria-hidden={ahidden}
            key={`${q.type}-${q.id}`}
            className={`left-area-wrapper ${show}`}
          >
            <img className={`sr-only sr-image ${q.type}`} alt={q.alt} />
            <div className={`left-bg-image ${q.type}`}></div>
            {q.timeLabel ? (
              <p aria-hidden className={`time-label ${q.type}`}>
                {q.timeLabel}
              </p>
            ) : null}
            {q.timeLabels ? (
              <div className="time-labels">
                {q.timeLabels.map((item) => {
                  return (
                    <div
                      aria-hidden
                      key={item.id}
                      className={`intro-label ${item.id}`}
                    >
                      {item.labels.map((l) => {
                        return <p key={l.id}>{l.text}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
            ) : null}
            {q.graphData ? (
              <div className={`graph-info ${q.type}`}>
                <h2 className="graph-info-heading sr-only">
                  {graphcommon.graphSRLabel}
                </h2>
                <h2
                  aria-hidden
                  className="graph-info-heading"
                  dangerouslySetInnerHTML={{
                    __html: graphcommon.temperature,
                  }}
                ></h2>
                <p className="yaxis-label" aria-hidden>
                  {graphcommon.axis.yaxis}
                </p>
                <div className="yaxis-markers" aria-hidden>
                  {graphcommon.yaxis.map((y) => {
                    return <p key={y}>{y}</p>;
                  })}{" "}
                </div>
                <p className="city1-left">
                  <span aria-hidden>{q.graphData.data1.templeft}</span>
                  <span className="sr-only">{tempLeft1Alt}</span>
                </p>
                <p className="city1-right">
                  <span aria-hidden>{q.graphData.data1.tempright}</span>
                  <span className="sr-only">{tempRight1Alt}</span>
                </p>
                <p className="city2-left">
                  <span aria-hidden>{q.graphData.data2.templeft}</span>
                  <span className="sr-only">{tempLeft2Alt}</span>
                </p>
                <p className="city2-right">
                  <span aria-hidden>{q.graphData.data2.tempright}</span>
                  <span className="sr-only">{tempRight2Alt}</span>
                </p>
                <p className="city1-label" aria-hidden>
                  {q.graphData.data1.city}
                </p>
                <p className="city2-label" aria-hidden>
                  {q.graphData.data2.city}
                </p>
                <p className="xaxis-label" aria-hidden>
                  {graphcommon.axis.xaxis}
                </p>
                <p className="avghigh">{graphcommon.average.hightemperature}</p>
                <p className="avglow">{graphcommon.average.lowtemperature}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default LeftArea;
