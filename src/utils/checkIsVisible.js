export default function checkIsVisible(commentList, comment) {
  return !commentList[comment.postId]?.includes(comment.id);
}
