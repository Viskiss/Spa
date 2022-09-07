import { Link } from "react-router-dom";

import { TODO_ROUTES } from "../constants/routes";

import styles from './Navigation.module.css'

export function Navigation() {
  return (
    <nav>
      <div className={styles.nav}>
        <Link to="/">Counter's</Link>
        <Link to="/list">List</Link>
        <Link to={TODO_ROUTES}>Todo</Link>
      </div>
    </nav>
  );
}
