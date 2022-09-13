import { TODO_ROUTES } from "../../../constans/Routes";
import styles from "./navigationTodo.module.css";
import { Link } from "react-router-dom";

export function Nav() {
    return(
        <nav>
        <div className={styles.nav}>
          <Link to={TODO_ROUTES}>Todo</Link>
        </div>
      </nav>
    )
}