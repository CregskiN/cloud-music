import React, { memo } from 'react';
import { Top, Tab, TabItem } from './style';
import { NavLink } from 'react-router-dom';

interface HomeProps {

};

const Home: React.FunctionComponent<HomeProps> = (props) => {

    console.log('component Home render ...');

    return (
        <div>
            <Top>
                <span className="iconfont menu">&#xe65c;</span>
                <span className="title">Cloud Music</span>
                <span className="iconfont search">&#xe62b;</span>
            </Top>
            <Tab>
                <NavLink to="/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
                <NavLink to="/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
                <NavLink to="/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
            </Tab>
            
        </div>
    )
}

export default memo(Home);