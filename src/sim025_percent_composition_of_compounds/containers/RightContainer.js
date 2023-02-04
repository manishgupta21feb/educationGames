import { connect } from "react-redux";
import Right from "../components/mainActivity/Right";
import { common, setButtonShow } from "../actions";
import EventManager from "../../app/events/manager";
import data from "../data";

const mapState = (state) => ({
  viewType: state.viewType,
  elementData: state.elementData,
  itemsDetail: state.itemsDetail,
  heading: data.rightSectionHeading,
  infoTableCommonText: data.infoTableCommonText,
  showHelpPopup: data.helpInfoMessagge,
  id: "Info",
  dialogType: "attention",
  buttonContinueText: data.buttonLabels.close,
  buttonContinueLabel: data.buttonLabels.close,
  percent: data.draggablesBurger.info,
  setButtonShow: state.setButtonShow,
  isPopupActive: !!state.currentPopup.length,
  helpText: data.helpText,
  showText: data.showText,
});
const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("SCREEN_TEXT");
    dispatch(common.togglePopup(2));
  },
  onClick2: () => {
    dispatch(setButtonShow(true));
  },
  onClick3: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("SCREEN_TEXT");
    dispatch(common.togglePopup(6));
  },

  ariaLiveText: (Item, val) => {
    dispatch(
      common.ariaLiveText(
        data.onShowLiveText.replace("-1-", Item).replace("-2-", val)
      )
    );
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, matchDispatch)(Right);
