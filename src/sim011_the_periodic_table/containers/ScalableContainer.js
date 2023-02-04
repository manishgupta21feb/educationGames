import { connect } from "react-redux";
import ScalebleWrapper from "../../app/components/ScalableWrapper";

import { common } from "../actions";

const mapStateToProps = (state) => {
  return {
    ns: "ali-science-simulations",
  };
};

const mapDispatchToProps = (dispatch) => ({
  scaleChange: (scale) => {
    dispatch(common.scaleChange(scale));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ScalebleWrapper);
