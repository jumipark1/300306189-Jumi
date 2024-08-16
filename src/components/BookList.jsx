import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const BookList = () => {
  const [books, setBooks] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

    return (
    <div className="booklist-container">
      <h1 className="centered">Book list</h1>
      <ul className="centered">
        {books.map((book, index) => (
          <li key={index}>
           {book.imageFile && (
            <img src={book.imageFile} alt={book.title} className="book-image" />
)}
            <p>
              {book.title}
              
            </p>
            <p>{book.author}</p>
            <p>{book.description}</p>
            
            <button onClick={() => handleDelete(index)} className="delete-button">X</button>
          </li>
        ))}
      </ul>
      <div className="centered-button-group">
        <Link to="/add-book">
          <button className="centered-button">+ Add New Book</button>
        </Link>
      </div>
    </div>
  );
};

export default BookList;
