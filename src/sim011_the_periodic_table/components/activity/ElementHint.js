import React from "react";
import PropTypes from "prop-types";
import data from "../../data";

const ElementHint = ({ elementHint }) => {
  const {
    elementDescription: {
      rubidium,
      magnesium,
      nickel,
      oxygen,
      chlorine,
      xenon,
      helium,
      barium,
      gold,
    },
  } = data;

  const getElementHint = () => {
    let hint = elementHint;
    switch (hint) {
      case "rubidium":
        return (hint = rubidium);
      case "magnesium":
        return (hint = magnesium);
      case "nickel":
        return (hint = nickel);
      case "oxygen":
        return (hint = oxygen);
      case "chlorine":
        return (hint = chlorine);
      case "xenon":
        return (hint = xenon);
      case "helium":
        return (hint = helium);
      case "barium":
        return (hint = barium);
      case "gold":
        return (hint = gold);
      default:
        return (hint = "");
    }
  };

  return (
    <div className="element-hint-container">
      {!!elementHint ? (
        <p className="element-hint-text" aria-hidden="true">
          {getElementHint()}
        </p>
      ) : null}
    </div>
  );
};

ElementHint.propTypes = {
  elementHint: PropTypes.string.isRequired,
};

export default ElementHint;
