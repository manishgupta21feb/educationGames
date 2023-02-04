import { connect } from "react-redux";
import StrandTable from '../components/activity/LeftRightScreen/RightSection/StrandTable';
import data from '../data';

const mapState = (state) => ({
  screen6TableData: data.screen6TableData,
  screen6TableHeadings: data.screen6TableHeadings,
  tableColSequence: data.tableColSequence
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(StrandTable);
