import { connect } from "react-redux";
import Counter from "../../app/components/Counter";
import data from "../data";

const mapState = (state) => ({
  min: 1,
  max: 9,
  titleIncrement: data.increment,
  titleDecrement: data.decrement,
  isPopupActive: !!state.currentPopup.length,
});

export default connect(mapState)(Counter);
