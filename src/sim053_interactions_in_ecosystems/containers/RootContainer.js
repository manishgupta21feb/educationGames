import Root from "../components";
import { connect } from "react-redux";

import data from "../data";

const mapState = (state) => ({
    sounds: data.sounds,
});

export default connect(mapState)(Root);
