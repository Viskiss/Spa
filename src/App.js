import { Route, Routes } from "react-router";
import { Navigation } from "./Navigation/Navigation";
import Input from "./UseState/List/List";
import styles from "./App.module.css";
import { LIST_ROUTES, NAVIGATION_TODO } from "./constans/Routes";
import { NavigationTodo } from "./UseState/Todo/RoutesTodo/navigationTodo";
import { Common } from "./UseState/Counter/common";


function App() {
  

  return (
    
      <div className={styles.body}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Common />} />
          <Route path={LIST_ROUTES} element={<Input />} />
          <Route path={NAVIGATION_TODO} element={<NavigationTodo />} />
        </Routes>
      </div>

  );
}

export default App;
