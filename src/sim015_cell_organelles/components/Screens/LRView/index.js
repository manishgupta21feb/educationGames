import React from "react";
import View from '../../../../app/components/View';
import LeftAreaContainer from "../../../containers/LeftAreaContainer";
import RightAreaContainer from "../../../containers/RightAreaContainer";
export default (props) => {
  const { isPopupActive} = props;

  // const nextScreen = () => {
  //   props.changeScreen(2);
  // }

  return (
    <div className="screen1-container">
      <View layout="leftright"  
         aria-hidden={isPopupActive}
        tabIndex={isPopupActive ? "-1" : null} >
         <LeftAreaContainer />
          <RightAreaContainer />
        {/* <div>
          <button onClick={nextScreen}>Next Screen</button>
        </div> */}
      </View>
    </div>
  );
};
