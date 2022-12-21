import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBahai } from '@fortawesome/free-solid-svg-icons';

export default function Post({ title, id }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 500px)').matches) {
      setIsMobile(true);
    }
  }, [isMobile]);

  return (
    <li style={styles.post}>
      <div style={styles.icon}>
        <FontAwesomeIcon icon={faBahai} fontSize={9} />
      </div>
      <div style={styles.title}>Title: {title}</div>
      <div style={styles.id}>ID: {id}</div>
      {!isMobile && <div style={styles.chevron}>{'>'}</div>}
    </li>
  );
}

const styles = {
  post: {
    borderRadius: 10,
    borderStyle: 'solid',
    backgroundColor: 'white',
    listStyleType: 'none',
    padding: 12,
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    left: 2
  },
  title: {
    fontSize: '1.25rem',
    maxWidth: 'calc(50%)'
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
