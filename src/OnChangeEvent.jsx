import React, { useState } from 'react';

const OnChangeEvent = () => {
    const[data,setData]=useState('');
const handleChange =(e) =>{
  setData(e.target.value)
}
    return (
        <div>
           <input type='text' value={data} onChange={handleChange}/>
           <h3>Input value :{data}</h3>
        </div>
    );
};

export default OnChangeEvent;