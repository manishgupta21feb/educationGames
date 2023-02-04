import React from "react";

import "./style.scss";
import { getSimLanguage } from "../../../../app/helpers";
const lang = getSimLanguage();
const ImageContainer = (props) => {
  const { question, questions } = props;

  return (
    <div className="left-view">
      <img className="sr-only sr-image" alt={question.altimgText} />
      {questions.map((q) => (
        <div
          key={`image${q.id}`}
          className={`image ${q.id} ${q.id == question.id ? "show" : ""}`}
        ></div>
      ))}
      <div key={`${question.id}-content`} className="content-section">
        <div className="heading" aria-hidden>
          {question.heading ? (
            <h2 className={`heading${question.id} ${lang}`}>{question.heading} </h2>
          ) : null}
          {question.subheading ? (
            <p className={`subheading${question.id}`} aria-hidden>
              {question.subheading}
            </p>
          ) : null}
        </div>
        <div>
          {question.alldata ? (
            <div className={`alldata ${question.id}`} aria-hidden>
              <div className="innerdata">
                {question.alldata.map((data) => {
                  return (
                    <div
                      key={`singledata${data.id}`}
                      className={`singledata ${data.id} ${lang}`}
                    >
                      {question.id == "question2" && data.data
                        ? data.data.map((info) => {
                            return (
                              <p
                                className={`para${info.id} ${lang}`}
                                key={`${data.id}_${info.id}`}
                                dangerouslySetInnerHTML={{
                                  __html: info.value,
                                }}
                              ></p>
                            );
                          })
                        : null}
                      {question.id == "question4" && data.data
                        ? data.data.map((info) => {
                            return (
                              <p
                                key={`${data.id}_${info.id}`}
                                dangerouslySetInnerHTML={{
                                  __html: info.value,
                                }}
                              ></p>
                            );
                          })
                        : null}
                      {question.id == "question5" && data.data
                        ? data.data.map((info) => {
                            return (
                              <p
                                key={`${data.id}_${info.id}`}
                                dangerouslySetInnerHTML={{
                                  __html: info.label,
                                }}
                              ></p>
                            );
                          })
                        : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
        <div>
          {question.legends ? (
            <div className={`legends ${question.id}`} aria-hidden>
              {question.id == "question1" ||
              question.id == "question3" ||
              question.id == "question4"
                ? question.legends.map((legend) => {
                    return (
                      <div
                        key={`legend${legend.id}`}
                        className={`legend ${legend.id}`}
                      >
                        <div></div>
                        <p>{legend.label}</p>
                      </div>
                    );
                  })
                : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
