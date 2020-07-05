import React from 'react';

interface SingersProps {};

const Singers: React.FC<SingersProps> = (props) => {

    console.log('component Singers render ...');

    return (
    <div>
        Component Singers
    </div>
    )
}

export default Singers;