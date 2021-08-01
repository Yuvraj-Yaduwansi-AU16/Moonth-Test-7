import { PATHS } from '../config';
import User from '../components/User';
import Posts from '../components/Posts';
import PostDetail from '../components/PostDetail';

const routes = [
  { exact: true, path: PATHS.HOME, component: User },
  { exact: true, path: PATHS.POSTS, component: Posts },
  { exact: true, path: PATHS.POST_DETAIL, component: PostDetail },
];

export default routes;
