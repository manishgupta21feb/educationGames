import { connect } from "react-redux";
import Toast from "../../app/components/Toast";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  let wrongCount = 0;
  for (const [key, value] of Object.entries(state.getWrongAnswerValue)) {
    if (value) {
      wrongCount = wrongCount + 1;
    }
  }

  return {
    id: "ft1",
    iconOnly: true,
    toastType: "warning",
    content:
      wrongCount == 4 ? data.allPopupMsg[2].wrong : data.allPopupMsg[1].partial,
    buttonLabel: data.buttonLabels.close,
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
