import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import urns from './urns';

const rootReducer = combineReducers({urns, routing: routerReducer});

export default rootReducer;