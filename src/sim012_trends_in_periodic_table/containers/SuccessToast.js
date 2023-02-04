import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapStateToProps = (state) => ({
  iconOnly: true,
  id: "toastPositivePT",
  toastType: "positive",
  buttonText: data.buttonClose,
  buttonLabel: data.buttonClose,
  content: data.toastMsg.correct,
});

const matchDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    dispatch(updateToastMsg(""));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Toast);
