import { connect } from "react-redux";
import SeeSaw from "../../components/SeeSaw";

import data from "../../data";
import { altTextFunction } from "../../helper/helper";

const mapState = (state) => {
  const finalAltText = altTextFunction(
    state.carbons.length,
    state.carbonProduct.length,
    data.carbonAddedLeft,
    data.carbonAddedRight
  );

  return {
    label: data.atomsData[0].components[2].label,
    id: data.atomsData[0].components[2].id,
    leftArray: state.carbons,
    rightArray: state.carbonProduct,
    mcqOptionId: data.mcqOptions[1].id,
    altText:
      state.carbons.length == 0 && state.carbonProduct.length == 0
        ? data.carbonEmptyBalanceAlt
        : finalAltText,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(SeeSaw);
