import { Route, Routes } from "react-router";
import { Navigation } from "./Navigation/Navigation";
import styles from "./App.module.css";
import { NAVIGATION_SHOP, NAVIGATION_TODO } from "./constans/Routes";
import { NavigationTodo } from "./UseState/Todo/RoutesTodo/navigationTodo";
import { Common } from "./UseState/Counter/common";
import { NavigationShop } from "./Shop/RoutesShop/navigationShop";

function App() {
  return (
    <div className={styles.body}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Common />} />
        <Route path={NAVIGATION_TODO} element={<NavigationTodo />} />
        <Route path={NAVIGATION_SHOP} element={<NavigationShop />} />
      </Routes>
    </div>
  );
}

export default App;
