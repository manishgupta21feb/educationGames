import React from "react";
import "./style.scss";
import VideoContainer from "../../containers/VideoContainer";

const TopStatic = (props) => {
  const { question, selectedHotspot, videoComp } = props;
  return (
    <>
      {videoComp ? (
        <div className="top-static">
          {question.map((q) => {
            return (
              <div
                role="img"
                key={q.id}
                aria-label={q.imageAlt}
                className={q.imageClass}
                aria-hidden={q.id != selectedHotspot ? "true" : null}
                style={{ opacity: q.id == selectedHotspot ? "1" : "0" }}
              ></div>
            );
          })}
        </div>
      ) : (
        <VideoContainer />
      )}
    </>
  );
};

export default TopStatic;
