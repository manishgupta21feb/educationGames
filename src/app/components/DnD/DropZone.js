import React from "react";
import PropTypes from "prop-types";

const dropZone = (props) => {
  const { dropZones } = props;
  return dropZones.map((d) => {
    return <div className={`drop-zone ${d.classes}`}></div>;
  });
};

dropZone.defaultProps = {};

dropZone.propTypes = {};

export default dropZone;
