import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/homepage">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/homepage" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
