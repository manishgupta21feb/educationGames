import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import "./questionComp.scss";

import Equation from "./Equation";
import RadioButton from "../../containers/RadioButton";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import ButtonNextQuestion from "../../containers/ButtonNextQuestion";

const NuclearComponent = (props) => {
  const [rbuttons, setRButtons] = useState([]);
  const { answerSubmitted, correctAttempt, question, data, selectedQuestion } =
    props;

  useEffect(() => {
    const buttons =
      question &&
      data.radiobuttons
        .filter((r) => question.indexOf(r.id) >= 0)
        .map((a) => ({
          id: a.id,
          label: a.label,
          disabled: a.disabled,
          classes: `${selectedQuestion.classIdentifier}-${a.id}`,
          html: renderToString(
            <Equation
              {...a.atom}
              atomType={a.id}
              showAtomImage
              classes={`${selectedQuestion.classIdentifier}-${a.id}`}
            />
          ),
        }))
        .sort(() => 0.5 - Math.random());
    setRButtons(buttons);
  }, [question]);

  return (
    <div className="nuclear-class">
      <MCQAreaContainer>
        <RadioButton radiobuttons={rbuttons} />
      </MCQAreaContainer>
      {answerSubmitted && correctAttempt ? <ButtonNextQuestion /> : null}
    </div>
  );
};

export default NuclearComponent;
