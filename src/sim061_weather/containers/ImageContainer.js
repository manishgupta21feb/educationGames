import { connect } from "react-redux";
import ImageArea from "../components/ViewArea/ImageArea/ImageArea";
import data from "../data";

const mapState = (state) => {
  const key = state.cityBackButton.split("")[0];
  const p = data.reading[state.radioButtonValue];

  return {
    bgs: data.bgs,
    readingData: p[key],
    textImage: data.altImageText,
    answer: state.radioButtonValue,

    radioButtons: data.radioButtons,
    reading: data.reading,
    buttonPressed: state.clickedValue,
    buttonClicked: state.cityBackButton,
    measurementTools: data.weatherInstrument,
    isPopupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(ImageArea);
