import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import "./NuclearChemistry.scss";

import Equation from "./Equation";
import RadioButton from "../../containers/RadioButton";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import ButtonNextQuestion from "../../containers/ButtonNextQuestion";

const NuclearComponent = (props) => {
  const [rbuttons, setRButtons] = useState([]);
  const { answerOptions, answerSubmitted, correctAttempt } = props;

  useEffect(() => {
    const buttons = answerOptions.map((a) => ({
      id: a.id,
      label: a.label,
      disabled: a.disabled,
      html: renderToString(
        <Equation {...a.atom} atomType={a.id} showAtomImage />
      ),
    }));
    setRButtons(buttons);
  }, []);

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
