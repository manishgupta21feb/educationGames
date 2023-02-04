import StartUpInfoBox from "../components/common/StartUpInfoBox";
import { connect } from "react-redux";

import { common } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    startUpInfoText: data.startUpInfoText,
    initialImageLabels: data.initialImageLabels,
    altText: data.altTextSpectrum,
    imageLabel: data.imageLabel
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(StartUpInfoBox);
