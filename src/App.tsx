import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Pokedex from './Pages/Pokedex';
import Teambuilder from './Pages/Teambuilder';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/teambuilder" element={<Teambuilder />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
