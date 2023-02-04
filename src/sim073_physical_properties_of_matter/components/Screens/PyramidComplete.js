import React, { useEffect, useRef, useState } from "react";
import View from "../../../app/components/View";
import MainScreen from "../../containers/MainScreenContainer";
import "./style.scss";

export default (props) => {
  // const timeoutRef = useRef(null);
  // const [hidden, setHidden] = useState(props.isPopupActive);

  // useEffect(() => {
  //   if (props.isPopupActive) {
  //     setHidden(true);
  //     clearTimeout(timeoutRef.current);
  //     timeoutRef.current = null;
  //   } else {
  //     timeoutRef.current = setTimeout(() => {
  //       setHidden(false);
  //       clearTimeout(timeoutRef.current);
  //       timeoutRef.current = null;
  //     }, 500);
  //   }
  // }, [props.isPopupActive]);

  // useEffect(() => {
  //   console.log("[PyramidComplete] hidden is updated: ", hidden);
  // }, [hidden]);

  return (
    <div className="screen1-container">
      <View ariahidden={props.isPopupActive || null}>
        <MainScreen />
      </View>
    </div>
  );
};
