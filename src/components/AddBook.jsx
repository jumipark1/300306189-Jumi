import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const bookIndex = location.state?.index;

  useEffect(() => {
    if (location.state?.book) {
      const { book } = location.state;
      setTitle(book.title);
      setAuthor(book.author);
      setDescription(book.description);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const newBook = {
      title,
      author,
      description,
      imageFile: '/images/books.png', 
    };

    if (bookIndex !== undefined) {
      storedBooks[bookIndex] = newBook; 
    } else {
      storedBooks.push(newBook); 
    }

    localStorage.setItem('books', JSON.stringify(storedBooks));
    navigate('/');
  };

  return (
    <div className="form-container">
     <h1 className="centered">Add Book</h1>
      <h2 className="centered">Create new Book</h2>
      <form onSubmit={handleSubmit} className="centered">
        <label>
          <strong>Title of the Book:</strong>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input-field"
          />
        </label>
        <br />
        <label>
          <strong>Author:</strong>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="input-field"
          />
        </label>
        <br />
        <label>
          <strong>Describe this book:</strong>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          ></textarea>
        </label>
        <br />
        <div className="button-group">
          <button type="submit" className="centered-button">Submit</button>
          <button type="button" className="centered-button" onClick={() => navigate('/')}>Show Book List</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
