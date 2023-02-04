import {connect} from "react-redux";
import HotspotImagePopup from "../components/Screens/TopBottom/HotspotArea/HotspotPopupImage";
import data from "../data";
const mapState=(state) =>({
    selectedHotspot :state.selectedHotspot,
    hotspots: state.hotspots,

})

const mapDispatch=(dispatch)=>({

})


export default connect(mapState,mapDispatch)(HotspotImagePopup)