import { getHiddenComments } from '../../utils/localStorage';
import checkIsVisible from '../../utils/checkIsVisible';
import Comment from './Comment';

export default function CommentsList({ comments }) {
  const hiddenComments = getHiddenComments();

  return (
    <ul style={styles.commentsList}>
      <div style={styles.title}>Comments</div>
      {comments
        .filter((comment) => checkIsVisible(hiddenComments, comment))
        .map((comment) => (
          <Comment
            key={comment.id}
            body={comment.body}
            email={comment.email}
            commentId={comment.id}
            postId={comment.postId}
            hiddenComments={hiddenComments}
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
