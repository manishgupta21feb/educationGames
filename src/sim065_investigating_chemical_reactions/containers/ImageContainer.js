import { connect } from "react-redux";
import Image from "../components/activity/Image";

import data from "../data";

const mapState = (state) => {
  return {
    imageText: data.imageAlt,
    equipmentdata: data.equationOptions,
  };
};

export default connect(mapState)(Image);
