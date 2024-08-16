import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList.jsx';
import AddBook from './components/AddBook.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
};

export default App;

