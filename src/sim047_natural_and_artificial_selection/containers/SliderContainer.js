import { connect } from "react-redux";
import Slider from "../../app/components/Slider";
import data from "../data";
import { common, thunks } from "../actions";
const mapState = (state) => {
  const screenDataList=state.selectedTab==0?data.slider0.listitems:data.slider1.listitems;
  const screenAriaValue=state.selectedTab==0?data.valuetextArray0:data.valuetextArray1;
  const sliderMaxValue=state.selectedTab==0?5:4;
  //console.log("SelectedTimeline-----",screenDataList.filter(s=>s.value==state.selectedTimeline))
return {
  min: 0,
  step: 1,
  max: sliderMaxValue,
  datalist: screenDataList,
  value: state.selectedTimeline,
  orientation: "horizontal",
  //title:screenDataList.filter(s=>s.value==state.selectedTimeline)[0].label,
  title: data.sliderLabel,
  disabled: !!state.currentPopup.length,
  ariaValueText:screenAriaValue,
  datalistClasses:"sliderClasses show-label-only",
  isPopupActive:!!state.currentPopup.length
}
};

const mapDispatch = (dispatch) => ({
  onChange: (value) => {
    if (value !== undefined) {
      //console.log("value",value)
      dispatch(thunks.updateTimeline(value))
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(common.updateResetBtnState(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Slider);
