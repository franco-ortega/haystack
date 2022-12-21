export default function Comment({ email, body }) {
  return (
    <li style={styles.comment}>
      <div style={styles.email}>{email}</div>
      <div style={styles.body}>{body}</div>
    </li>
  );
}

const styles = {
  comment: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    maxWidth: '75%',
    marginInline: 'auto',
    marginTop: '1.5rem',
    padding: 12
  },
  email: {
    fontSize: '1.5rem'
  },
  body: {
    marginTop: '1rem',
    fontSize: '1.25rem'
  }
};
