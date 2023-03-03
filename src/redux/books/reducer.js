import { ADDED, DELETED, LOADED, UPDATED } from "./actionTypes";
import { initialState } from "./initialState";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          ...action.payload,
          id: nextBookId(state),
        },
      ];

    case UPDATED:
      return [
        ...state.map((book) => {
          if (book.id !== action.payload.id) {
            return book;
          }
          return {
            ...book,
            ...action.payload,
          };
        }),
      ];
    case DELETED:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
