import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRequest } from "ahooks";
import { search, update } from "../bookApi";
import { BookComponent } from "../components/BookComponent";
import { Link } from "react-router-dom";

export default function Search() {
  const [dataSearch, setDataSearch] = useState([]);
  const getUsername = async (e) => {
    let res = await search(e);
    if (res?.error === "empty query") {
      setDataSearch([]);
      return;
    }
    setDataSearch(res);
  };
  const { run } = useRequest(getUsername, {
    debounceWait: 2000,
    manual: true,
  });

  const handleUpdate = async (book, shelf) => {
    const dataSearchClone = JSON.parse(JSON.stringify(dataSearch));

    update(book, shelf).then((res) => {
      dataSearchClone.forEach((book) => {
        if (res.currentlyReading.includes(book.id)) {
          book.shelf = "currentlyReading";
        }
        if (res.read.includes(book.id)) {
          book.shelf = "read";
        }
        if (res.wantToRead.includes(book.id)) {
          book.shelf = "wantToRead";
        }
      });

      setDataSearch(dataSearchClone);
    });
  };

  return (
    <>
      <div className="wrapper-search">
        <Link to="/">
          <IoArrowBackOutline></IoArrowBackOutline>
        </Link>
        <input
          onChange={(e) => run(e.target.value)}
          placeholder="Type somethings"
          className="input-search"
          type="text"
        />
      </div>
      <div className="search-results-container">
        {dataSearch.length <= 0 ? (
          <span>no results ...</span>
        ) : (
          dataSearch?.map((book) => (
            <BookComponent handler={handleUpdate} book={book} key={book.id} />
          ))
        )}
      </div>
    </>
  );
}
