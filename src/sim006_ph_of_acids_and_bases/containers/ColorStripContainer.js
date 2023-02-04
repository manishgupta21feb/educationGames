import { connect } from "react-redux";
import ColorStrip from "../components/ColorStrip";

import data from "../data";

const mapState = (state) => {
  return {
    colors: data.stage1.colors,
    colorHeader: data.stage1.colorHeader,
    isPopupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(ColorStrip);
