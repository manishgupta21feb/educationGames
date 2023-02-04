import React from "react";

import Interactive from "../../containers/RightInteractiveContainer";
import NonInteractive from "../../containers/RightNonInteractiveContainer";

export default (props) => {
  const { isMCQ, isBall } = props;
  return (
    <>
      {
        isMCQ ? <Interactive /> : <NonInteractive />
      }
    </>
  );
};
