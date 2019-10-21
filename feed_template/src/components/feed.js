import React, { useState } from 'react';
import Card from './card';
import MaisButton from './more-button';
import ScrollButton from './scroll-button';

const Feed = ({ posts }) => {

    const [final, setFinal] = useState(3);

    return <div className="feed" > 
        {posts.slice(0,final).map(post => <Card title={post.title} body={post.body} key={post.id} />)}
        <MaisButton trigger={setFinal} howMany={final+3} />
        <ScrollButton  />
    </div>
}

export default Feed;