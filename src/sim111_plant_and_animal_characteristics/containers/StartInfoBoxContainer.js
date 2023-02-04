import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import StartInfo from "../../app/components/DialogBox";

import data from "../data";
import { common, updateLeftImgAria } from "../actions/index";

const mapStateToProps = (state) => ({
  id: "1",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonLabels.start,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(1));
    dispatch(common.ariaLiveText(" "));
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("SCREEN_TEXT");
    dispatch(updateLeftImgAria(data.treeDroppableImgAria));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartInfo);
