import { connect } from "react-redux";
import Toast from '../../app/components/Toast';
import data from '../data';
import { common } from '../actions';

const mapState = (state) => ({
  id: 'ts2',
  toastType: 'positive',
  iconOnly: true,
  content: data.correctToastMsg,
  buttonText: data.buttonLabels.close,
  buttonLabel: data.buttonLabels.close
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
  },
  onAutoHide: () => {
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(Toast);
