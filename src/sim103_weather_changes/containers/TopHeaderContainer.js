import {connect} from "react-redux"
import TopHeader from "../components/ActivityArea/TopHeader"
import { common, thunks } from "../actions";
import data from "../data";
const mapState =(state)=>({
  visibleButtons:state.getDays,
  isPopupActive: !!state.currentPopup.length,
  selectedDay:state.getSelectedDay,
  seasonsSequence:state.seasonsSequence[0],
  selectedDraggable:state.selectedDraggable,
})
const mapDispatch =(dispatch)=>({
   clickDay:(id,index)=>{
     dispatch(thunks.selectDay(id,index))
   }
})

export default connect(mapState,mapDispatch)(TopHeader)