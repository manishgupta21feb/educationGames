import { connect } from "react-redux";
import data from "../data";
import { common } from "../actions";
import DialogBox from "../../app/components/DialogBox";

const mapStateToProps = (state) => ({
  id: "teInfoBox",
  header: "",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonLabels.start,
  buttonContinueLabel: data.buttonLabels.start,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
    dispatch(common.ariaLiveText(" "));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
