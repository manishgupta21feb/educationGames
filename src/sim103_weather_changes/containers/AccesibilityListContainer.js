import { connect } from "react-redux";
import AccessibleList from "../../app/components/AccessibleList";
import { updateAccessibleList, thunks } from "../actions";

const mapState = (state) => {
 const currentDrop= state.getDays.filter((d) =>d.id==state.getSelectedDay)
  return{
  list: currentDrop,
  opened: state.accessibleListVisible,
  classes:"drop_list",
  //selectedItem:state.getSelectedDay
}
};
const matchDispatch = (dispatch) => ({
  onClick: (item) => {
    dispatch(thunks.checkDroppedItem({...item} ));
  },
  closeList: () => {
      dispatch(updateAccessibleList(false));
  },
});

export default connect(mapState, matchDispatch)(AccessibleList);
