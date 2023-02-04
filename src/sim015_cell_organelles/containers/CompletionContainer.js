import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import { common,thunk} from "../actions";
import data from "../data";

const mapState = (state) => ({
    id: "4",
    ...data.completionScreen,
});

const mapDispatch = (dispatch) => ({
    onClick: () => {
        EventManager.broadcast("SECONDARY_CLICK");
        dispatch(common.togglePopup(4));
        dispatch(thunk.resetActivity(true));
    },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
