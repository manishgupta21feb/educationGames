import {connect} from "react-redux"
import { common,thunks } from "../actions"
import Footer from "../components/ActivityArea/SelectArea/FooterArea"
import data from "../data"
const mapState=(state)=>{
    return{
        isPopupActive:!!state.currentPopup.length,
        data,
        seasonsSequenceLength:state.seasonsSequence.length,
        answerSubmitted:state.answerSubmitted,
        submitAnswer:state.submitAnswer
    }
}

const mapDispatch =(dispatch) =>({
    seasonChange:()=>{
        dispatch(thunks.seasonChange())
      }
})


export default connect(mapState,mapDispatch)(Footer)