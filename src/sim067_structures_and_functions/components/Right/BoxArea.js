import React, { useRef, useEffect, useState } from "react";
import info_btn_icon from "../../assets/images/info_btn_icon.svg";
import EventManager from "../../../app/events/manager";
import Button from "../../../app/components/Button";
import { getNumbers } from "../../helper";

const Draggables = (props) => {
  const {
    selectedState,
    questions,
    buttonLabels,
    submitOption,
    toastMsg,
    selectedOptions,
    currentPopup,
    isPopupActive,
    getQuestionOption,
    infoButton,
    getInfoBtnStatus,
    getImagePart,
  } = props;

  const helpButtonRef = useRef(null);

  const clickHandler = (e, _id) => {
    const { id, src, live, aria } = e.target.dataset;
    submitOption(id, src, live, aria);
    setisSelectedItem(_id);
  };

  const onClickInfoButton = (item, btnId) => {
    let result = getQuestionOption.map((x, index) => {
      if (x.id == btnId) {
        x.status = true;
      } else {
        x.status = false;
      }
      return x;
    });

    setSelectedItem(result);
    if (item.target.id) {
      infoButton(
        item.target.id.replace("info-btn-", "").replace("info-text-", ""),
        item.target.id
      );
    }
  };

  useEffect(() => {
    setSelectedItem(getQuestionOption);
  }, [questions]);

  useEffect(() => {
    if (getInfoBtnStatus.status) {
      setTimeout(() => {
        const _id = getInfoBtnStatus.id.split("-close")[0];
        helpButtonRef.current = document.querySelector(`#${_id}`);
        if (helpButtonRef.current) {
          helpButtonRef.current.focus();
        }

        let result = getQuestionOption.map((x, index) => {
          if (x.srNo == getNumbers(_id)) {
            x.status = false;
          }
          return x;
        });

        setSelectedItem(result);
      }, 50);
    } else {
    }
  }, [getInfoBtnStatus.status]);

  const [selectedItem, setSelectedItem] = useState([]);
  const [isSelectedItem, setisSelectedItem] = useState(-1);
  return (
    <div className="wrapper">
      {selectedItem.map((item, i) => {
        return (
          <div className="option-container" key={i}>
            <div className="draggables">
              <button
                data-live={item.liveText}
                data-aria={item.altText}
                data-src={item.src}
                data-id={item.id}
                disabled={isPopupActive ? true : false}
                id={`subBox` + item.id}
                aria-label={`
                  ${item.altText.replace(".", "")} ${
                  isSelectedItem == item.id ? selectedState : ""
                }`}
                title={item.altText.replace(".", "")}
                onClick={(e) => clickHandler(e, item.id)}
                className={`box-button accessible-button ${
                  isSelectedItem == item.id ? `selected-box` : ""
                }`}
                tabIndex={isPopupActive ? "-1" : null}
              >
                <p
                  aria-hidden
                  data-id={"text-" + item.id}
                  data-src={item.src}
                  data-live={item.liveText}
                  data-aria={item.altText}
                  className={item.classes}
                />
              </button>
              <p className="box-button-label">{item.name} </p>

              <div className="help-container">
                <Button
                  classes={`btn-help ${item.addClass} ${
                    item.status ? `selected` : ``
                  }`}
                  ref={helpButtonRef}
                  text={buttonLabels.info}
                  id={"info-btn-" + item.srNo}
                  label={`${buttonLabels.info}`}
                  isPopUpOpen={isPopupActive}
                  ariaLable={item.infoAltText}
                  onClick={(e) => onClickInfoButton(e, item.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Draggables;
