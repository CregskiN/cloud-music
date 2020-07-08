import React, { useCallback, useEffect, useMemo } from 'react';
import Slider from '../../components/slider';
import RecommendList from '../../components/recommentList';
import Scroll from '../../components/scroll';
import { useDispatch, useSelector } from 'react-redux';
import { forceCheck } from 'react-lazyload';

import {
    Content
} from './style';
import { getBannerList, getRecommendList } from './store/actionCreators';

import Loading from '../../baseUI/loading';

interface RecommondProps { };

const Recommond: React.FC<RecommondProps> = (props) => {
    console.log('component Recommond render ...');

    const dispatch = useDispatch();
    let bannerList = useSelector<CloudMusic.CloudMusicRootState, CloudMusic.BannerType[]>(state => (state.recommend as any).get('bannerList'));
    let recommendList = useSelector<CloudMusic.CloudMusicRootState, CloudMusic.RecommendType[]>(state => (state.recommend as any).get('recommendList'));
    let enterLoading = useSelector<CloudMusic.CloudMusicRootState, boolean>(state => (state.recommend as any).get('enterLoading'));
    bannerList = useMemo(() => {
        console.log('bannerList.toJS()')
        return (bannerList as any).toJS();
    }, [bannerList]);
    recommendList = useMemo(() => {
        console.log('recommendList.toJS()');
        return (recommendList as any).toJS();
    }, [recommendList]);

    const getBannerDataDispatch = useCallback(() => {
        dispatch(getBannerList());
    }, [dispatch]);

    const getRecommendListDataDispatch = useCallback(() => {
        dispatch(getRecommendList())
    }, [dispatch]);

    useEffect(() => {
        getBannerDataDispatch();
        getRecommendListDataDispatch();
    }, [getBannerDataDispatch, getRecommendListDataDispatch]);


    return (
        <Content>
            <Scroll className="list" onScroll={forceCheck}>
                <div>
                    <Slider bannerList={bannerList}></Slider>
                    <RecommendList recommendList={recommendList}></RecommendList>
                </div>
            </Scroll>
            {enterLoading ? <Loading /> : null}
        </Content>
    )
}

export default Recommond;