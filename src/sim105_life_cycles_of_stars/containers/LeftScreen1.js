import { connect } from "react-redux";
import { thunks } from "../actions";
import Left from "../components/Screens/Screen1/Left";

import data from "../data";
import { setNextScreenButton, setDroppedItem } from "../actions";


const mapState = (state) => ({
  screen1leftalt:data.screen1leftalt,
  isPopupActive: !!state.currentPopup.length,
  screenonemainlabel:data.draggables.screenonemainlabel,
  buttonLabels: {
    playVideo: data.playVideo,
    pauseVideo: data.pauseVideo,
  },
  droppedItem: state.droppedItem,
  droppedItems: state.droppedItems,
  currentPopup: state.currentPopup,
  draggables: data.draggables.screen0,
  nextScreenButton: state.nextScreenButton,
  buttonValue: state.nextButtonValue,
});

const matchDispatch = (dispatch) => ({
  onDrop: (dropzone) => {
    dispatch(thunks.onDrop(dropzone));
  },
  setDroppedItem: (id) => {
    dispatch(setDroppedItem(id));
  },
  showNextScreenButton: () => {
    dispatch(setNextScreenButton(true));
  },
});

export default connect(mapState, matchDispatch)(Left);
