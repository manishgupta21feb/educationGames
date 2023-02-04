import { connect } from "react-redux";
import Direction from "../components/Screens/TopBottom/HotspotArea/Direction";
import data from "../data";


const mapState = (state) => {
    return {
        forceDirections:data.forceDirections,
    }
}
const mapDispatch=(dispatch)=>({

})

export default connect(mapState,mapDispatch)(Direction)