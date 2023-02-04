import React from "react";
import Wrapper from "../../Wrapper";
import Options from "../../../containers/Dnd/OptionsContainer";
import Questions from "../../../containers/Dnd/QuestionsContainer";

import "./full-area.scss";

const FullArea = () => {
  return (
    <Wrapper className="wrapper--wrap full-area">
      <Options />
      <Questions />
    </Wrapper>
  );
};

export default FullArea;
