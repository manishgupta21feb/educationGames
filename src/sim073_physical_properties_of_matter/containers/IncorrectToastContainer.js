import { connect } from "react-redux";
import Toast from "../../app/components/Toast";
import data from "../data";
import { common } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  const selectItemText = data.items.find((a) => a.id == state.selectedItem);

  return {
    showStatic: state.showStatic,
    id: "ts1",
    toastType: "attention",
    content:
      selectItemText &&
      data.textA +
        " " +
        selectItemText.text.toLowerCase() +
        " " +
        data.wrongMsg,
    iconOnly: true,
    buttonText: data.buttonClose,
  };
};
const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(Toast);
