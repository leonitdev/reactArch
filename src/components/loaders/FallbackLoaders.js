import React from 'react';
import { Spin } from 'antd';

const FallbackLoader = () => {
    return (
        <div className="h-screen w-full bg-white flex flex-col items-center justify-center">
            <Spin />
        </div>
    );
};

export default FallbackLoader;