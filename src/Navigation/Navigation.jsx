import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { NAVIGATION_TODO, SHOP_ROUTES } from "../constans/Routes";

export function Navigation() {
  return (
    <nav>
      <div className={styles.nav}>
        <Link to="/">Counter</Link>
        <Link to={NAVIGATION_TODO}>Todo</Link>
        <Link to={SHOP_ROUTES}>Product list</Link>
      </div>
    </nav>
  );
}
