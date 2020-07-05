import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router';

import Home from '../application/Home';
import Recommend from '../application/Recommond';
import Singers from '../application/Singers';
import Rank from '../application/Singers';


const routes: RouteConfig[] = [{
    path: '/',
    component: Home,
    routes: [{
        path: '/',
        exact: true,
        render: () => {
            return <Redirect to={"/recommend"} />
        }
    }, {
        path: '/recommend',
        component: Recommend,
    }, {
        path: '/singers',
        component: Singers,
    }, {
        path: '/rank',
        component: Rank,
    }]
}]

export default routes;