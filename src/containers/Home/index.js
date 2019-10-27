import React, { memo } from 'react';

const Home = () => {
    return (
        <div>
            <button onClick={() => alert('Clicked!!')}>Click Me</button>
        </div>
    )
}

export default memo(Home);