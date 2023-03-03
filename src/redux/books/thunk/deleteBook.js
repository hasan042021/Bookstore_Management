import { deleted } from "../action";

const deleteBook = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });

    dispatch(deleted(bookId));
  };
};

export default deleteBook;
