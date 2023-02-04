import Proptypes from "prop-types";
import React, { useRef, useEffect, useState } from "react";
import AccessibleList from "../AccessibleList";
import "./style.scss";

const Select = (props) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [ids, setIDs] = useState({ id1: null, id2: null });
  const [showList, setShowList] = useState(false);
  const {
    value,
    options,
    classes,
    disabled,
    onChange,
    defaultAlt,
    showOnLoad,
    defaultText,
    isPopupActive,
    altForUnSelectedState,
    textForUnSelectedState,
  } = props;

  const { label, text } = value;

  const _onChange = (item) => {
    if (ref.current) {
      ref.current.focus();
    }
    onChange(item);
  };

  const onClick = () => {
    setShowList(true);
    if (props.onClick) {
      props.onClick();
    }
    EventManager.broadcast("PRIMARY_CLICK");
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 100000);
    setIDs({
      id1: `dropdown-heading${random}`,
      id2: `dropdown-button${random}`,
    });
    if (showOnLoad) {
      setShowList(true);
    }
  }, []);

  const check = !value || !value.id;
  const title = check ? altForUnSelectedState || defaultAlt : label || text;
  const html = check ? textForUnSelectedState || defaultText : text || label;
  const headingText = props.headingLabel || props.heading;

  return (
    <div className={`select-dropdown ${showList ? "opened" : ""} ${classes}`}>
      {props.heading ? (
        <div id={ids.id1} role={props.headingRole} level={props.headingLevel}>
          <div className="sr-only sr-image">{headingText}</div>
          <span
            aria-hidden
            dangerouslySetInnerHTML={{ __html: props.heading }}
          ></span>
        </div>
      ) : null}
      <div>
        <button
          ref={ref}
          id={ids.id2}
          aria-label={title}
          aria-haspopup="listbox"
          aria-expanded={showList}
          onClick={onClick}
          disabled={disabled || isPopupActive}
          aria-labelledby={props.heading ? `${ids.id1} ${ids.id2}` : null}
        >
          <span aria-hidden dangerouslySetInnerHTML={{ __html: html }}></span>
          {showList ? (
            <span aria-hidden className="button-overlay"></span>
          ) : null}
        </button>
        <AccessibleList
          list={options}
          opened={showList}
          onClick={_onChange}
          dropdownlist={true}
          closeList={setShowList}
          selectedItem={value.id}
        />
      </div>
    </div>
  );
};

Select.defaultProps = {
  value: {},
  defaultText: "--",
  defaultAlt: "Select a value",
};

Select.propTypes = {
  value: Proptypes.object.isRequired,
  options: Proptypes.array.isRequired,
  onChange: Proptypes.func.isRequired,
};

export default Select;
