import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Top } from './style';

interface HomeProps extends RouteConfigComponentProps {

};

const Home: React.FunctionComponent<HomeProps> = (props) => {
    const {
        route
    } = props;

    console.log('component Home render ...');

    return (
        <div>
            <Top>
                <span className="iconfont menu">&#xe65c;</span>
                <span className="title">WebApp</span>
                <span className="iconfont search">&#xe62b;</span>
            </Top>
            {
                renderRoutes(route?.routes)
            }
        </div>
    )
}

export default Home;