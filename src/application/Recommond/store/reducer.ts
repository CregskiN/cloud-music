import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    bannerList: [],
    recommendList: [],
    enterLoading: true,
})

export default (state = defaultState, action: CloudMusic.IAction) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER: {
            return state.set('bannerList', action.payload);
        }
        case actionTypes.CHANGE_RECOMMEND_LIST: {
            return state.set('recommendList', action.payload);
        }
        case actionTypes.CHANGE_ENTER_LOADING: {
            return state.set('enterLoading', action.payload)
        }
        default:
            return state;
    }
}