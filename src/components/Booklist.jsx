import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBook";
import Book from "./Book";
import BookInput from "./BookInput";
import BookUpdateInput from "./BookUpdateInput";

const Booklist = ({ searchTerm }) => {
  const [featured, setFeatured] = useState(false);
  const dispatch = useDispatch();
  const [willUpdate, setWillUpdate] = useState(false);
  const [currentBook, setCurrentBook] = useState("");
  const books = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  const filterFeatured = (book) => {
    switch (featured) {
      case false:
        return book;
      case true:
        return book.featured;

      default:
        return book;
    }
  };
  const filterBySearch = (book) => {
    return book.name.toLowerCase().includes(searchTerm.toLowerCase());
  };
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setFeatured(false)}
                className="filter-btn active-filter"
                id="lws-filterAll"
              >
                All
              </button>
              <button
                onClick={() => setFeatured(true)}
                className="filter-btn"
                id="lws-filterFeatured"
              >
                Featured
              </button>
            </div>
          </div>
          <div className="lws-bookContainer">
            {books.length > 0
              ? books
                  .filter(filterFeatured)
                  .filter(filterBySearch)
                  .map((book, idx) => (
                    <Book
                      key={idx}
                      book={book}
                      setWillUpdate={setWillUpdate}
                      willUpdate={willUpdate}
                      setCurrentBook={setCurrentBook}
                    />
                  ))
              : "No books"}
          </div>
        </div>
        {willUpdate ? (
          <BookUpdateInput
            currentBook={currentBook}
            setWillUpdate={setWillUpdate}
          />
        ) : (
          <BookInput />
        )}
      </div>
    </main>
  );
};

export default Booklist;
