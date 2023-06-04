import { NavLink } from 'react-router-dom';
import { Searchbar } from './Searchbar';
import { ReactComponent as GlobeIcon } from '../../icons/globe.svg';
import { ReactComponent as CocktailIcon } from '../../icons/cocktail.svg';
import { ReactComponent as HeartIcon } from '../../icons/heart.svg';
import './Header.css';

export const Header = () => {
  return (
    <header className="Header">
      <Searchbar />
      <nav className="Header-nav">
        <NavLink className="navbar-link" to={`/`}>
          <GlobeIcon className="icon" /> Nowości
        </NavLink>
        <NavLink className="navbar-link" to={`/recipes`}>
          <CocktailIcon className="icon" /> Przepisy
        </NavLink>
        <NavLink className="navbar-link" to={`/my-recipes`}>
          <HeartIcon className="icon" /> Moje&nbsp;Przepisy
        </NavLink>
      </nav>
      <div className="Header-user"></div>
    </header>
  );
};
