import { connect } from "react-redux";
import Button from "../../app/components/Button";
// import Next from "../components/SliderBox/NextButton";
import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  const _class =
    state.sliderVisitedValue.length >= data.slider.listitems.length
      ? " show"
      : " hide";
  const ariaHidden =
    state.sliderVisitedValue.length >= data.slider.listitems.length
      ? false
      : true;
  return {
    disabled: state.sliderVisitedValue.length < data.slider.listitems.length,
    text: state.getIsVisited.length == 1 ? data.finish : data.Next,
    classes:
      state.getIsVisited.length == 1
        ? "toast-secondary-button positive" + _class
        : "right-arrow toast-secondary-button positive" + _class,
    id: state.getScreenId,
    isPopupActive: !!state.currentPopup.length,
    buttonShow: state.sliderVisitedValue.length >= data.slider.listitems.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (e) => {
    dispatch(thunk.onNextClick(e));
  },
});

export default connect(mapState, matchDispatch)(Button);
