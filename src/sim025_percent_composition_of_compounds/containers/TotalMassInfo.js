import { connect } from "react-redux";
import TotalMassInfo from "../components/mainActivity/TotalMassInfo";

import data from "../data";

const mapState = (state) => {
  const elementData =
    state.viewType == "burger" ? data.draggablesBurger : data.draggablesWater;
  const showPercentLabel = elementData.length == state.itemsDetail.length;
  return {
    elementData,
    showPercentLabel,
    massInfo:
      state.viewType == "burger"
        ? data.burgerTotalMassInfo
        : data.waterTotalMassInfo,
    itemsDetail: state.itemsDetail,
  };
};

export default connect(mapState)(TotalMassInfo);
