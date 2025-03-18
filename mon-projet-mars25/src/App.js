import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <nav>
      <Link to="/homepage">Home</Link>
    </nav>

    <Routes>
      <Route path="/homepage" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
