import React, { Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import Button from "../Button";
//import closeIcon from '../../assets/icons/x.svg';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.button = "";
    this.isSelected = false;
    this.firstElement = "";
    this.lastElement = "";

    this.state = {
      popupFirstElementFocus: false,
      popupLastElemetFocus: false,
    };
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    const { isSelected } = newProps;

    if (isSelected() !== this.isSelected) {
      if (isSelected() === true && this.props.autoFocus) {
        setTimeout(() => {
          this.firstElement.focus();
        }, 200);
      }
      this.isSelected = isSelected();
    }
  }

  onFocusFirstElement = () => {
    if (this.lastElement) {
      this.lastElement.focus();
    } else {
      // this.button.focus();
    }
  };

  onFocusLastElement = () => {
    if (this.firstElement) {
      setTimeout(() => {
        this.firstElement.focus();
      }, 200);
    } else {
      // this.button.focus();
    }
  };

  setPopupFirstElement = (element) => {
    this.firstElement = element;
  };

  setPopupLastElement = (element) => {
    this.lastElement = element;
  };
  closepopupmenu = (popupid) => {
    const { closePopup } = this.props;
    closePopup(popupid);
  };

  render() {
    const {
      className,
      closePopup,
      children,
      isSelected,
      popupid,
      style,
      ariaLabel,
      ariaLabelledBy,
      ariaDescribedBy,
      isActive,
    } = this.props;

    const classes = classNames(
      "popup-container",
      className,
      isSelected() && "popup-show"
    );

    return (
      <div
        style={style}
        className={classes}
        aria-hidden={!isActive}
        // role="dialog"
        //aria-modal="true"
        // aria-label={ariaLabel}
        // aria-labelledby={ariaLabelledBy}
        // aria-describedby={ariaDescribedBy}
      >
        <div>
          <div
            tabIndex="0"
            className="popups-first-element"
            onFocus={this.onFocusFirstElement}
            onBlur={this.onBlurFirstElement}
            // role="none"
          />

          {/* <Button
            ref={(button) => {
              this.button = button;
            }}
            type="button"
            aria-label="close"
            title="Close"
            className="popup-close icon-closenote"
            onClick={() => {
              this.closepopupmenu(popupid);
            }}
          /> */}

          {React.cloneElement(children, {
            setPopupFirstElement: this.setPopupFirstElement,
            setPopupLastElement: this.setPopupLastElement,
            popupAutoFocus: this.props.autoFocus,
            id: this.props.popupid,
          })}

          <div
            tabIndex="0"
            className="popups-last-element"
            onFocus={this.onFocusLastElement}
            onBlur={this.onBlurLastElement}
            // role="none"
          />
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  closePopup: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  autoFocus: PropTypes.bool,
};

Popup.defaultProps = {
  className: "",
  ariaLabel: "",
  autoFocus: false,
  ariaLabelledBy: "",
  ariaDescribedBy: "",
  closePopup: () => {},
  isSelected: () => {},
};

export default Popup;
