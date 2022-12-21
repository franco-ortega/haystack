import { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import Loading from '../../components/loading/Loading';
import PostsList from '../../components/posts/PostsList';
import getPosts from '../../services/getPosts';

export default function PartTwo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <header style={styles.header}>
        <h1>Posts</h1>
        <div style={styles.underline} />
      </header>
      {loading ? <Loading /> : <PostsList posts={posts} />}
    </Layout>
  );
}

const styles = {
  header: {
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
    marginBlock: '2rem 1rem'
  },
  underline: {
    borderBottomColor: '#FFBF00',
    width: '75%',
    height: 3,
    backgroundColor: '#FFBF00',
    marginInline: 'auto',
    marginTop: '1rem'
  }
};
