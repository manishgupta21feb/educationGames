import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../../app/components/Button";
import FinishButtonContainer from "../../containers/FinishButtonContainer";
import AccessibleList from "../../containers/AccessibleList";
import NucleicAcidAtoms from "../InnerComponents/NucleicAcidAtoms";
import Monosaccharides from "../InnerComponents/Monosaccharides";
import GlycogenTypes from "../InnerComponents/GlycogenTypes";
import { getNumbers } from "../../helper.js";
import Screen2 from "../../containers/Screen2Container";
import Screen3Center from "../../containers/Screen3CenterContainer";
import Screen4 from "../../containers/Screen4Container";
import Screen11CenterContainer from "../../containers/Screen11CenterContainer";
import Screen6Center from "../../containers/Screen6Center";
import Screen13 from "../../containers/Screen13Container";

const CenterArea = (props) => {
  let { screenNo } = props;

  if (screenNo == 2) {
    return <Screen2 />;
  } else if (screenNo == 3) {
    return <Screen3Center />;
  } else if (screenNo == 6) {
    //dnd
    return <Screen6Center />;
  } else if (screenNo == 13) {
    return <Screen13 />;
  } else if (screenNo == 4 || screenNo == 8) {
    return <Screen4 />;
  } else if (screenNo == 11) {
    //dnd
    return <Screen11CenterContainer />;
  }
};

export default CenterArea;
