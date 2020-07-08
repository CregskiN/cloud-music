import React from 'react';
import {
    LoadingWrapper
} from './style';

interface LoadingProps { };

const Loading: React.FC<LoadingProps> = (props) => {

    console.log('component Loading render ...');

    return (
        <LoadingWrapper>
            <div></div>
            <div></div>
        </LoadingWrapper>
    )
}

export default React.memo(Loading);