import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";


const mapState = (state) => {
    return ({
        id: "2",
        dialogType: "info",
    })
}

const mapDispatch = (state) => {
    return ({})
}

export default connect(mapState, mapDispatch)(DialogBox)