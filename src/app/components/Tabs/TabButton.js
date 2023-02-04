import React, { Component, createRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

class TabButton extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      activeElement: 0,
    };

    this.keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      delete: 46,
    };

    this.direction = {
      39: 1,
      40: 1,
      37: -1,
      38: -1,
    };
  }

  componentDidMount() {
    if (this.ref.current) {
      this.tabs = this.ref.current.querySelectorAll('[role="tab"]');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activeElement !== prevState.activeElement) {
      this.tabs[this.state.activeElement].focus();
      this.props.onTabClick(this.state.activeElement);
    }
    if (
      this.props.currentPopup &&
      this.props.currentPopup !== prevProps.currentPopup
    ) {
      // assuming that the popup id of introductionPopup is 1
      if (
        prevProps.currentPopup.length &&
        prevProps.currentPopup.indexOf(1) == -1 &&
        this.props.currentPopup.indexOf(1) >= 0
      ) {
        this.setState({
          activeElement: 0,
        });
      }
    }
  }

  selectTab = (index) => {
    const { selected, onTabClick } = this.props;
    if (selected !== index) {
      onTabClick(index);
    }
  };

  handleClick = (event, index) => {
    this.focusTab(index);
    this.selectTab(index);
  };

  onKeyDown = (event, index) => {
    const key = event.keyCode;
    switch (key) {
      case this.keys.end:
        event.preventDefault();
        this.focusTab(this.tabs.length - 1);
        break;
      case this.keys.home:
        event.preventDefault();
        this.focusTab(0);
      case this.keys.up:
      case this.keys.down:
        this.determineOrientation(event);
        break;
    }
  };

  onKeyUp = (event) => {
    const key = event.keyCode;
    switch (key) {
      case this.keys.left:
      case this.keys.right:
        this.determineOrientation(event);
        break;
      // case keys.delete:
      // this.determineDeletable(event);
      // break;
    }
  };

  determineOrientation = (event) => {
    const key = event.keyCode;
    const vertical =
      this.ref.current.getAttribute("aria-orientation") == "vertical";
    let proceed = false;

    if (vertical) {
      if (key === this.keys.up || key === this.keys.down) {
        event.preventDefault();
        proceed = true;
      }
    } else {
      if (key === this.keys.left || key === this.keys.right) {
        proceed = true;
      }
    }

    if (proceed) {
      this.switchTabOnArrowPress(event);
    }
  };

  focusTab = (activeElement) => {
    this.setState({ activeElement });
  };

  switchTabOnArrowPress = (event) => {
    const pressed = event.keyCode;
    if (this.direction[pressed]) {
      const { index } = event.target.dataset;
      if (index !== undefined) {
        if (this.tabs[+index + this.direction[pressed]]) {
          this.focusTab(+index + this.direction[pressed]);
        } else if (pressed === this.keys.left || pressed === this.keys.up) {
          this.focusTab(this.tabs.length - 1);
        } else if (pressed === this.keys.right || pressed === this.keys.down) {
          this.focusTab(0);
        }
      }
    }
  };

  render() {
    const {
      ns,
      buttons,
      disabled,
      selected,
      popupOpened,
      delay,
      orientation,
      isPopupActive,
    } = this.props;
    return (
      <ul
        role="tablist"
        ref={this.ref}
        data-delay={delay || null}
        className={`${ns}-tab-list-buttons`}
        aria-orientation={orientation || "horizontal"}
      >
        {buttons.map((button, i) => {
          const { hidden } = button;
          const isDisabled = disabled && disabled.indexOf(button.id) !== -1;
          const _selected = i === selected;
          const tabIndex = _selected ? (isDisabled ? -1 : 0) : -1;
          const classHidden = hidden ? "hide" : "";
          const classSelected = _selected ? "selected" : "";
          const classDisabled = isDisabled ? "disabled" : "";
          const classes = classnames(
            `${ns}-tab-list-button ${this.props.classes}`,
            classSelected,
            classHidden,
            classDisabled
          );
          const selectedTab = this.state.activeElement == i;
          return (
            <li key={i} role="none">
              <button
                role="tab"
                type="button"
                data-index={i}
                id={`tab_${i}`}
                className={classes}
                title={button.title}
                disabled={isDisabled}
                onKeyUp={this.onKeyUp}
                aria-hidden={popupOpened}
                onKeyDown={this.onKeyDown}
                aria-selected={selectedTab}
                aria-controls={`tabpanel_${i}`}
                tabIndex={selectedTab && !isPopupActive ? null : "-1"}
                onClick={(e) => this.handleClick(e, i)}
                dangerouslySetInnerHTML={{
                  __html: `<span>${button.title}</span>`,
                }}
              ></button>
            </li>
          );
        })}
      </ul>
    );
  }
}

TabButton.propTypes = {
  buttons: PropTypes.array,
  ns: PropTypes.string.isRequired,
};

TabButton.defaultProps = {
  ns: "",
  buttons: [],
  onTabClick: () => {},
};

export default TabButton;
