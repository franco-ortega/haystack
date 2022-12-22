import { useState } from 'react';
import { storeHiddenComments } from '../../utils/localStorage';

export default function Comment({
  body,
  email,
  commentId,
  postId,
  hiddenComments
}) {
  const [hidden, setHidden] = useState(false);

  const onHideCommentClick = () => {
    if (hiddenComments[postId]) hiddenComments[postId].push(commentId);
    else hiddenComments[postId] = [commentId];

    storeHiddenComments(hiddenComments);
    setHidden(true);
  };

  return (
    <>
      {!hidden && (
        <li style={styles.comment}>
          <div style={styles.body}>{body}</div>
          <div style={styles.email}>by {email}</div>
          <button style={styles.button} onClick={onHideCommentClick}>
            Hide Comment
          </button>
        </li>
      )}
    </>
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
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#000',
    color: '#FFF',
    margin: '1rem 0.5rem',
    padding: '0.25rem 0.5rem'
  }
};
