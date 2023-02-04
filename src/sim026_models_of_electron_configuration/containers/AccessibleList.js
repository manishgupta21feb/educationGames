import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";

const mapState = (state) => ({
  opened: true,
});

const matchDispatch = (dispatch) => ({
  closeList: () => {},
});

export default connect(mapState, matchDispatch)(AccessibleList);
