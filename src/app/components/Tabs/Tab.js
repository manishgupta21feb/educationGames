import React from "react";
import PropTypes from "prop-types";
import { isAndroid } from "react-device-detect";

const Tab = ({ children, index, isSelected, isPopupActive }) => {
  const selected = isSelected() ? "active" : "hide-tab-panel";
  return (
    <div
      key={index}
      role="tabpanel"
      className={selected}
      id={`tabpanel_${index}`}
      aria-labelledby={`tab_${index}`}
      aria-hidden={isSelected() || null || isPopupActive}
      tabIndex={isAndroid ? null : isPopupActive || isSelected() ? "-1" : "0"}
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.func,
  children: PropTypes.object.isRequired,
};

Tab.defaultProps = {
  index: 0,
  isSelected: () => true,
};

export default Tab;
