import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";

import data from "../data/index";
import { togglePopup } from "../actions";
import {
  setStatic,
  resetQuestion,
  thunk,
  jumpToMCQScreen,
} from "../actions";

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

export default connect(mapState, mapDispatch)(CompletionScreen);
