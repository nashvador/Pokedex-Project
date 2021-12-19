import { Link } from 'react-router-dom';
import './Navbar.css';
import pokeball from './pokeball.png';

const NavBar = () => {
  return (
    <div>
      <ul className="navBarList">
        <div id="pokeball-container">
          <img src={pokeball} alt="pokeballImage" id="navPokeball" />
        </div>
        <li className="navBarEl">
          <Link to="/home" className="underline">
            Home
          </Link>
        </li>
        <li className="navBarEl">
          <Link to="/pokedex" className="underline">
            Pokédex
          </Link>
        </li>
        <li className="navBarEl">
          <Link to="/teambuilder" className="underline">
            Team Builder
          </Link>
        </li>
        <li className="nav-cta">
          <Link to="/login" className="underline">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
