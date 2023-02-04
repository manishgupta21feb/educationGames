import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Button from "../../../app/components/Button";

const Genotype = (props) => {
  const buttonRef = useRef(null);
  const popupRef = useRef(props.currentPopup);
  const {
    showGenotype,
    currentPopup,
    isPopupActive,
    OnGenotypeClick,
    setShowGenoList,
    buttonGenotypeText,
    buttonGenotypeLabel,
  } = props;
  const selected = showGenotype ? "geno-selected" : "";

  const onGenotypeA1yyClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowGenoList(true);
    return false;
  };

  useEffect(() => {
    if (popupRef.current.indexOf(5) >= 0 && currentPopup.indexOf(5) == -1) {
      setTimeout(() => {
        buttonRef.current.focus();
      }, 50);
    }
    popupRef.current = currentPopup;
  }, [currentPopup]);

  return (
    <div style={{ position: "relative" }} key={`hbutton${currentPopup.length}`}>
      <Button
        ref={buttonRef}
        ariaHidden={isPopupActive}
        label={buttonGenotypeLabel}
        isPopupActive={isPopupActive}
        onClick={onGenotypeA1yyClick}
        classes={`header icon-only genotype-button`}
      />
      <Button
        tabIndex="-1"
        ariaHidden="true"
        isPopUpOpen={true}
        text={buttonGenotypeText}
        onClick={OnGenotypeClick}
        classes={`header icon-only genotype-button non-a11y-button ${selected}`}
      />
    </div>
  );
};

Genotype.defaultProps = {
  onGenotypeClick: () => {
    console.log("Genotype button is clicked");
  },
};

Genotype.propTypes = {
  onGenotypeClick: PropTypes.func,
};

export default Genotype;
