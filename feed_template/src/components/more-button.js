import React from 'react';

const MaisButton = ({ trigger, howMany }) => <button className="more btn" onClick={() => trigger(howMany)} >+</button>

export default MaisButton;
