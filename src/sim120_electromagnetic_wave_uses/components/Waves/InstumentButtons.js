import React, { useEffect, useState } from "react";
import Button from "../../../app/components/Button";

const ButtonSecond = (props) => {
  const {
    isPopupActive,
    instruments,
    buttonLabels,
    selectedQuestion,
    onFinalSubmit,
    selectedPage,
    onIncorrect,
    onCorrect,
  } = props;

  const [selectedButtons, setSelectedButtons] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [allCorrect, setAllCorrect] = useState(false);

  useEffect(() => {
    if (selectedButtons.length) {
      setSelectedButtons([]);
    }
    if (correct.length) {
      setCorrect([]);
    }
    if (allCorrect) {
      setAllCorrect(false);
    }
  }, [selectedPage]);

  const onClick = (e) => {
    if (selectedButtons.includes(e)) {
      const newSelection = [...selectedButtons];
      const uniqueList = newSelection.filter((ns) => {
        return ns != e;
      });
      setSelectedButtons(uniqueList);
    } else {
      setSelectedButtons((state) => [...state, e]);
    }
  };

  const onSubmit = () => {
    const newA = selectedButtons.filter((val) =>
      selectedQuestion.answer.includes(val)
    );

    const cList = [...new Set([...correct, ...newA])];

    setCorrect(cList);
    setSelectedButtons([]);
    if (cList.length === selectedQuestion.answer.length) {
      setAllCorrect(true);
      onFinalSubmit();
      onCorrect();
    } else {
      onIncorrect();
    }
  };

  return (
    <div className="buttons-container">
      {Object.keys(instruments).map((instrument) => {
        return (
          <div key={instrument} className="button-wrapper">
            <Button
              text={instruments[instrument]}
              disabled={
                allCorrect ||
                selectedQuestion.answer.length == selectedButtons.length
                  ? selectedButtons.includes(instrument)
                    ? false
                    : true
                  : correct.includes(instrument)
                  ? true
                  : false
              }
              classes={`btn-chip label ${
                selectedButtons.includes(instrument) ||
                correct.includes(instrument)
                  ? "disabled-new"
                  : ""
              } `}
              id={instrument}
              onClick={() => onClick(instrument)}
              ariaPressed={
                selectedButtons.includes(instrument) ||
                correct.includes(instrument)
              }
              isPopupActive={isPopupActive}
            />
            {correct.includes(instrument) ? (
              <div className="correcttick"></div>
            ) : null}
          </div>
        );
      })}
      <div className="submit-button">
        <Button
          classes="primary"
          text={buttonLabels.submitAnswer}
          onClick={onSubmit}
          disabled={!selectedButtons.length}
          isPopUpOpen={isPopupActive}
        />
      </div>
    </div>
  );
};
export default ButtonSecond;
