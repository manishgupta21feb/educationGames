import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";

const mapState = (state) => {
  return {
    resetDialog: true,
    id: "resetDialogPT",
    dialogType: "attention",
    resetButtonText: data.buttonLabels.yes,
    buttonContinueText: data.buttonLabels.no,
  };
};

export default connect(mapState)(DialogBox);
