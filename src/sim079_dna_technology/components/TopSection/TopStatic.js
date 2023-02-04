import React from "react";
import "./style.scss";
import { getSimLanguage } from "../../../app/helpers";
const lang = getSimLanguage();

const TopStatic = (props) => {
  const { question, selectedHotspot } = props;
  return (
    <>
      <div className="top-static">
        {question.map((q) => {
          return (
            <div
              key={q.id}
              className={q.imageClass}
              aria-hidden={q.id != selectedHotspot ? "true" : null}
              role={q.id == "Gel-electrophoresis" ? "none" : "img"}
              style={{ opacity: q.id == selectedHotspot ? "1" : "0" }}
              aria-label={q.id == "Gel-electrophoresis" ? null : q.imageAlt}
            >
              <div
                className={`imgtexts ${
                  q.id == "Gel-electrophoresis" ? "screen2" : ""
                }`}
                aria-hidden={q.id == "Gel-electrophoresis" ? false : "true"}
              >
                {q.alldata.map((imgtext) => {
                  return (
                    <div
                      className={`${imgtext.id} ${lang}`}
                      role={imgtext.role || null}
                      key={`imgtext${imgtext.id}`}
                      aria-label={imgtext.role ? imgtext.arialabel : null}
                    >
                      <div className={`line${imgtext.id}  `}></div>
                      <p>{imgtext.label}</p>
                     
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopStatic;
