import ClickablePost from './ClickablePost';

export default function ClickablePostsList({ posts }) {
  return (
    <ul style={styles.postsList}>
      {posts.map((post) => (
        <ClickablePost key={post.id} title={post.title} id={post.id} />
      ))}
    </ul>
  );
}

const styles = {
  postsList: {
    marginInline: 'auto',
    paddingBlock: '1rem',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }
};
