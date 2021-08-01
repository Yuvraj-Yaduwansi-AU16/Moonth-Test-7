import { useSelector } from 'react-redux';
import { PATHS } from '../../config';
import './index.css';
import { Link } from 'react-router-dom';

const PostDetail = () => {
  const selected_post = useSelector((state) => state.selected_post);

  return (
    <main className="posts">
      <div className="post-details m-auto">
        <div className="post-list-item">
          <h1 className="text-white">
            Title : <span className="text-warning">{selected_post.title}</span>
          </h1>
          <h4 className="my-4">Description</h4>
          <p className="text-white">{selected_post.body}</p>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={PATHS.POSTS}>
            <h1>Back</h1>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PostDetail;
