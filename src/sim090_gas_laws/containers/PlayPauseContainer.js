import { connect } from "react-redux";
import ButtonNext from "../../app/components/Button";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    type: "button",

    describedby: "qbutton-labelled-by-te_video_1",
    title: "Play video",
  };
};

const matchDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, matchDispatch)(ButtonNext);
