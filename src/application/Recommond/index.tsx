import React from 'react';

interface RecommondProps {};

const Recommond: React.FC<RecommondProps> = (props) => {

    console.log('component Recommond render ...');

    return (
    <div>
        Component Recommond
    </div>
    )
}

export default Recommond;