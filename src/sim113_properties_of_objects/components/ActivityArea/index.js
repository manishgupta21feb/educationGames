import React, { useEffect, useRef } from "react";
import View from "../../../app/components/View";
import Label from "../../../app/components/Label";
import Button from "../../../app/components/Button";
import NextScreenButton from "../../containers/NextScreenButton";
import SubmitAnswerButton from "../../containers/SubmitAnswerButton";
import "./style.scss";

const ActivityArea = (props) => {
  const ref = useRef(null);
  const {
    onItemClick,
    optionItems,
    mainImageAlt,
    isPopupActive,
    selectedItems,
    questionAnswered,
    selectedSubquestion,
  } = props;

  return (
    <View ariahidden={isPopupActive}>
      <div className="activity-area">
        <div
          role="img"
          className="sr-only sr-image"
          aria-label={mainImageAlt}
        />
        <h2
          dangerouslySetInnerHTML={{ __html: selectedSubquestion?.text }}
        ></h2>
        <div ref={ref} className="options-area">
          {optionItems.map((option) => {
            const { id, alt, text, matched } = option;
            const _matched = matched ? "matched" : "";
            const active = selectedItems.indexOf(id) >= 0 ? "active" : "";
            const disabled =
              isPopupActive || matched || questionAnswered == "answered";
            return (
              <div
                className="option-wrapper"
                key={`option-button-wrapper${option.id}`}
              >
                <button
                  id={id}
                  title={text}
                  aria-label={alt}
                  disabled={disabled}
                  onClick={onItemClick}
                  aria-pressed={!!active || !!matched}
                  className={`object ${option.id} ${active} ${_matched}`.trim()}
                >
                  <span></span>
                </button>
                <p aria-hidden>{text}</p>
              </div>
            );
          })}
        </div>
        <SubmitAnswerButton />
        <NextScreenButton />
      </div>
    </View>
  );
};

export default ActivityArea;
