import { connect } from "react-redux";
import CustomInfo from "../components/customActivity/CustomInfo";

import data from "../data";

const mapStateToProps = (state) => {
  return {
    tableRow: data.trAndTdData,
    caption: data.globalUsedText.tableCaption,
  };
};

export default connect(mapStateToProps)(CustomInfo);
