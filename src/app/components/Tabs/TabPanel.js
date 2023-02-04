import React from "react";
import PropTypes from "prop-types";

const TabPanel = (props) => {
  const { ns, children, selected } = props;
  return (
    <div id="tabPanels" className={`${ns}-tab-panels`}>
      {children.map((tab, i) => {
        const _selected = i === selected;
        return React.cloneElement(tab, {
          key: i,
          index: i,
          isSelected: () => _selected,
        });
      })}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.array,
  selected: PropTypes.number,
  ns: PropTypes.string.isRequired,
};

TabPanel.defaultProps = {
  ns: "",
  selected: 0,
};

export default TabPanel;
