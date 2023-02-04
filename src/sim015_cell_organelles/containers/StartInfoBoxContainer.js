import { connect } from "react-redux";
import { thunk } from "../actions";
import StartInfo from "../../app/components/DialogBox";
import data from "../data";
const mapStateToProps = (state) => ({
  id: "1",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.StartUpInfo.buttonContinueText,
  buttonContinueLabel: data.StartUpInfo.buttonContinueLabel,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(thunk.startUpInfo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartInfo);
