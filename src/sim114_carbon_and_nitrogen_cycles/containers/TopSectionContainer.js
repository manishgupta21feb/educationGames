import { connect } from "react-redux";
import TopSection from '../components/activity/TopBottomScreen/TopSection';
import data from '../data';

const mapState = (state) => {

  const { screenStatus } = state;

  const {
    carbonInfoData,
    photosynthesisData,
    respirationData,
    carbonDioxideInfoData,
    fossilFuelsData,
    oceanData,
    climateData,
    nitrogenInfoData,
    nitrogenFixationData,
    nitrogenNDData,
    carbonNitrogenData
  } = data;

  const getTopData = () => {
    switch (screenStatus) {
      case 'carbon-info': {
        return carbonInfoData;
      }
      case 'photosynthesis': {
        return photosynthesisData;
      }
      case 'respiration': {
        return respirationData;
      }
      case 'carbonDioxide-info': {
        return carbonDioxideInfoData;
      }
      case 'ocean': {
        return oceanData;
      }
      case 'fossil-fuels': {
        return fossilFuelsData;
      }
      case 'climate': {
        return climateData
      }
      case 'nitrogen-info': {
        return nitrogenInfoData;
      }
      case 'nitrogen-fixation': {
        return nitrogenFixationData;
      }
      case 'nitrogen-ND': {
        return nitrogenNDData;
      }
      case 'carbon-and-nitrogen': {
        return carbonNitrogenData
      }
    }
  }

  return {
    screenTopdata: getTopData(),
  }
}

export default connect(mapState, null)(TopSection);
