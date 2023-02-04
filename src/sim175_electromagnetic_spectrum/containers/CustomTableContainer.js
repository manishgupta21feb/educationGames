import { connect } from "react-redux";
import CustomTable from "../components/Fullview/CustomTable";
import { thunks, common, togglePopup } from "../actions";

import data from "../data";

const mapStateToProps = (state) => {
  return {
    tableRow: data.tableTdData,
    caption: data.globalUsedText.tableCaption,
    popuphead1: data.popuphead1,
    popuphead2: data.popuphead2,
    popuphead3: data.popuphead3,
  };
};
const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(5));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapStateToProps, mapDispatch)(CustomTable);
