import React, { useState } from 'react';

const OnClickEvent = () => {
    const[data,setData]=useState(0);
    const handleClick = () =>{
        setData(val=>val+1)
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <h1>{data}</h1>
        </div>
    );
};

export default OnClickEvent;