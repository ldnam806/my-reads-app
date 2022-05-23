import React from "react";
import {
  Book,
  BookImgWrapper,
  SelectType,
  OpenChooseTypes,
  Types,
  BookTitle,
  BookAuthor,
} from "../style";
import { IoCaretDownOutline } from "react-icons/io5";
export function BookComponent({ book, handler }) {
  const handleUpdate = async (shelf) => {
    handler(book, shelf);
  };
  return (
    <Book>
      <BookImgWrapper>
        <img src={book.imageLinks?.smallThumbnail} alt={book.description} />
        <SelectType>
          <OpenChooseTypes>
            <IoCaretDownOutline></IoCaretDownOutline>
          </OpenChooseTypes>
          <Types>
            <div
              onClick={() => handleUpdate("wantToRead")}
              className={
                book.shelf === "wantToRead" ? "type-item active" : "type-item"
              }
            >
              Want to read
            </div>
            <div
              onClick={() => handleUpdate("read")}
              className={
                book.shelf === "read" ? "type-item active" : "type-item"
              }
            >
              Read
            </div>
            <div
              onClick={() => handleUpdate("currentlyReading")}
              className={
                book.shelf === "currentlyReading"
                  ? "type-item active"
                  : "type-item"
              }
            >
              Currently reading
            </div>
          </Types>
        </SelectType>
      </BookImgWrapper>
      <div className="book-info">
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>
          {book.authors?.map((author) => (
            <span>{author}</span>
          ))}
        </BookAuthor>
      </div>
    </Book>
  );
}
