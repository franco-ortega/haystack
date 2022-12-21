import hstkFetch from '../hstkFetch';

const apiPosts = process.env.REACT_APP_API_POSTS;

export default async function getComments(id) {
  return await hstkFetch(`${apiPosts}/${id}/comments`).then((res) =>
    res.json()
  );
}
