import { connect } from "react-redux";
import BottomStatic from "../components/BottomSection/BottomStatic.js";

import data from "../data/index";

const mapState = (state) => ({
    screenText: state.screenText,
    data: data.nonInvestigatingData[state.nonInvestigatingId]
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(BottomStatic);