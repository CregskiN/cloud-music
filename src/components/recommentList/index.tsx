import React from 'react';
import LazyLoad from 'react-lazyload';
import {
    ListWrapper,
    ListItem,
    List
} from './style';
import { getCount } from '../../utils';

export interface RecommendListItem {
    id: number;
    picUrl: string;
    playCount: number;
    name: string;
}

interface RecommendListProps {
    recommendList: RecommendListItem[]
};

const RecommendList: React.FC<RecommendListProps> = (props) => {
    console.log('component RecommendList render ...');
    const {
        recommendList
    } = props;

    return (
        <ListWrapper>
            <h1 className="title">推荐歌单</h1>
            <List>
                {
                    recommendList.map((item, index) => (
                        <ListItem key={Date.now() + index}>
                            <div className="img_wrapper">
                                <div className="decorate"></div>
                                {/* 加此参数可以减小请求的图片资源大小 */}
                                <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music" />}>
                                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
                                </LazyLoad>
                                <div className="play_count">
                                    <i className="iconfont play">&#xe885;</i>
                                    <span className="count">{getCount(item.playCount)}</span>
                                </div>
                            </div>
                            <div className="desc">{item.name}</div>
                        </ListItem>
                    ))
                }
            </List>
        </ListWrapper>
    )
}

export default React.memo(RecommendList);