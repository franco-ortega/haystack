import Post from './Post';

export default function PostsList({ posts }) {
  return (
    <ul style={styles.postsList}>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} id={post.id} />
      ))}
    </ul>
  );
}

const styles = {
  postsList: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }
};
