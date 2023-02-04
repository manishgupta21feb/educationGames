import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const _view = (classNames, params) => {
  const { layout, classes, children, ariahidden } = params;
  const parentClasses = `${layout} ${classes ? classes : ""}`.trim();
  return (
    <div aria-hidden={ariahidden} className={parentClasses}>
      <div className={classNames[0]}>{children[0]}</div>
      <div className={classNames[1]}>{children[1]}</div>
    </div>
  );
};

const View = (props) => {
  const { layout, children, ariahidden, role } = props;
  switch (layout) {
    case "leftright":
      return _view(["left", "right"], { ...props });
    case "topbottom":
      return _view(["top", "bottom"], { ...props });
    default:
      return (
        <div role={role} aria-hidden={ariahidden} className="view-container">
          {children}
        </div>
      );
  }
};

View.propsTypes = {
  layout: PropTypes.string,
  children: PropTypes.array,
};

export default View;
