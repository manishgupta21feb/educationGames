import React from "react";
import "./style.scss";
import Droppable from "../../../containers/DroppableContainer";
import ProtonContainer from "../../../containers/SelectProtonsContainer";
import NeutronContainer from "../../../containers/SelectNeutronContainer";
import ValanceContainer from "../../../containers/SelectValenceContainer";

const index = (props) => {
  const {
    selectedQuestion,
    orbitsAlt,
    data,
    numberOfNeutrons,
    numberOfValance,
    numberOfProtons,
    orbitThreeNoBorder,
    orbitTwoNoBorder,
    orbitOneNoBorder,
    images,
    orbitThreeCount,
    orbitTwoCount,
    orbitOneCount,
    showNucleus,
  } = props;
  let lendendsDisplay = data.screenLegends.filter((sl) => {
    if (selectedQuestion.id == "hydrogen") {
      if (sl.id != "legendneutron") return sl;
    } else {
      return sl;
    }
  });

  return (
    <div className="left-container">
      <p className="heading">{selectedQuestion.elementName}</p>

      <div className="orbit-alt">
        <img className="sr-only" alt={orbitsAlt} />
        {images.map((img) => {
          const orbit3 =
            orbitThreeNoBorder && orbitThreeCount.length > 0
              ? img.id == "orbit3"
                ? "show"
                : "hide"
              : img.id == "orbit3base"
              ? "show"
              : "hide";
          const orbit2 =
            orbitTwoNoBorder && orbitTwoCount.length > 0
              ? img.id == "orbit2"
                ? "show"
                : "hide"
              : img.id == "orbit2base"
              ? "show"
              : "hide";
          const orbit1 =
            orbitOneNoBorder && orbitOneCount.length > 0
              ? img.id == "orbit1"
                ? "show"
                : "hide"
              : img.id == "orbit1base"
              ? "show"
              : "hide";
          const nucleus = showNucleus
            ? img.id == "nucleus"
              ? "show"
              : "hide"
            : img.id == "nucleusbase"
            ? "show"
            : "hide";

          return (
            <div
              aria-hidden
              className={`${
                img.id.includes("base")
                  ? img.id
                  : `${selectedQuestion.id}--${img.id}`
              } ${img.id.includes("orbit3") ? orbit3 : ""} ${
                img.id.includes("orbit2") ? orbit2 : ""
              } ${img.id.includes("orbit1") ? orbit1 : ""} ${
                img.id.includes("nucleus") ? nucleus : ""
              }`}
              key={`img_${img.id}`}
            ></div>
          );
        })}
      </div>

      <Droppable />

      <div className="protons">
        <ProtonContainer />
      </div>
      <div className="neutrons">
        <NeutronContainer />
      </div>
      <div className="valance-electrons">
        <ValanceContainer />
      </div>
      <div className="legends-base">
        {showNucleus
          ? lendendsDisplay.map((sl) => {
              return (
                <>
                  <div
                    key={`container_${sl.id}`}
                    className={`container--${sl.id}`}
                  >
                    <p className="sr-only sr-image">{sl.altText}</p>
                    <div className={sl.id} key={`img_${sl.id}`}></div>
                    <p key={`text_${sl.text}`} aria-hidden>
                      {sl.text}
                    </p>
                  </div>
                </>
              );
            })
          : null}

        <div
          key={`container_${data.electronLegend.id}`}
          className={`container--${data.electronLegend.id}`}
        >
          <div className="sr-only sr-image">{data.electronLegend.altText}</div>
          <div
            key={data.electronLegend.id}
            className={data.electronLegend.id}
          ></div>
          <p aria-hidden key={data.electronLegend.text}>
            {data.electronLegend.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
