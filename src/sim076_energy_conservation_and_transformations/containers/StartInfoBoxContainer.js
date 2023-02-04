import { connect } from "react-redux";
import StartInfo from "../../app/components/DialogBox";
import data from "../data";
import { common,startActivity } from "../actions/index";

const mapStateToProps = (state) => ({
  id: "1",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonLabels.start,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(startActivity(true));
    dispatch(common.togglePopup(1));
    dispatch(common.ariaLiveText(" "));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartInfo);
