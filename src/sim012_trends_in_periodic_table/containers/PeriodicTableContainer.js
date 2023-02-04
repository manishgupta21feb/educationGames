import { connect } from "react-redux";
import PeriodicTable from "../../app/components/PeriodicTable";

const mapStateToProps = () => ({
  periodicTableColor: "noColorNoText",
});

export default connect(mapStateToProps)(PeriodicTable);
