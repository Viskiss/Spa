import { Link } from "react-router-dom";
import styles from './Navigation.module.css'

export function Navigation() {
  return (
    <nav>
      <div className={styles.nav}>
        <Link to="/">Counter's</Link>
        <Link to="/list">List</Link>
        <Link to='/todo'>Todo</Link>
      </div>
    </nav>
  );
}
