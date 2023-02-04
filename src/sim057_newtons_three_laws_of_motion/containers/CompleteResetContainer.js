import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data/index";
import { thunk } from "../actions";

const mapState = (state) => ({
    id: "completionReset",
    ...data.completionDialog.reset,
    startActivity: state.startActivity,
});

const mapDispatch = (dispatch) => ({
    onClick: () => {
        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(thunk.resetActivity());
    },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
