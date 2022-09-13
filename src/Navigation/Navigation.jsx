import { Link } from "react-router-dom";
import {
  LIST_ROUTES,
  NAVIGATION_TODO,
} from "../constans/Routes";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav>
      <div className={styles.nav}>
        <Link to="/">Counter</Link>
        <Link to={LIST_ROUTES}>List</Link>
        <Link to={NAVIGATION_TODO}>Todo</Link>
      </div>
    </nav>
  );
}
