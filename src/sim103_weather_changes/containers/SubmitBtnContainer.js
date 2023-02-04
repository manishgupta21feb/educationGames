import {connect} from "react-redux";
import Button from "../../app/components/Button";
import { common, thunks } from "../actions";
import data from "../data";

const mapStateToProps =(state) =>{
    return{
     text:data.buttonLabels.submitAnswer,
     classes:"primary submit",
     isPopupActive:!!state.currentPopup.length,
     disabled:state.currentPopup.length ||state.submitAnswer||  state.getValueDropdown.value == null 
    }
}

const mapDispatchToProps=(dispatch) =>({
    onClick:() =>{
        dispatch(thunks.checkForDropDown())
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Button)