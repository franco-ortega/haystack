import React from 'react';
import Comment from './Comment';

export default function CommentsList({ comments }) {
  return (
    <ul style={styles.commentsList}>
      <div style={styles.title}>Comments</div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          body={comment.body}
          email={comment.email}
          id={comment.id}
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
