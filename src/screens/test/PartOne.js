import PostsList from '../../components/posts/PostsList';
import posts from '../../localPlaceholderData';

export default function PartOne() {
  return (
    <>
      <PostsList posts={posts} />
    </>
  );
}
