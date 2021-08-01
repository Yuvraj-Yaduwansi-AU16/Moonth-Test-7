import { Link } from 'react-router-dom';
import { PATHS } from '../../config';
const Layout = ({ children }) => {
  return (
    <>
      <div className="container-flex bg-dark py-2">
        <nav className="d-flex flex-row justify-content-around">
          <Link to={PATHS.HOME}>
            <h1>Users</h1>
          </Link>

          <Link to={PATHS.POSTS}>
            <h1>Posts</h1>
          </Link>
        </nav>
      </div>
      <div className="my-4">{children}</div>
    </>
  );
};

export default Layout;
