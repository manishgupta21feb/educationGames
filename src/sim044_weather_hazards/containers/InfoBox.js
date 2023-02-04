import { connect } from "react-redux";
import data from "../data";
import InfoBox from "../../app/components/DialogBox";
import { togglePopup } from "../actions/index";

const mapState = (state) => ({
  id: "db4",
  dialogType: "attention",
  content: data.infoContent,
  buttonContinueText: data.buttonClose,
  buttonContinueLabel: data.buttonClose,
});

const matchDispatch = (dispatch) => ({
  onClick: () => dispatch(togglePopup(3)),
});

export default connect(mapState, matchDispatch)(InfoBox);
