import React, { useState, useEffect } from 'react';

import { Feed, Header } from './components';
import { apiPosts } from './services';

function App() {

  const [posts, setPosts] = useState([]);

  async function fetchData () {
    try{
      const response = await apiPosts.get('posts');
      setPosts(response.data);
    }catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
