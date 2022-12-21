export default function Header({ text }) {
  return (
    <header style={styles.header}>
      <h1>{text}</h1>
      <div style={styles.underline} />
    </header>
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
