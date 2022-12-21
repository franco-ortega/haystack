import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Layout from '../../components/layout/Layout';
import Loading from '../../components/loading/Loading';
import PostsList from '../../components/posts/PostsList';
import Search from '../../components/search/Search';
import getPosts from '../../services/getPosts';

export default function PartThree() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Header text='Posts' />
      {posts.length && <Search setSearchTerm={setSearchTerm} />}
      {loading ? (
        <Loading />
      ) : filteredPosts.length ? (
        <PostsList posts={filteredPosts} />
      ) : (
        <div style={styles.noResults}>No Results</div>
      )}
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
  },
  noResults: {
    color: '#FFF',
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '1rem'
  }
};
