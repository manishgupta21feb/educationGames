import { connect } from "react-redux";
import { isContinuePressed,toggleScreen,resetHotspotOneSelected,common} from "../actions";
import BottomArea from "../components/Screens/TopBottom/BottomArea/BottomArea";
import data from "../data";


const mapState =(state) =>{
    return{
      introduction:data.Screen1.introductionHeading,
      selectedHotspot: state.selectedHotspot,
      visitedHotspot:state.visitedHotspot,
      isPopupActive: !!state.currentPopup.length,
      btnClasses:"next-btn toast-secondary-button positive right-arrow",
      btnText:data.buttonLabels.continue,
      btnNext:data.buttonLabels.next,
      isContinuePressed:state.hotSpotContinue,
      moveToAnimation:state.toggleScreen,
    }
}


const mapDispatch =(dispatch)=>({
  continueClick:()=>{
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(isContinuePressed(false));
    dispatch(resetHotspotOneSelected());
    dispatch(common.setResetFocusState(true));
    // console.log("In bottom comtinue add an action which dispatch an action an to active other hotspot")
  },
  toggleScreen:()=>{
    dispatch(toggleScreen(true));
    dispatch(common.setResetFocusState(true));
  }
})

export default connect(mapState,mapDispatch) (BottomArea)