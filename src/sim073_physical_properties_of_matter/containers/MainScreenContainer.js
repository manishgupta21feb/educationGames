import { connect } from "react-redux";
import FullArea from "../components/FullArea";

import data from "../data";
import { common, setShowNextButton } from "../actions";

const mapState = (state) => ({
  mainScreenButtons: data.mainScreenButtons,
  mainActivityText: data.mainActivityText,
  headingText: data.headingText,
  isPopupActive: !!state.currentPopup.length,
});

const mapDispatch = (dispatch) => ({
  // onClick: (id, selectedState) => {
  //   console.log(click);
  //   dispatch(common.updateResetBtnState(false));
  //   dispatch(setShowNextButton(false));
  // },
});

export default connect(mapState, mapDispatch)(FullArea);
