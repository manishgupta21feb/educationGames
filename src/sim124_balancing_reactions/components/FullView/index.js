import React, { useRef } from "react";
import Counter from "../../containers/Counter";
import MCQContainer from "../../containers/MCQContainer";
import ButtonContinue from "../../containers/ButtonNextQuestion";
import "./style.scss";

const FullView = (props) => {
  const timeout = useRef(null);
  const {
    rawData,
    counters,
    question,
    ariaLiveText,
    correctAttempt,
    counterChangeType,
    updateCountersValue,
    coefficientCounterLiveText,
  } = props;

  const _updateCountersValue = (value, counterId, changeType, itemLabel) => {
    updateCountersValue(value, counterId);
    clearTimeout(timeout.current);
    const _changeType = counterChangeType[changeType];
    if (_changeType) {
      const liveText = coefficientCounterLiveText
        .replace("-1-", itemLabel)
        .replace("-2-", _changeType)
        .replace("-3-", value);
      ariaLiveText(liveText);
      timeout.current = setTimeout(() => {
        ariaLiveText(" ");
      }, 200);
    }
  };

  const data = (question && question.equationImg && question.equationImg) || [];

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        <MCQContainer>
          <div className="activity-space">
            <div className={`molecule images ${question.id}`}>
                    <img className="sr-only sr-image" alt={question.ariaLabel}></img>
              {data.map((item, index) => {
                const { id, value} = item;
                return (
                  <React.Fragment key={index}>
                    <span
                      className={id}
                      aria-hidden
                      dangerouslySetInnerHTML={{ __html: value }}
                    ></span>
                  </React.Fragment>
                );
              })}
            </div>
            <div className={`counters ${question.id}`}>
              {data
                .filter((d) => d.mapWithACounter)
                .map((d, index) => {
                  return (
                    <div
                      key={`count${question.id}${index}`}
                      className={`counter counter${index + 1}`}
                    >
                      {correctAttempt ? (
                        <span className="answer-no">
                          {counters[`counter${index + 1}`]}
                        </span>
                      ) : null}
                      <Counter
                        disabled={correctAttempt}
                        labelOne={rawData.labelOne + " " + d.ariaLabel}
                        labelTwo={rawData.labelTwo + " " + d.ariaLabel}
                        onChange={(value, type) => {
                          _updateCountersValue(
                            value,
                            `counter${index + 1}`,
                            type,
                            d.ariaLabel
                          );
                        }}
                      />
                      <div className="counter-text">
                        <span
                          aria-hidden
                          className="sr-only"
                          id={`counterlabel${question.id}${index}`}
                        ></span>
                        <span
                          aria-hidden
                          dangerouslySetInnerHTML={{ __html: d.counterHtml }}
                        ></span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </MCQContainer>
      </div>

      {correctAttempt ? <ButtonContinue /> : null}
    </div>
  );
};

export default FullView;
