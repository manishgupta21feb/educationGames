import React, { useEffect, useState } from "react";
import Button from "../../../../app/components/Button";
import ItemInfo from "../../../../app/components/ItemInfo";
import FinishButton from "../../../containers/FinishButton";

const right = (props) => {
  const {
    instructionText,
    playedVideos,
    pushForces,
    selectForce,
    selectedForce,
    selectedVideo,
    activityCompleted,
  } = props;

  return (
    <div className="right-area">
      <h2 className="heading">{instructionText}</h2>
      <div className="button-container">
        {pushForces.map((force) => {
          const classes = `btn-chip ${
            selectedForce == force.id ? "selected" : ""
          }`.trim();
          return (
            <Button
              text={force.text}
              classes={classes}
              id={`button${force.id}`}
              key={`button${force.id}`}
              onClick={() => selectForce(force.id)}
              disabled={playedVideos.indexOf(force.id) >= 0}
            ></Button>
          );
        })}
      </div>
      {selectedForce ? (
        <ItemInfo
          heading={selectedVideo.text}
          list={[
            {
              id: `info-item${selectedVideo.id}1`,
              info: selectedVideo.infoData[0],
            },
            {
              id: `info-item${selectedVideo.id}2`,
              info: selectedVideo.infoData[1],
            },
          ]}
        />
      ) : null}
      {activityCompleted ? <FinishButton /> : null}
    </div>
  );
};

export default right;
