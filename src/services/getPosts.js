import hstkFetch from '../hstkFetch';

const apiPosts = process.env.REACT_APP_API_POSTS;

export default async function getPosts() {
  return await hstkFetch(apiPosts).then((res) => res.json());
}
