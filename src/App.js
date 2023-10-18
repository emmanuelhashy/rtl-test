import logo from './logo.svg';
import './App.css';
import books from "./data/books.json"
import BookSearch from './components/BookSearch';

function App() {
  return (
    <BookSearch books={books} />
    
  );
}

export default App;
