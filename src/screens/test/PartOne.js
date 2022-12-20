import Layout from '../../components/layout/Layout';
import PostsList from '../../components/posts/PostsList';
import posts from '../../localPlaceholderData';

export default function PartOne() {
  return (
    <Layout>
      <PostsList posts={posts} />
    </Layout>
  );
}
