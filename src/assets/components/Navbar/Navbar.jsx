import { NavLink } from 'react-router-dom';
import { Searchbar } from './Searchbar';
import { ReactComponent as GlobeIcon } from '../../icons/globe.svg';
import { ReactComponent as CocktailIcon } from '../../icons/cocktail.svg';
import { ReactComponent as HeartIcon } from '../../icons/heart.svg';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="Navbar">
      <Searchbar />
      <nav className="Navbar-nav">
        <NavLink className="navbar-link" to={`/`}>
          <GlobeIcon className="icon" /> Nowości
        </NavLink>
        <NavLink className="navbar-link" to={`/recipes`}>
          <CocktailIcon className="icon" /> Przepisy
        </NavLink>
        <NavLink className="navbar-link" to={`/my-recipes`}>
          <HeartIcon className="icon" /> Moje Przepisy
        </NavLink>
      </nav>
      <div className="Navbar-user"></div>
    </header>
  );
};
