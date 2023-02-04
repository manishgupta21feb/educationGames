import React, { useEffect, useState } from "react";
import Button from "../../../../app/components/Button";
import View from "../../../../app/components/View";

const GeneFunction = (props) => {
  const [selectedGene, setSelectedGene] = useState("A");
  const {
    textData,
    currentTrait,
    geneFunctions,
    nextBtnPressed,
    isPopupActive,
    headingScreen2,
  } = props;

  const clickBtn = (btn) => {
    EventManager.broadcast("PRIMARY_CLICK");
    setSelectedGene(btn);
  };

  useEffect(() => {
    setSelectedGene("A");
  }, [currentTrait]);

  let headingName =
    selectedGene == "B"
      ? geneFunctions[currentTrait].TypeBAlt
      : geneFunctions[currentTrait].TypeAAlt;

  return (
    <View ariahidden={isPopupActive}>
      <div className="main-container-gt">
        <h1 className="sr-only">{headingScreen2}</h1>
        <h2 role="heading" aria-level="2">
          {textData.genesData.initialText}
        </h2>
        <div className="heading-two" role="heading" aria-level="2">
          <p>{geneFunctions[currentTrait].description}</p>
        </div>
        <div className="toggle-button-container">
          <Button
            text={textData.genesData.toggleBtn1}
            classes={`toggle-btn ${selectedGene == "A" && "active"}`}
            onClick={() => clickBtn("A")}
            ariaPressed={selectedGene == "A"}
            disabled={isPopupActive}
          />
          <Button
            text={textData.genesData.toggleBtn2}
            classes={`toggle-btn ${selectedGene == "B" && "active"}`}
            onClick={() => clickBtn("B")}
            ariaPressed={selectedGene == "B"}
            disabled={isPopupActive}
          />
        </div>
        <div className="gene-container">
          <div className="chromosome-model">
            <img
              className="gene-img"
              src={geneFunctions[currentTrait].geneImg}
              alt={geneFunctions[currentTrait].geneAlt}
            ></img>
            <p
            // aria-hidden="true"
            >
              {textData.genesData.chromo}
            </p>
          </div>
          <div
            className="name"
            // aria-hidden="true"
          >
            <div
              className={`dot one one-${geneFunctions[currentTrait].name}`}
              aria-hidden="true"
            ></div>
            <div
              className={`dot two two-${geneFunctions[currentTrait].name}`}
              aria-hidden="true"
            ></div>
            <div
              className={`line one one-${geneFunctions[currentTrait].name}`}
              aria-hidden="true"
            ></div>
            <div
              className={`line two two-${geneFunctions[currentTrait].name}`}
              aria-hidden="true"
            ></div>
            <div className="label">{geneFunctions[currentTrait].header}</div>
          </div>
          <div className="inherited-traits">
            <p
              className="img-head"
              // aria-hidden="true"
            >
              {selectedGene == "B"
                ? geneFunctions[currentTrait].typeB
                : geneFunctions[currentTrait].typeA}
            </p>
            <div
              className={`trait type-${geneFunctions[currentTrait].name} 
                            ${
                              selectedGene == "B"
                                ? `${geneFunctions[currentTrait].name}-B`
                                : `${geneFunctions[currentTrait].name}-A`
                            }`}
              role="img"
              aria-label={headingName}
            />
            <p
            // aria-hidden="true"
            >
              {textData.genesData.trait}
            </p>
          </div>
        </div>
        <Button
          classes={`next-btn toast-secondary-button positive ${
            currentTrait == 2 ? "" : "right-arrow"
          }`}
          text={currentTrait == 2 ? textData.finish : textData.next}
          onClick={() => nextBtnPressed(currentTrait)}
          disabled={isPopupActive}
        />
      </div>
    </View>
  );
};
export default GeneFunction;
