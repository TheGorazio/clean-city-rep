import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';

import Main from './Main.jsx';

function mapStateToProps(state) {
	return {
		urns: state.urns,
	}
}

function mapDispathToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispathToProps)(Main);

export default App;
