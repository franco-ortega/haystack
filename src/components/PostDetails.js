import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPostById from '../services/getPostById';
import Header from './header/Header';
import Loading from './loading/Loading';

export default function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPostById(id).then((res) => setPostDetails(res));
  }, [id]);

  return (
    <>
      <Header text={`Post #${id}`} />
      {!postDetails ? (
        <Loading />
      ) : (
        <div style={styles.post}>
          <div style={styles.title}>{postDetails.title}</div>
          <div style={styles.body}>{postDetails.body}</div>
        </div>
      )}
    </>
  );
}

const styles = {
  post: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    maxWidth: '75%',
    marginInline: 'auto',
    marginTop: '1.5rem',
    padding: 12
  },
  title: {
    fontSize: '1.5rem'
  },
  body: {
    marginTop: '1rem',
    fontSize: '1.25rem'
  }
};
