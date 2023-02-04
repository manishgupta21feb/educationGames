import { connect } from "react-redux";
import StartInfo from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => ({
  id: "StartInfo",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.StartUpInfo.buttonContinueText,
  buttonContinueLabel: data.StartUpInfo.buttonContinueLabel,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartInfo);
