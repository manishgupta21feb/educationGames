import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

const mapState = (state) => {
  return {
    id: "2",
    dialogType: "info",
  };
};

export default connect(mapState)(DialogBox);
