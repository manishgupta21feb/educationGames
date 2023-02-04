import React from "react";
import Screen1 from "../../containers/Screen1Container";
import Screen2 from "../../containers/Screen2Container";
import ButtonContinue from "../../containers/ButtonContinueContainer";
const index = (props) => {
  const { data, viewScreen } = props;

  return (
    <>
      {viewScreen ? (
        <>
          <Screen1 /> <ButtonContinue />{" "}
        </>
      ) : (
        <Screen2 />
      )}
    </>
  );
};

export default index;
