import { connect } from "react-redux";
import TopStatic from "../components/TopSection/TopStatic";

import data from "../data";

const mapState = (state) => ({
  question: data.mcqData,
  selectedHotspot: state.selectedHotspot,
  videoComp: state.videoComp,
});

export default connect(mapState)(TopStatic);
