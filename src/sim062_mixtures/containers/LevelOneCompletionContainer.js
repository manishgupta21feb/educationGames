import { connect } from "react-redux";
import CompletionScreen from "../../app/components/CompletionScreen";
import { cloneDeep } from "lodash";
import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => ({
  id: "3",
  ...data.transitionPopup,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.resetSectionsData(cloneDeep(data.labels)));
  },
});

export default connect(mapState, mapDispatch)(CompletionScreen);
