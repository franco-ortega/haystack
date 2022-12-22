const HIDDEN_COMMENTS = 'HIDDEN_COMMENTS';

function setLocalStorage(KEY, DATA) {
  localStorage.setItem(KEY, JSON.stringify(DATA));
}

function getLocalStorage(KEY) {
  return JSON.parse(localStorage.getItem(KEY)) || {};
}

export function storeHiddenComments(comments) {
  setLocalStorage(HIDDEN_COMMENTS, comments);
}

export function getHiddenComments() {
  return getLocalStorage(HIDDEN_COMMENTS);
}
