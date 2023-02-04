import { connect } from "react-redux";
import PeriodicTable from "../../app/components/PeriodicTable";

const mapStateToProps = () => ({
  periodicTableColor: "colorByCategory",
  groupBy: "true",
});

export default connect(mapStateToProps)(PeriodicTable);
