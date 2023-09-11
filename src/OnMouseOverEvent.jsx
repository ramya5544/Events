import React, { useState } from 'react';

const OnMouseOver = () => {
    const[dataColor,setDataColor]=useState(false)
    const divStyle = {
        color:dataColor ?'blue':'red'
    }
    const handleMouseOver = () =>{
        setDataColor(true)
    } 
    const handleMouseOut = () =>{
        setDataColor(false)
    }
    return (
        <div style={divStyle} onMouseOver={handleMouseOver} omMouseOut={handleMouseOut} >
             <p>this is a animal</p> 
            
        </div>
    );
};

export default OnMouseOver;