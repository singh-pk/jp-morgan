import { NavLink } from 'react-router-dom';

import { ROUTES } from 'utils';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      {ROUTES.map(({ path, name }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
        >
          {name}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
