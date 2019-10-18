import React from 'react';
import { Link } from 'react-router-dom';

const Feed = ({ posts }) =>{
    const post0 = posts[0];
    posts.push(posts.shift());
    console.log('posts',posts)
    return (
        <div className='feed-container' >
            <Link id="first" to={`/${post0.friendlyUrl}`} className="card row hide-on-small-only" key={-1} >
                <div className="card-image">
                    {/* <Link to={`/`} className="card"><button className="btn-floating btn-large waves-effect waves-light red feed-button">left</button></Link> */}
                    <img src={post0.img} />
                    <span className="card-title" style={{fontSize:'1.5rem', fontWeight: 'bold'}}>
                        {post0.titulo}
                    </span>
                </div>
            </Link>
            <Link to={`/`} className="hide-on-small-only feed-nav-button"><img className="responsive-img" src={require('../assets/arrow-right.png')}/></Link>
            <div className="row feed-container">
                {posts.map((post, index) => 
                    <Link to={`/${post.friendlyUrl}`} className="card" key={index} >
                        {
                            post.img?
                            <div className="card-image">
                                <img src={post.img} />
                                <span className="card-title" style={{fontSize:'1rem', fontWeight: 'bold'}}>
                                    {post.titulo}
                                </span>
                            </div>
                            :
                            <div className="card-title">
                                {post.titulo}
                                <hr/>
                            </div>
                        }
                    </Link>
                )}
            </div>
        </div>
    );
} 

export default Feed;