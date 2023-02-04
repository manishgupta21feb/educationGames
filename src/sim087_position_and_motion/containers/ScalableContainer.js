import { connect } from "react-redux";
import { common } from "../actions";
import ScalebleWrapper from "../../app/components/ScalableWrapper";

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
