import React from "react";
import ButtonContinue from "../../../containers/ButtonContinue";
import MCQContainer from "../../../containers/MCQContainer";
import SelectClassifyContainer from "../../../containers/SelectClassifyContainer";
import SelectEnergyContainer from "../../../containers/SelectEnergyContainer";
import SelectLivingContainer from "../../../containers/SelectLivingContainer";

const RightArea = (props) => {
  const { nextButtonShow } = props;
  return (
    <div>
      <MCQContainer>
        <div>
          <SelectLivingContainer />
          <SelectClassifyContainer />
          <SelectEnergyContainer />
        </div>
      </MCQContainer>
      {nextButtonShow ? <ButtonContinue /> : null}
    </div>
  );
};
export default RightArea;
