import { connect } from "react-redux";
import StartInfo from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => ({
  id: "1",
  dialogType: "attention",
  buttonContinueText: data.buttonLabels.start,
  buttonClasses: data.startUpInfo.buttonClasses,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(1));
    dispatch(common.ariaLiveText(" "));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartInfo);
