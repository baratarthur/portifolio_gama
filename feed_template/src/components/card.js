import React from 'react';

const Card = ({ title, body }) => <>
    <div className="card" > 
        <h3>{title}</h3>
        <span>{body}</span>
    </div>
</>

export default Card;