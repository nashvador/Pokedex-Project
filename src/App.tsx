import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/Home" element={<Home />} />
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/Teambuilder" element={<Teambuilder />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
