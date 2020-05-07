import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to="/"
          exact
          activeClassName={styles.active}
          className={styles.nav__link}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          activeClassName={styles.active}
          className={styles.nav__link}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
