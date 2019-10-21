import React from 'react';

const Card = ({ icon_url, value }) => <>
    <div className="card" >
        <img src={icon_url} />
        <span>{value}</span>
    </div>
</>;

export default Card;