import React, { useState } from "react";

const BookSearch = ({ books }) => {
  const [filter, setFilter] = useState({
    author: "",
    title: "",
    country: "",
    language: "",
    year: "",
  });
  //Searching
  /**The filtering algorithm should trim leading and trailing whitespace from the input value and perform case-insensitive substring matches.*/
  const filteredBooks = books.filter((book) => {
    return (
      book.author.toLowerCase().includes(filter.author.toLowerCase().trim()) &&
      book.title.toLowerCase().includes(filter.title.toLowerCase().trim()) &&
      book.country.toLowerCase().includes(filter.country.toLowerCase().trim()) &&
      book.language.toLowerCase().includes(filter.language.toLowerCase().trim()) &&
      book.year.toString().includes(filter.year)
    );
  });

  const handleChange = (evt) => {
        const { value, name } = evt.target;
        setFilter({
          ...filter,
          [name]: value,
        });
  } 
  return (
    <div className="book-search">
      <form className="form">
        <div className="form_field">
          <label>author</label>
          <input
            data-testid="author"
            name="author"
            value={filter.author}
            onChange={handleChange}
          />
        </div>
        <div className="form_field">
          <label>title</label>
          <input
            data-testid="title"
            name="title"
            value={filter.title}
            onChange={handleChange}
          />
        </div>
        <div className="form_field">
          <label>country</label>
          <input
            data-testid="country"
            name="country"
            value={filter.country}
            onChange={handleChange}
          />
        </div>
        <div className="form_field">
          <label>language</label>
          <input
            data-testid="language"
            name="language"
            value={filter.language}
            onChange={handleChange}
          />
        </div>
        <div className="form_field">
          <label>year</label>
          <input
            data-testid="year"
            name="year"
            value={filter.year}
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