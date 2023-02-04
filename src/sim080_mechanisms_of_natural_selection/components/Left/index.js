import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import EventManager from "../../../app/events/manager";

const LeftArea = (props) => {
  let {
    isPopupActive,
    isButtonType,
    addGrasshopper,
    isRadioButtonDisable,
    onClickOfImage,
    imgAlt,
    firstScreenAlt,
    getQuestionSet,
    pairInsects,
    conditionTree,
    getAltText,
    selectedText,
  } = props;

  const [imgSelected, setImgSelected] = useState([]);
  const [buttonImageStatus, setButtonImageStatus] = useState(false);
  const clickHandler = (e, color, label) => {
    const { id } = e.target.dataset;
    let temp = [...imgSelected];
    if (!temp.includes(id) && isButtonType) {
      temp.push(id);
      if (temp.length > 2) {
        temp.splice(0, 1);
        pairInsects(color, true);
      }
      if (temp.length == 2) {
        isRadioButtonDisable(false);
      }
      setImgSelected(temp);
      pairInsects(color, false, label);
      EventManager.broadcast("PRIMARY_CLICK");
    }
  };

  useEffect(() => {
    setButtonImageStatus(isButtonType);
    !isButtonType && setImgSelected([]);
  }, [isButtonType]);

  return (
    <div className="left-area">
      <img className="sr-only sr-image" alt={getAltText} />
      <div className={`insects-positions${buttonImageStatus ? `-btn` : ``}`}>
        {addGrasshopper?.map((val, index) => {
          return (
            <div
              className={`imgarea ${
                val.show ? `imgarea__show` : `imgarea__hidden`
              } ${[...imgSelected].includes(val.key) ? `disabled` : ``}`}
              style={{ top: val.top, left: val.left }}
              key={val.key}
              id={val.key}
              data-id={val.key}
              aria-hidden={isPopupActive}
            >
              <>
                <button
                  role="button"
                  className={`${val.classes1} accessible-button 
                  ${
                    val.subTypes?.replace("lbl-l", "btn-l") == "btn-l" &&
                    isButtonType
                      ? val.classes1 + `__show`
                      : val.classes1 + `__hidden`
                  }
                      ${
                        [...imgSelected].includes(val.key)
                          ? `${val.classes1}__disabled`
                          : ""
                      }`}
                  onClick={(e) => {
                    let label = [...imgSelected].includes(val.key)
                      ? val.arialbl.replace("{insect-count}", val.keyValue) +
                        selectedText
                      : val.arialbl.replace("{insect-count}", val.keyValue);
                    clickHandler(e, val.classes1, label);
                  }}
                  data-id={val.key}
                  id={`btn-l` + val.key}
                  disabled={[...imgSelected].includes(val.key) ? true : false}
                  aria-hidden={
                    val.subTypes?.replace("lbl-l", "btn-l") == "btn-l" &&
                    isButtonType &&
                    !isPopupActive
                      ? false
                      : true
                  }
                  aria-label={
                    [...imgSelected].includes(val.key)
                      ? val.arialbl.replace("{insect-count}", val.keyValue) +
                        " selected"
                      : val.arialbl.replace("{insect-count}", val.keyValue)
                  }
                  tabIndex={
                    val.subTypes?.replace("lbl-l", "btn-l") == "btn-l" &&
                    isButtonType &&
                    val.show &&
                    !isPopupActive
                      ? 0
                      : -1
                  }
                />
                <button
                  role="button"
                  className={`${val.classes2} accessible-button
                  ${
                    val.subTypes?.replace("lbl-d", "btn-d") == "btn-d" &&
                    isButtonType
                      ? val.classes2 + "__show"
                      : val.classes2 + "__hidden"
                  }

                       ${
                         [...imgSelected].includes(val.key)
                           ? `${val.classes}__disabled`
                           : ""
                       }`}
                  onClick={(e) => {
                    let label = [...imgSelected].includes(val.key)
                      ? val.arialbl.replace("{insect-count}", val.keyValue) +
                        " selected"
                      : val.arialbl.replace("{insect-count}", val.keyValue);
                    clickHandler(e, val.classes2, label);
                  }}
                  data-id={val.key}
                  id={`btn-d` + val.key}
                  disabled={[...imgSelected].includes(val.key) ? true : false}
                  aria-label={
                    [...imgSelected].includes(val.key)
                      ? val.arialbl.replace("{insect-count}", val.keyValue) +
                        " selected"
                      : val.arialbl.replace("{insect-count}", val.keyValue)
                  }
                  aria-hidden={
                    val.subTypes?.replace("lbl-d", "btn-d") == "btn-d" &&
                    isButtonType &&
                    val.show &&
                    !isPopupActive
                      ? false
                      : true
                  }
                  tabIndex={
                    val.subTypes?.replace("lbl-d", "btn-d") == "btn-d" &&
                    isButtonType &&
                    val.show &&
                    !isPopupActive
                      ? 0
                      : -1
                  }
                />
                <div
                  className={`${val.classes1} accessible-button
                  ${
                    val.subTypes == "lbl-l" && !isButtonType
                      ? val.classes1 + "__show"
                      : val.classes1 + "__hidden"
                  }
                  `}
                  aria-hidden={
                    val.subTypes == "lbl-l" &&
                    !isButtonType &&
                    val.show &&
                    !isPopupActive
                      ? false
                      : true
                  }
                >
                  <img
                    className="sr-only sr-image"
                    aria-label={val.arialbl.replace(
                      "{insect-count}",
                      val.keyValue
                    )}
                  />
                </div>
                <div
                  className={`${val.classes2} accessible-button 
                  ${
                    val.subTypes == "lbl-d" && !isButtonType && val.show
                      ? val.classes2 + "__show"
                      : val.classes2 + "__hidden"
                  }
                  `}
                  aria-hidden={
                    val.subTypes == "lbl-d" &&
                    !isButtonType &&
                    val.show &&
                    !isPopupActive
                      ? false
                      : true
                  }
                >
                  <img
                    className="sr-only sr-image"
                    aria-label={val.arialbl.replace(
                      "{insect-count}",
                      val.keyValue
                    )}
                  />
                </div>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftArea;
