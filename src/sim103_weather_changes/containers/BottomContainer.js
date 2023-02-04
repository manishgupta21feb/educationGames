import {connect} from "react-redux"
import Bottom from "../components/ActivityArea/Bottom"
import { common ,thunks} from "../actions";
import data from "../data";
const mapState =(state)=>({
  isPopupActive: !!state.currentPopup.length,
  selectedDay:state.getSelectedDay,
  seasonsSequence:state.seasonsSequence[0],
  accessibleListVisible:state.accessibleListVisible && !!state.getSelectedDay,
  selectedDraggable:state.selectedDraggable
})
const mapDispatch =(dispatch)=>({
  onDrop:(source)=> dispatch(thunks.checkDroppedItem({...source}))

})

export default connect(mapState,mapDispatch)(Bottom)