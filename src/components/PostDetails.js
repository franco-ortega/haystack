import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getComments from '../services/getComments';
import getPostById from '../services/getPostById';
import CommentsList from './comments/CommentsList';
import Header from './header/Header';
import Loading from './loading/Loading';

export default function PostDetails() {
  const [postDetails, setPostDetails] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPostById(id).then((res) => setPostDetails(res));
    getComments(id).then((res) => setComments(res));
  }, [id]);

  return (
    <>
      <Header text={`Post #${id}`} />
      {!postDetails ? (
        <Loading />
      ) : (
        <div style={styles.postDetails}>
          <div style={styles.title}>{postDetails.title}</div>
          <div style={styles.body}>{postDetails.body}</div>
          {comments && <CommentsList comments={comments} />}
        </div>
      )}
    </>
  );
}

const styles = {
  postDetails: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: 'clamp(15rem, 75%, 50rem)',
    marginInline: 'auto',
    // marginTop: '1.5rem',
    padding: 'clamp(12px, 2%, 2rem)',
    overflow: 'auto',
    position: 'fixed',
    left: 0,
    right: 0,
    top: '10rem',
    bottom: '1rem'
  },
  title: {
    fontSize: '1.5rem'
  },
  body: {
    marginTop: '1rem',
    fontSize: '1.25rem'
  }
};
