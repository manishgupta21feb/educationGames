import { connect } from "react-redux";
import { scaleChange } from "../actions";
import ScalebleWrapper from "../../app/components/ScalableWrapper";

const mapState = (state) => {
  return {
    ns: "ali-science-simulations",
  };
};

const matchDispatch = (dispatch) => ({
  scaleChange: (scale) => {
    dispatch(scaleChange(scale));
  },
});

export default connect(mapState, matchDispatch)(ScalebleWrapper);
