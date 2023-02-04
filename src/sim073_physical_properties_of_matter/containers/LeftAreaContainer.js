import { connect } from "react-redux";
import LeftArea from "../components/LeftArea";
import EventManager from "../../app/events/manager";

import data from "../data";
import {
  setPriviousSelectedItem,
  setPriviousSelectedPhysicalProperties,
  setResetFocusState,
  setSelectedItem,
  setShowNextButton,
  thunk,
  updateResetBtnState,
} from "../actions";
import { common } from "../actions";

const mapState = (state) => {
  let text =
    state.selectedItem == ""
      ? state.selectedPhysicalProperty == "Mass"
        ? data.altMassStatic
        : state.selectedPhysicalProperty == "Volume"
        ? data.altVolumeStatic
        : state.selectedPhysicalProperty == "Relative density"
        ? data.aquariumAlt
        : state.selectedPhysicalProperty == "Magnetism"
        ? data.barMagnetALt
        : data.electricCircuitAlt
      : null;

  let itemText;
  data.items.map((val) => {
    val.id == state.selectedItem ? (itemText = val.alt) : null;
  });

  return {
    // startActivity: state.startActivity,
    items: data.items,
    selectedItem: state.selectedItem,
    selectedPhysicalProperty: state.selectedPhysicalProperty,
    priviousSelectedItem: state.priviousSelectedItem,
    liveText: data.liveText,
    isPopupActive: !!state.currentPopup.length,
    headingText: data.headingText,
    dynamicMassAltText: data.dynamicMassAltText,
    altStaticText: text,
    weigthofItems: data.weigthofItems,
    volumeOfItems: data.volumeOfItems,
    textAt: data.textAt,
    textA: data.textA,
    selectedItemText: itemText,
    dynamicVolumeAltText: data.dynamicVolumeAltText,
    dynamicDensitySinkAltText: data.dynamicDensitySinkAltText,
    dynamicDensityFloatAltText: data.dynamicDensityFloatAltText,
    dynamicMagnetAltText: data.dynamicMagnetAltText,
    dynamicElectricAltText1: data.dynamicElectricAltText1,
    dynamicElectricAltText2: data.dynamicElectricAltText2,
    dynamicElectricAltText3: data.dynamicElectricAltText3,
    textSticking: data.textSticking,
    textNotSticking: data.textNotSticking,
  };
};

const mapDispatch = (dispatch) => ({
  onclick: (a, liveText) => {
    dispatch(setSelectedItem(a.id));
    dispatch(setPriviousSelectedItem(a.id));
    EventManager.broadcast("SECONDARY_CLICK");

    dispatch(thunk.toast(a));
  },
  showNextButtton: (val) => {
    dispatch(setShowNextButton(val));
  },
  handleLiveText: (liveText) => {
    dispatch(common.ariaLiveAssertive(liveText));
    setTimeout(() => {
      dispatch(common.ariaLiveAssertive(" "));
    }, 800);
  },
});

export default connect(mapState, mapDispatch)(LeftArea);
