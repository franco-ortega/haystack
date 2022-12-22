import React, { useState } from 'react';
import Comment from './Comment';

const HIDDEN_COMMENTS = 'HIDDEN_COMMENTS';

export default function CommentsList({ comments }) {
  const [hiddenComments, setHiddenComments] = useState(() => {
    return JSON.parse(localStorage.getItem(HIDDEN_COMMENTS)) || {};
  });

  console.log(hiddenComments);

  return (
    <ul style={styles.commentsList}>
      <div style={styles.title}>Comments</div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          body={comment.body}
          email={comment.email}
          commentId={comment.id}
          postId={comment.postId}
          hiddenComments={hiddenComments}
          setHiddenComments={setHiddenComments}
        />
      ))}
    </ul>
  );
}

const styles = {
  commentsList: {
    background: '#FFBF00',
    borderRadius: 10,
    marginTop: '2rem',
    marginInline: 'auto',
    padding: '1rem',
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  title: {
    fontSize: '1.5rem',
    textAlign: 'center'
  }
};
