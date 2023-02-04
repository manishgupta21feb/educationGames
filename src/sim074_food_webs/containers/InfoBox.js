import { connect } from "react-redux";
import { common } from "../actions";
import DialogBox from "../../app/components/DialogBox";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  id: 'infoDialogPT',
  dialogType: "attention",
  header: '',
  buttonContinueText: data.buttonClose,
  buttonContinueLabel: data.buttonClose,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
