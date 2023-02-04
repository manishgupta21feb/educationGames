import React from "react";

const Images = (props) => {
  const { selectedVehicle, data } = props;
  return (
    <div className="images-container">
      {selectedVehicle.radioOptions.map((screen) => {
        return (
          <div className="content-container" key={`container${screen.id}`}>
            <div
              className={`${selectedVehicle.id}--${screen.id}`}
              key={`img${screen.id}`}
              role="img"
              aria-label={screen.alt}
            >
              <div className="img-only"></div>
              {data.graphVals.map((gv) => {
                return (
                  <div
                    aria-hidden
                    className={`${gv.id}--left size`}
                    key={`${screen.id}_${gv.id}`}
                  >
                    {gv.txt}
                  </div>
                );
              })}
              {data.graphVals.map((gv) => {
                return (
                  <div
                    aria-hidden
                    className={`${gv.id}--bottom size`}
                    key={`${screen.id}_${gv.id}_bottom`}
                  >
                    {gv.txt}
                  </div>
                );
              })}
              <div className="distance-left size">{data.graphDistance}</div>
              <div className="time-bottom size">{data.graphTime}</div>
            </div>

            <p className={`label--${screen.id} `} key={`btn--${screen.id}`}>
              {screen.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Images;
