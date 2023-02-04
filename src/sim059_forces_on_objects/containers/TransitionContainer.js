import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import {thunks} from "../actions";
import data from "../data";

const mapState = (state) => ({
  id: "4",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.transitionContinuePressed())
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
