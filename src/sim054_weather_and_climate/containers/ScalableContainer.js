import { connect } from "react-redux";
import ScalebleWrapper from "../../app/components/ScalableWrapper";

import { common } from "../actions";

const mapState = (state) => {
  return {
    ns: "ali-science-simulations",
  };
};

const matchDispatch = (dispatch) => ({
  scaleChange: (scale) => {
    dispatch(common.scaleChange(scale));
  },
});

export default connect(mapState, matchDispatch)(ScalebleWrapper);
