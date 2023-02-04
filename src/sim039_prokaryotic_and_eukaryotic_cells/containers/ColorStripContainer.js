import { connect } from "react-redux";
import ColorStrip from "../components/ColorStrip";

import data from "../data";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    colors: data.stage1.colors,
    colorHeader: data.stage1.colorHeader,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(ColorStrip);
