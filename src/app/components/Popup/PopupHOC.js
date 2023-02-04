import React from "react";
import PropTypes from "prop-types";

class PopupHOC extends React.Component {
  componentDidMount() {
    const { togglePopup } = this.props;

    // eslint-disable-next-line no-undef
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        const { currentPopup } = this.props;
        if (currentPopup.length) {
          togglePopup(currentPopup[currentPopup.length - 1]);
        }
      }
    });
  }

  render() {
    const { children, togglePopup, currentPopup, onClick, onTouchStart } =
      this.props;

    const popupCount = currentPopup.length;
    const class1 = `popups-container ${
      currentPopup.length ? "popup-show" : ""
    }`;
    const class2 = `popups-overlay popup-${
      currentPopup[currentPopup.length - 1]
    }`;
    const onHandler = (condition) => {
      if (condition) {
        return togglePopup("-1");
      }
      return undefined;
    };
    return (
      <React.Fragment>
        <div className={class1}>
          {popupCount ? (
            <div
              className={class2}
              onClick={() => onHandler(onClick)}
              onTouchStart={() => onHandler(onTouchStart)}
              // style={{ zIndex: 500 + popupCount * 2 - 1 }}
            />
          ) : null}

          {React.Children.map(children, (popup, i) => {
            return React.cloneElement(popup, {
              key: `popup-${popup.props.popupid}`,
              index: i,
              isSelected: () => currentPopup.includes(popup.props.popupid),
              isActive:
                currentPopup.indexOf(popup.props.popupid) ===
                currentPopup.length - 1,
              closePopup: togglePopup,
              // style: { zIndex: 502 + i * 2 },
            });
          })}
        </div>
      </React.Fragment>
    );
  }
}

PopupHOC.propTypes = {
  children: PropTypes.node.isRequired,
  togglePopup: PropTypes.func.isRequired,
  currentPopup: PropTypes.array.isRequired,
};

export default PopupHOC;
