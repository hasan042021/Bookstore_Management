import React, { useState } from "react";
import { useDispatch } from "react-redux";
import updateBook from "../redux/books/thunk/updateBook";

const BookUpdateInput = ({ setWillUpdate, currentBook }) => {
  const [input, setInput] = useState({
    name: currentBook.name,
    author: currentBook.author,
    thumbnail: currentBook.thumbnail,
    price: currentBook.price,
    rating: currentBook.rating,
    featured: currentBook.featured,
  });
  const { id } = currentBook;
  console.log(input);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(id, input));
    setInput({
      name: "",
      author: "",
      thumbnail: "",
      price: 0,
      rating: 0,
      featured: false,
    });
    setWillUpdate(false);
  };
  return (
    <div>
      <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 class="mb-8 text-xl font-bold text-center">
          Update Book Information
        </h4>
        <form onSubmit={handleSubmit} class="book-form">
          <div class="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              class="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              onChange={(e) =>
                setInput((preveState) => {
                  return { ...preveState, name: e.target.value };
                })
              }
              value={input.name}
            />
          </div>

          <div class="space-y-2">
            <label for="category">Author</label>
            <input
              required
              class="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              onChange={(e) =>
                setInput((preveState) => {
                  return { ...preveState, author: e.target.value };
                })
              }
              value={input.author}
            />
          </div>

          <div class="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              class="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              onChange={(e) =>
                setInput((preveState) => {
                  return { ...preveState, thumbnail: e.target.value };
                })
              }
              value={input.thumbnail}
            />
          </div>

          <div class="grid grid-cols-2 gap-8 pb-4">
            <div class="space-y-2">
              <label for="price">Price</label>
              <input
                required
                class="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                onChange={(e) =>
                  setInput((preveState) => {
                    return { ...preveState, price: +e.target.value };
                  })
                }
                value={input.price}
              />
            </div>

            <div class="space-y-2">
              <label for="quantity">Rating</label>
              <input
                required
                class="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                onChange={(e) =>
                  setInput((preveState) => {
                    return { ...preveState, rating: +e.target.value };
                  })
                }
                value={input.rating}
              />
            </div>
          </div>

          <div class="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              class="w-4 h-4"
              onChange={(e) =>
                setInput((preveState) => {
                  return { ...preveState, featured: e.target.checked };
                })
              }
              checked={input.featured}
            />
            <label for="featured" class="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" class="submit" id="submit">
            {"Update Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookUpdateInput;
