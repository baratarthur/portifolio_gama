import React from 'react';

const ScrollButton = () => <button className="up btn" onClick={()=>{
    window.scrollTo(0,0);
}} >⬆</button>

export default ScrollButton;