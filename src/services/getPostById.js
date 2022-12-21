import hstkFetch from '../hstkFetch';

const apiPosts = process.env.REACT_APP_API_POSTS;

export default async function getPostById(id) {
  return await hstkFetch(`${apiPosts}/${id}`).then((res) => res.json());
}
