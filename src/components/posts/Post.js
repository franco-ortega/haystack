import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBahai } from '@fortawesome/free-solid-svg-icons';

export default function Post({ title, id }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 500px)').matches) {
      setIsMobile(true);
    }
  }, []);

  return (
    <li style={styles.post}>
      <div style={styles.icon}>
        <FontAwesomeIcon icon={faBahai} color={'#FFBF00'} />
      </div>
      <div style={styles.text}>
        <div style={styles.title}>Title: {title}</div>
        <div style={styles.id}>ID: {id}</div>
      </div>
      {!isMobile && <div style={styles.chevron}>{'>'}</div>}
    </li>
  );
}

const styles = {
  post: {
    borderRadius: 10,
    backgroundColor: 'white',
    listStyleType: 'none',
    padding: 12,
    position: 'relative',
    display: 'flex'
  },
  icon: {
    paddingTop: '0.1rem'
  },
  text: {
    maxWidth: '50%'
  },
  title: {
    fontSize: '1.25rem'
  },
  id: {
    fontSize: '1.1rem',
    marginTop: '.25rem'
  },
  chevron: {
    color: '#FFBF00',
    fontSize: '1.25rem',
    position: 'absolute',
    top: 10,
    right: 10
  }
};
