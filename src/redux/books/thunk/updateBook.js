import { updated } from "../action";

const updateBook = (id, input) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ ...input }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const updatedBook = await response.json();
    console.log(updateBook);

    dispatch(updated(updatedBook));
  };
};

export default updateBook;
