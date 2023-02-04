import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => {
    return {
        id: "ts1",
        toastType: "warning",
        content: data.wrongMsg,
        iconOnly: true,
        buttonText: data.buttonLabels.close,
        buttonLabel: data.buttonLabels.close,
    }
};
const matchDispatch = (dispatch) => ({
    onClick: () => {
        dispatch(common.toggleToastMessage(false));
        EventManager.broadcast("SECONDARY_CLICK");
    },
    onAutoHide: () => {
        dispatch(common.toggleToastMessage(false));
    },
});

export default connect(mapState, matchDispatch)(Toast);
