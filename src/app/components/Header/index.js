import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./style.scss";

const Header = (props) => {
  const ref = useRef(null);
  const infoButtonRef = useRef(null);
  const resetButtonRef = useRef(null);
  const audioButtonRef = useRef(null);
  const infoOpenedRef = useRef(false);
  const resetOpenedRef = useRef(false);
  const popupOpenedRef = useRef(props.isPopupActive);
  const {
    children,
    infoLabel,
    resetLabel,
    audioLabel,
    disableInfo,
    hideTooltip,
    onInfoClick,
    onResetClick,
    onAudioClick,
    isPopupActive,
    audioAriaLable,
    audioStatePlay,
    startInfoPopup,
    setFocusOnReset,
    preventAutoHide,
    hideImmediately,
    preventAutoFocus,
    setResetFocusState,
  } = props;

  const _onInfoClick = () => {
    infoOpenedRef.current = true;
    onInfoClick();
  };

  const _onResetClick = () => {
    resetOpenedRef.current = true;
    onResetClick();
  };

  const _onAudioClick = () => {
    onAudioClick();
  };

  useEffect(() => {
    if (startInfoPopup) {
      infoOpenedRef.current = false;
      resetOpenedRef.current = false;
    }
  }, [startInfoPopup]);

  useEffect(() => {
    if (!isPopupActive && popupOpenedRef.current) {
      if (infoOpenedRef.current) {
        infoOpenedRef.current = false;
        if (infoButtonRef.current) {
          infoButtonRef.current.focus();
        }
      } else if (resetOpenedRef.current) {
        resetOpenedRef.current = false;
        if (resetButtonRef.current) {
          resetButtonRef.current.focus();
        }
      } else {
        infoOpenedRef.current = false;
        resetOpenedRef.current = false;
        if (!preventAutoFocus) {
          setTimeout(() => {
            if (
              resetButtonRef.current &&
              resetButtonRef.current.getAttribute("disabled") == null
            ) {
              resetButtonRef.current.focus();
            } else if (
              infoButtonRef.current &&
              infoButtonRef.current.getAttribute("disabled") == null
            ) {
              infoButtonRef.current.focus();
            }
          });
        }
      }
    }
    popupOpenedRef.current = isPopupActive;
  }, [isPopupActive]);

  useEffect(() => {
    if (setFocusOnReset && ref && ref.current) {
      if (setResetFocusState) {
        setResetFocusState(false);
      }
      setTimeout(() => {
        if (resetButtonRef.current) {
          resetButtonRef.current.focus();
        }
      });
    }
  }, [setFocusOnReset]);

  const classes = `activity-header ${
    isPopupActive ? (!preventAutoHide ? "hide" : "") : ""
  } ${hideImmediately ? "hide-without-delay" : ""}`;

  return (
    <header ref={ref} className={classes}>
      {children}
      <Button
        isPopUpOpen
        text={resetLabel}
        ref={resetButtonRef}
        onClick={_onResetClick}
        hideTooltip={hideTooltip}
        ariaHidden={isPopupActive}
        isPopUpOpen={isPopupActive}
        classes="header reverse icon reset"
        disabled={props.disabled || isPopupActive}
      />
      <Button
        text={infoLabel}
        ref={infoButtonRef}
        onClick={_onInfoClick}
        hideTooltip={hideTooltip}
        disabled={isPopupActive || disableInfo}
        ariaHidden={isPopupActive}
        isPopUpOpen={isPopupActive}
        classes="header icon-only info"
      />
      {audioLabel ? (
        <Button
          text={audioLabel}
          ref={audioButtonRef}
          onClick={_onAudioClick}
          disabled={isPopupActive}
          hideTooltip={hideTooltip}
          ariaLable={audioAriaLable}
          ariaHidden={isPopupActive}
          isPopUpOpen={isPopupActive}
          classes={`header audio icon-only ${
            audioStatePlay ? "play-sound" : "stop-sound"
          }`}
        />
      ) : null}
    </header>
  );
};

Header.propTypes = {
  infoLabel: PropTypes.string,
  resetLabel: PropTypes.string,
  audioLabel: PropTypes.string,
  onAudioClick: PropTypes.func,
  isPopupActive: PropTypes.bool,
  setFocusOnReset: PropTypes.bool,
  audioAriaLable: PropTypes.string,
  setResetFocusState: PropTypes.func,
  onInfoClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
};

export default Header;
