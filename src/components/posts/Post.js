export default function Post({ title, id }) {
  return (
    <li style={styles.post}>
      <div style={styles.title}>Title: {title}</div>
      <div style={styles.id}>ID: {id}</div>
    </li>
  );
}

const styles = {
  post: {
    borderRadius: 10,
    borderStyle: 'solid',
    backgroundColor: 'white',
    listStyleType: 'none'
  },
  title: {
    fontSize: '1.25rem'
  },
  id: {
    fontSize: '1.1rem',
    marginTop: '.25rem'
  }
};
