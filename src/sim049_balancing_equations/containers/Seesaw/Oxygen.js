import { connect } from "react-redux";
import SeeSaw from "../../components/SeeSaw";

import data from "../../data";
import { altTextFunction } from "../../helper/helper";

const mapState = (state) => {
  const product =
    state.selectedOption == data.mcqOptions[0].id
      ? state.oxygenProduct
      : [...state.oxygenProduct, ...state.oxygenProductTwo];

  const finalAltText = altTextFunction(
    state.oxygens.length,
    product.length,
    data.oxygenAddedLeft,
    data.oxygenAddedRight
  );

  return {
    label: data.atomsData[0].components[1].label,
    id: data.atomsData[0].components[1].id,
    rightArray: product,
    leftArray: state.oxygens,
    rightArray: product,
    mcqOptionId: data.mcqOptions[1].id,
    altText:
      state.oxygens.length == 0 && product.length == 0
        ? data.oxygenEmptyBalanceAlt
        : finalAltText,
  };
};

const matchDispatch = (dispatch) => ({});

export default connect(mapState, matchDispatch)(SeeSaw);
