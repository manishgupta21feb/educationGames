import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common, updateToastMsg } from "../actions";

const mapStateToProps = (state) => ({
  iconOnly: true,
  id: "toastNegativePT",
  toastType: "warning",
  buttonText: data.buttonClose,
  content: data.toastMsg.incorrect,
});

const matchDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(common.toggleToastMessage(false));
    dispatch(updateToastMsg(""));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapStateToProps, matchDispatchToProps)(Toast);
