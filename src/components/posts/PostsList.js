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
    borderColor: '#FFBF00',
    borderRadius: 10,
    borderStyle: 'solid'
  }
};
