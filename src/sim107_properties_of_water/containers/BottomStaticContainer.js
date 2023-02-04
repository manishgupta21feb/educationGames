import { connect } from "react-redux";
import BottomStatic from "../components/BottomSection/BottomStatic";

import data from "../data";

const mapState = (state) => ({
  mainScreenHeading: data.mainScreenHeading,
});

export default connect(mapState)(BottomStatic);
