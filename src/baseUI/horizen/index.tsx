import React from 'react';

interface HorizenItemProps { };

const Horizen: React.FC<HorizenItemProps> = (props) => {

    console.log('component Horizen render ...');

    return (
        <div>
            Component Horizen
        </div>
    )
}

export default Horizen;