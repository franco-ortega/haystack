export default function Comment({ email, body }) {
  return (
    <li style={styles.comment}>
      <div style={styles.body}>{body}</div>
      <div style={styles.email}>by {email}</div>
    </li>
  );
}

const styles = {
  comment: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: '.15rem',
    maxWidth: '35rem',
    marginInline: 'auto',
    padding: 5,
    listStyleType: 'none'
  },
  body: {
    fontSize: '1.25rem'
  },
  email: {
    marginTop: '0.5rem',
    fontSize: '1rem'
  }
};
