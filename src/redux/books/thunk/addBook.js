import { added } from "../action";

const addBook = (book) => {
  return async (dispatch) => {
    const finalBook = {
      ...book,
    };
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify(finalBook),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const bookFromDb = await response.json();

    dispatch(added(bookFromDb));
  };
};

export default addBook;
