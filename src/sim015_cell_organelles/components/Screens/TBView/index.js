import React,{useEffect} from "react";
import View from '../../../../app/components/View';
import TopAreaSectionContainer from "../../../containers/TopAreaSectionContainer";
import BottomAreaContainer from "../../../containers/BottomAreaSectionContainer";
export default (props) => {
  const {isPopupActive}=props

  const backScreen = () => {
    props.changeScreen(1);
  }
 
  return (
    <div className="screen0-container">
      <View layout="topbottom"  aria-hidden={isPopupActive}
      tabIndex={isPopupActive ? "-1" : null}>
        <TopAreaSectionContainer />
        <BottomAreaContainer />

        {/* <div>
          <button onClick={backScreen}>Next Screen</button>
        </div> */}
      </View>
    </div>
  );
};
