import { connect } from "react-redux";
import { toggelGenotype, setShowGenoList } from "../actions/activity";
import GenotypeHeaderButton from "../components/GenotypeHeaderButton";

const mapState = (state) => ({
  showGenotype: state.showGenotype,
  currentPopup: state.currentPopup,
  crossedFlowers: state.crossedFlowers,
  isPopupActive: !!state.currentPopup.length,
  buttonGenotypeText: state.appData.labels.genotype,
  buttonGenotypeLabel: state.appData.labels.genotype,
});
const matchDispatch = (dispatch) => ({
  OnGenotypeClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(toggelGenotype());
  },
  setShowGenoList: (value) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setShowGenoList(value));
  },
});

export default connect(mapState, matchDispatch)(GenotypeHeaderButton);
