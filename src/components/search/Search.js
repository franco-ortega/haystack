export default function Search({ setSearchTerm }) {
  return (
    <label style={styles.search} htmlFor='search'>
      Search:
      <input
        style={styles.input}
        type='text'
        id='search'
        placeholder='Title'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </label>
  );
}

const styles = {
  search: {
    width: '75%',
    marginInline: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontSize: '1.25rem'
  },
  input: {
    maxWidth: '75%',
    marginLeft: '0.25rem',
    paddingInline: '0.5rem',
    fontSize: '1.25rem'
  }
};
