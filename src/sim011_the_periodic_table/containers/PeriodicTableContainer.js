import { connect } from "react-redux";
import PeriodicTable from "../../app/components/PeriodicTable";

const mapStateToProps = (state) => {
  return {
    tableData: state.periodicTableCellAriaLabel,
  };
};

export default connect(mapStateToProps)(PeriodicTable);
