import data from "../data";
import { connect } from "react-redux";
import Left from "../components/Screens/Screen2/Left";

const mapState = (state) => ({
  screen2labels: data.screen2labels,
  starLifeCyclesCollageImageAlt:data.starLifeCyclesCollageImageAlt,
});

export default connect(mapState)(Left);
