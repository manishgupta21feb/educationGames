import React from "react";
import NextScreenButton from "../../../containers/Screen1NextScreenButton";

const BottomView = (props) => {
  const { selectedHotspot, defaultOST, screen1TopViewButtons, isPopupActive } =
    props;
  return (
    <div className="screen1-bottom" aria-hidden={isPopupActive}>
      <div className="ost-container">
        {selectedHotspot ? (
          screen1TopViewButtons
            .filter((s) => s.id == selectedHotspot)
            .map((s) => {
              return <p key={`para-${s.id}`}>{s.ost}</p>;
            })
        ) : (
          <p key="defaultOST">{defaultOST}</p>
        )}
      </div>
      {selectedHotspot ? (
        <NextScreenButton key={selectedHotspot ? "vis" : "novis"} />
      ) : null}
    </div>
  );
};

export default BottomView;
