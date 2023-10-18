import React, { useState } from "react";

const BookSearch = ({ books }) => {
  const [book, setBook] = useState({
    author: "",
    title: "",
    country: "",
    language: "",
    year: 0,
  });
  //Searching
  /**The filtering algorithm should trim leading and trailing whitespace from the input value and perform case-insensitive substring matches.*/

  let filteredBooks = books?.filter(function (item) {
    return (
      item.author.toLowerCase().includes(book.author.trim().toLowerCase()) &&
      item.title.toLowerCase().includes(book.title.trim().toLowerCase()) &&
      item.country.toLowerCase().includes(book.country.trim().toLowerCase()) &&
      item.language.toLowerCase().includes(book.language.trim().toLowerCase()) &&
      item.year.toString().includes(book.year.trim())
    );
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setBook({
      ...book,
      [name]: value,
    });
  };
  return (
    <div className="book-search">
      <form className="form">
        <div className="form_field">
          <label>author</label>
          <input
            data-testid="author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div className="form_field">
          <label>title</label>
          <input
            data-testid="title"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <div className="form_field">
          <label>country</label>
          <input
            data-testid="country"
            name="country"
            value={book.country}
            onChange={handleChange}
          />
        </div>
        <div className="form_field">
          <label>language</label>
          <input
            data-testid="language"
            name="language"
            value={book.language}
            onChange={handleChange}
          />
        </div>
        <div className="form_field">
          <label>year</label>
          <input
            data-testid="year"
            name="year"
            value={book.year}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="book_list">
        {filteredBooks.map((book, idx) => {
          const { author, country, language, pages, title, year } = book;
          return (
            <div key={idx} data-testid="book" className="book">
              <div className="book_row">
                <p>author: </p>
                <p>{author}</p>
              </div>
              <div className="book_row">
                <p>country: </p>
                <p>{country}</p>
              </div>
              <div className="book_row">
                <p>language: </p>
                <p>{language}</p>
              </div>
              <div className="book_row">
                <p>pages: </p>
                <p>{pages}</p>
              </div>
              <div className="book_row">
                <p>title: </p>
                <p>{title}</p>
              </div>
              <div className="book_row">
                <p>year: </p>
                <p>{year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookSearch;
