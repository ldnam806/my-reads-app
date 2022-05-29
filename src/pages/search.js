import React, { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { search, update, getAll } from "../bookApi";
import { BookComponent } from "../components/BookComponent";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [reload, setReload] = useState(false);

  const handleUpdate = async (book, shelf) => {
    update(book, shelf).then((res) => {
      fetchData();
      handleSearchBook();
    });
  };
  async function fetchData() {
    let res = await getAll();
    setBooks(res);
  }

  async function handleSearchBook() {
    let res = await search(query === "" ? " " : query);
    if (res?.error === "empty query") {
      setDataSearch([]);
      return;
    } else {
      let listId = books.map((item) => item.id);
      res.forEach((book) => {
        if (listId.includes(book.id)) {
          let current = books.find((citem) => citem.id === book.id);
          book.shelf = current.shelf;
        } else {
          book.shelf = "none";
        }
      });
      setDataSearch(res);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    handleSearchBook();
  }, [query, books]);

  return (
    <>
      <div className="wrapper-search">
        <Link to="/">
          <IoArrowBackOutline></IoArrowBackOutline>
        </Link>
        <input
          onChange={(e) =>
            e.target.value === ""
              ? setQuery(" ")
              : setQuery(e.target.value.trim())
          }
          placeholder="Type somethings"
          className="input-search"
          type="search"
          value={query}
        />
      </div>
      <div className="search-results-container">
        {dataSearch.length > 0 ? (
          dataSearch?.map((book) => (
            <React.Fragment key={book.id}>
              <BookComponent handler={handleUpdate} book={book} />
            </React.Fragment>
          ))
        ) : (
          <span>not found</span>
        )}
      </div>
    </>
  );
}
