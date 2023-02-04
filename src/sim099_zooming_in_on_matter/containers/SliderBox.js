import SliderBox from "../components/SliderBox";
import { connect } from "react-redux";
import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    sliderTitle: data.sliderTitle,
    nextBtnText: data.buttonLabels.next,
    frames: data.home.frames,
    legendData: data.slider.listitems,
    legendsData:
      state.buttonId == "viewFromSpace"
        ? data.spaceButton[state.getUpdateSlider - 1]
        : data.waterButton[state.getUpdateSlider - 1],
    // legendData: data.slider.listitems.filter((items)) => {
    //   items.value == updateSliderValue
    // },
    value: data.value,
    //----> From Reducer
    buttonShow: state.sliderVisitedValue.length >= data.slider.listitems.length,
    buttonClicked: state.buttonId,
    updateSliderValue: state.getUpdateSlider,
    sliderVisitedValue:
      state.sliderVisitedValue.length == data.slider.listitems.length,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(SliderBox);
