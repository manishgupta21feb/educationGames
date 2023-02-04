import { connect } from "react-redux";
import BottomStatic from "../components/FirstScreen/BottomStatic";

import data from "../data";

const mapState = (state) => ({
  isPopupActive: !!state.currentPopup.length,
  introductionHeading: data.introductionHeading,
  questions: data.secondScreenText,
  bottomIntroText: data.bottomIntroText,
  hotspotData: data.hotspotData,
  selectedHotspot: state.selectedHotspot,
  selectedButton: state.selectedButton,
});

export default connect(mapState)(BottomStatic);
