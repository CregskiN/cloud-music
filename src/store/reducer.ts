import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../application/Recommond/store';

const reducers = combineReducers({
    recommend: recommendReducer,

});

export default reducers;