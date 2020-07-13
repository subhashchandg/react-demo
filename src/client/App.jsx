import React, { Fragment, useState, useEffect } from 'react';
import Post from './post';

const App = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter((el) => el.id !== id));
  };
  return (
    <Fragment>
      <h1>Hello World!!!!</h1>
      {posts.map((el) => (
        <Fragment>
          <Post post={el} deletePost={deletePost} />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default App;
