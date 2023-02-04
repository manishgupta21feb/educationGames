import Activity from '../components/activity';
import { connect } from 'react-redux';
import data from '../data';

import { common } from '../actions';

const mapState = (state) => {
	return {
		isPopupActive: !!state.currentPopup.length,
		data,
		activityChange: state.activityChange,
	};
};

const mapDispatch = (dispatch) => ({
	onInit: () => {
		dispatch(common.togglePopup(1));
	},
});

export default connect(mapState, mapDispatch)(Activity);
