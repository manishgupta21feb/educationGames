import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapStateToProps = (state) => ({
  id: "infoDialogPT",
  dialogType: "attention",
  buttonContinueText: data.header.buttonClose,
  buttonContinueLabel: data.header.buttonClose,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(5));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
