import { connect } from "react-redux";
import LeftArea from "../components/ViewArea/LeftArea";

import data from "../data";

const mapState = (state) => {
  return {
    defaultAssets: data.rightScreenData,
    scenerioId: data.rightScreenData[state.setScreenValue].id,
    buttonDisable: state.buttonClickCount,
    imageAltText:
      data.rightScreenData[state.setScreenValue].imageAltText[
        state.buttonClickCount
      ],
  };
};

export default connect(mapState)(LeftArea);
