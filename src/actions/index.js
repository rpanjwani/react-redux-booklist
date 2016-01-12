export function selectBook(book) {
  //this is an action creator which needs to return an action
  return {
    type:'BOOK_SELECTED',
    payload: book
  };
}
