import { connect } from "react-redux";
import MCQArea from "../../app/components/MCQArea";
import data from "../data";

const mapState = (state) => ({
  buttonText: "",
  question: data.mcqQuestion,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {},
});

export default connect(mapState, mapDispatch)(MCQArea);
