import './App.css';
import MyFunction from './MyFunction';
import MyClass from './MyClass';
import MyHook from './MyHook';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import BookList from './BookList';
import SelectedBook from './SelectedBook';
import SortBook from './SortBook';
import DeleteBook from './DeleteBook';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li> <Link to="/myfunction">MyFunction</Link> </li>
          <li> <Link to="/myclass">MyClass</Link> </li>
          <li> <Link to="/myhook">MyHook</Link>  </li>
          <li> <Link to="/login">Login</Link>  </li>
          <li> <Link to="/booklist">Kirjat</Link>  </li>
          <li> <Link to="/sortbook">Kirjat järjestys</Link>  </li>
        </ul>

        <hr />
      </div>
      <Routes>
        <Route exact path="/myfunction" element={<MyFunction fname="Teppo"/>} />
        <Route exact path="/myclass" element={<MyClass fname="Teppo"/>} />
        <Route exact path="/myhook" element={<MyHook fname="Teppo"/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/booklist" element={<BookList/>} />
        <Route exact path="/sortbook" element={<SortBook/>} />
        <Route exact path="/booklist/selectedbook/:id" element={<SelectedBook/>} />
        <Route exact path="/booklist/deletebook/:id" element={<DeleteBook/>} />
      </Routes>
    </Router>

  );
}

export default App;
