import { connect } from "react-redux";
import Fullview from "../components/activity/Fullview";

import data from "../data/index";
import { common, thunks } from "../actions";

const mapState = (state) => {
  const dataset = data.observationsData;

  let newAlt;

  data.thumbnails.map((x) => {
    if (x.id == state.selectedHotspot) {
      newAlt = x.altText;
    }
  });
  console.log(state.observationsData.liveTextRead)
  return {
    heading: data.mainHeadingAll,
    headingtwo: data.mainHeadingCarvsBuilding,
    imgAlt: newAlt,
    massText: data.readingScreenMass,
    velocityText: data.readingScreenVelocity,
    readingScreen: data.readingScreen,
    sliderText: data.sliderText,
    sliderOneValue: state.sliderOneValue,
    sliderTwoValue: state.sliderTwoValue,
    metertext: data.metertext,
    metertextlabel: data.metertextlabel,
    isPopupActive: !!state.currentPopup.length,
    buttonData: dataset[state.selectedHotspotIndex],
    buttonLabelData: data.thumbnails,
    buttonSelected: state.selectedHotspot,
    startActivity: state.startActivity,
    isPopupActive: !!state.currentPopup.length,
    observationsData: state.observationsData,
    buttonLabels: data.buttonLabelsData,
    currentPopup: state.currentPopup,
    buttonPlay: data.buttonPlay,
  };
};
const mapDispatch = (dispatch) => ({
  togglePopup: (id) => {
    dispatch(common.togglePopup(id));
  },
  clickedPlayButton: (value) => {
    dispatch(thunks.driveActivity(value));
  },
  setResetFocusState: (state) => {
    dispatch(common.setResetFocusState(true));
  },
  liveTextRead: (state) => {
    if (state) {
    
      dispatch(common.ariaLiveAssertive(" "));
      setTimeout(() => {
        dispatch(common.ariaLiveAssertive(state));
      }, 300);
      setTimeout(() => {
        dispatch(common.ariaLiveAssertive(" "));
      }, 500);
    }
  },
  
  
});

export default connect(mapState, mapDispatch)(Fullview);
