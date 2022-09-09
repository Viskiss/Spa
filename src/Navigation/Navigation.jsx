import { Link } from "react-router-dom";
import { LIST_ROUTES, TODO_ROUTES } from "../constans/Routes";
import styles from './Navigation.module.css'

export function Navigation() {
  return (
    <nav>
      <div className={styles.nav}>
        <Link to="/">Counter's</Link>
        <Link to={LIST_ROUTES}>List</Link>
        <Link to={TODO_ROUTES}>Todo</Link>
      </div>
    </nav>
  );
}
