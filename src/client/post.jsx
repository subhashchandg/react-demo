import React from 'React';
import './post.scss';
export default ({ post, deletePost }) => {
  return (
    <div className="card" onClick={() => deletePost(post.id)}>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};
