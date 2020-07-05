import React from 'react';

interface RankProps {};

const Rank: React.FC<RankProps> = (props) => {

    console.log('component Rank render ...');

    return (
    <div>
        Component Rank
    </div>
    )
}

export default Rank;