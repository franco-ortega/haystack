import { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import PostsList from '../../components/posts/PostsList';
import getPosts from '../../services/getPosts';

export default function PartTwo() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return (
    <Layout>
      <header style={styles.header}>
        <h1>Posts</h1>
        <div style={styles.underline} />
      </header>
      <PostsList posts={posts} />
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
