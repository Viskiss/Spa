import { SHOP_ROUTES } from "../../constans/Routes";
import styles from "../../UseState/Todo/RoutesTodo/navigationTodo.module.css";
import { Link } from "react-router-dom";

export function NavShop() {
  return (
    <nav>
      <div className={styles.nav}>
        <Link to={SHOP_ROUTES}>Shop</Link>
      </div>
    </nav>
  );
}
