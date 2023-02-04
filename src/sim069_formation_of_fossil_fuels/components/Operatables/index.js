import Wrapper from "../Wrapper";
import Button from "../../../app/components/Button";
import React, { useState, useEffect, useRef } from "react";
import "./operatable.scss";

const Operatables = (props) => {
  const ref = useRef(null);
  const openedRef = useRef(props.opened);
  const [selectedOperatable, selectOperatable] = useState(-1);
  const {
    fossil,
    opened,
    closeText,
    onOperatable,
    isPopupActive,
    operatablesData,
    onOperatableNonAcc,
    toggleDesciptionBox,
    closeDescriptionBox,
    setCurrentOperatable,
  } = props;

  const [description, setDescription] = useState("");
  const [activeDescBox, setActiveDescBox] = useState(null);

  useEffect(() => {
    setActiveDescBox(false);
  }, [toggleDesciptionBox]);

  const _onOperatable = (evt) => {
    onOperatable(evt);
    setDescription(evt.currentTarget.dataset.description);
    setActiveDescBox(true);
  };

  const _onOperatableNonAcc = (evt) => {
    onOperatableNonAcc(evt);
    setDescription(evt.currentTarget.dataset.description);
    setActiveDescBox(true);
  };

  const _closeDescriptionBox = () => {
    closeDescriptionBox();
    setActiveDescBox(false);
  };

  useEffect(() => {
    if (ref.current && !opened && openedRef.current) {
      setActiveDescBox(false);
      setTimeout(() => {
        const elements = ref.current.querySelectorAll("button");
        for (let element of elements) {
          if (element.getAttribute("disabled") == null) {
            element.focus();
            break;
          }
        }
      });
    }
    openedRef.current = opened;
  }, [opened]);

  const onFocus = (e) => {
    setCurrentOperatable(null);
  };

  useEffect(() => {
    const active = operatablesData[fossil].findIndex((o) => o.active);
    selectOperatable(active);
  }, [operatablesData]);

  const operatable = operatablesData[fossil]?.map((item, index) => {
    return (
      <div
        key={`${item.id}_parent`}
        className={`operatable ${
          item.active && activeDescBox ? "active" : ""
        } ${item.disabled ? "opacDown" : ""}`}
      >
        <button
          onFocus={onFocus}
          aria-label={item.alt}
          data-index-val={index}
          data-source={item.source}
          data-description={item.description}
          onClick={(evt) => _onOperatable(evt)}
          tabIndex={isPopupActive ? "-1" : null}
          disabled={item.disabled ? true : false}
          aria-hidden={isPopupActive ? true : null}
          style={{ backgroundImage: `url(${item.img})` }}
        ></button>
        <div
          tabIndex="-1"
          aria-hidden={true}
          data-index-val={index}
          data-source={item.source}
          data-description={item.description}
          onClick={(evt) => _onOperatableNonAcc(evt)}
          style={{ backgroundImage: `url(${item.img})` }}
        ></div>
      </div>
    );
  });
  return (
    <Wrapper className="wrapper--operatable relative">
      <div className="operatable-wrapper" ref={ref}>
        {operatable}
      </div>

      {activeDescBox ? (
        <div
          className={`discription-box active${selectedOperatable}`}
          aria-hidden
          tabIndex="-1"
        >
          <div className="close-btn">
            <Button
              label={closeText}
              onClick={_closeDescriptionBox}
              isPopupActive={isPopupActive}
              classes={`toast-button positive icon-only`}
            />
          </div>
          <p className="content">{description}</p>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default Operatables;
