import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { getposts, setSelectedPost } from '../../actions';
import { PATHS } from '../../config';

const Posts = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getposts());
    // eslint-disable-next-line
  }, []);
  const getDetails = (post) => {
    dispatch(setSelectedPost(post));
    props.history.push(`${PATHS.POSTS}/${post.id}`);
  };
  return (
    <main className="posts m-auto align-items-center">
      <h1 className="text-warning mx-5">Posts Title : </h1>
      <div className="post-container m-auto">
        <div className="post-list">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="post-list-item"
                onClick={() => getDetails(post)}
              >
                <h4 className="text-white">{post.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Posts;
