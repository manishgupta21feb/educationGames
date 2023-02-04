import { connect } from "react-redux";
import PopupHOC from "../../app/components/Popup";
import { common } from "../actions";

const mapStateToProps = (state) => {
    return {
        currentPopup: state.currentPopup,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        togglePopup: (id) => {
            dispatch(common.togglePopup(id));
        },
    };
};

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(PopupHOC);

export default PopupContainer;
