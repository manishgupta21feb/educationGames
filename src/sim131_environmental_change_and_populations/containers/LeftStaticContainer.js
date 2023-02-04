import { connect } from "react-redux";
import LeftStatic from '../components/LeftSection/LeftStatic';
import data from '../data';

const mapState = (state) => ({
  leftStaticAlt: data.leftStaticAlt
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(LeftStatic);
