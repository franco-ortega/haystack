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
    paddingBlock: '1rem',
    paddingInline: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }
};
