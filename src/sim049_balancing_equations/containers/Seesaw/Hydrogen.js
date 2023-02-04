import { connect } from "react-redux";
import SeeSaw from "../../components/SeeSaw";

import data from "../../data";
import { altTextFunction } from "../../helper/helper";

const mapState = (state) => {
  const finalAltText = altTextFunction(
    state.hydrogens.length,
    state.hydrogenProduct.length,
    data.hydrogenAddedLeft,
    data.hydrogenAddedRight
  );

  return {
    label: data.atomsData[0].components[0].label,
    id: data.atomsData[0].components[0].id,
    leftArray: state.hydrogens,
    rightArray: state.hydrogenProduct,
    selectedOption: state.selectedOption,
    mcqOptionId: data.mcqOptions[1].id,
    altText:
      state.hydrogens.length == 0 && state.hydrogenProduct.length == 0
        ? data.hydrogenEmptyBalanceAlt
        : finalAltText,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(SeeSaw);
