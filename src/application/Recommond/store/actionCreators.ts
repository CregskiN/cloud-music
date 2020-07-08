import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { recommendAPI } from '../../../api';
import { Dispatch } from 'redux';

export const generateChangeBannerListAction = (data: any) => {
    // console.log(data);
    return {
        type: actionTypes.CHANGE_BANNER,
        payload: fromJS(data)
    }
}

/**
 * 
 * @param data 
 */
export const generateChangeRecommendListAction = (data: any) => {
    // console.log(data);
    return {
        type: actionTypes.CHANGE_RECOMMEND_LIST,
        payload: fromJS(data)
    }
}

/**
 * 生成改变loading状态的action
 * @param data 
 */
export const generateChangeEnterLoadingAction = (data: any) => {
    return {
        type: actionTypes.CHANGE_ENTER_LOADING,
        payload: fromJS(data)
    }
}

/**
 * 异步获取 + dispatch banner数据
 */
export const getBannerList = () => {
    return (dispatch: Dispatch) => {
        recommendAPI.getBannerRequest().then(data => {
            // console.log(data);
            dispatch(generateChangeBannerListAction(data.data.banners));
        })
    }
}

/**
 * 获取推荐歌单列表
 */
export const getRecommendList = () => {
    return (dispatch: Dispatch) => {
        recommendAPI.getRecommentListRequest().then(data => {
            // console.log(data);
            dispatch(generateChangeRecommendListAction(data.data.result));
            dispatch(generateChangeEnterLoadingAction(false));
        })
    }
}





