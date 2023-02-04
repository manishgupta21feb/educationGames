import Labels from "../components/Labels";
import { connect } from 'react-redux';
import data from '../data';

const mapState = (state) => {
  return{
    //----> From Data
    labels: data.labels,
  };
};

export default connect(mapState)(Labels)

