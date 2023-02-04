import React from "react";
import Wrapper from "../Wrapper";
import About from "../../containers/AboutContainer";
import Question from '../../containers/QuestionContainer';

const BottomArea = (props) => {
  const {
    optionTrigger
  } = props;

  return (
    <Wrapper className="wrapper--full wrapper--column relative">
      {optionTrigger ? <Question/> : <About/>}
    </Wrapper>
  )
};

export default BottomArea;
