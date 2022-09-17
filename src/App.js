import { Route, Routes } from "react-router";
import { Navigation } from "./Navigation/Navigation";
import styles from "./App.module.css";
import { NAVIGATION_TODO, SHOP_ROUTES } from "./constans/Routes";
import { NavigationTodo } from "./UseState/Todo/RoutesTodo/navigationTodo";
import { Common } from "./UseState/Counter/common";
import Shop from "./Shop/Shop";

function App() {
  return (
    <div className={styles.body}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Common />} />
        <Route path={NAVIGATION_TODO} element={<NavigationTodo />} />
        <Route path={SHOP_ROUTES} element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
