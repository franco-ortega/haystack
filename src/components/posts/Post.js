export default function Post({ title, id }) {
  return (
    <li style={styles.post}>
      <div style={styles.title}>{title}</div>
      <div style={styles.id}>{id}</div>
    </li>
  );
}

const styles = {
  post: {
    borderColor: '#FFBF00',
    borderRadius: 10,
    borderStyle: 'solid',
    backgroundColor: 'white',
    listStyleType: 'none'
  },
  title: {
    fontSize: '1.5rem'
  },
  id: {
    fontSize: '1.25rem'
  }
};
