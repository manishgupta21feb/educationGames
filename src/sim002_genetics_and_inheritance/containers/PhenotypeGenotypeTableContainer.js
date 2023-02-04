import { connect } from "react-redux";
import PhenotypeGenotypeTable from "../components/PhenotypeGenotypeTable";

import data from "../data";

const mapState = (state) => ({
  table: data.phenotypeGenotypeTable,
});

export default connect(mapState)(PhenotypeGenotypeTable);
