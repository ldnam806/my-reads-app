import React, { useState } from "react";
import { getAll, update } from "../bookApi";
import { IoAddSharp } from "react-icons/io5";
import { BOOKS_CATEGORIES } from "../constants";
import { BookComponent } from "../components/BookComponent";
import {
  HomeWrapper,
  BookCategoryWrapper,
  Category,
  HeaderApp,
  FixedSearchPage,
} from "../style";
import { Link } from "react-router-dom";
export default function Home() {
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(false);

  React.useEffect(() => {
    async function fetchData() {
      let res = await getAll();
      setBooks(res);
    }
    fetchData();
  }, [reload]);

  const handleUpdate = async (book, shelf) => {
    update(book, shelf).then((res) => setReload(!reload));
  };

  return (
    <HomeWrapper>
      <HeaderApp>MyReads</HeaderApp>
      <BookCategoryWrapper>
        <Category>Currently Reading</Category>
        <div className="books">
          {books
            ?.filter(
              (book) => book.shelf === BOOKS_CATEGORIES.CURRENTLY_READING
            )
            .map((book) => (
              <BookComponent key={book.id} handler={handleUpdate} book={book} />
            ))}
        </div>
      </BookCategoryWrapper>
      <BookCategoryWrapper>
        <Category>Want to Read</Category>
        <div className="books">
          {books
            ?.filter((book) => book.shelf === BOOKS_CATEGORIES.WANT_TO_READ)
            .map((book) => (
              <BookComponent handler={handleUpdate} key={book.id} book={book} />
            ))}
        </div>
      </BookCategoryWrapper>
      <BookCategoryWrapper>
        <Category>Read</Category>
        <div className="books">
          {books
            ?.filter((book) => book.shelf === BOOKS_CATEGORIES.READ)
            .map((book) => (
              <BookComponent handler={handleUpdate} key={book.id} book={book} />
            ))}
        </div>
      </BookCategoryWrapper>
      <FixedSearchPage>
        <Link to="/search">
          <IoAddSharp></IoAddSharp>
        </Link>
      </FixedSearchPage>
    </HomeWrapper>
  );
}
