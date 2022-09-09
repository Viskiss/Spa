import { Route, Routes } from "react-router";
import { Navigation } from "./Navigation/Navigation";
import Counter from "./UseState/Counter/Counter";
import Input from "./UseState/Input/Input";
import styles from "./App.module.css";
import Todo from "./UseState/Todo/Todo";
import { LIST_ROUTES, TODO_ROUTES } from "./constans/Routes";

function App() {
  return (
    <div className={styles.body}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path={LIST_ROUTES} element={<Input />} />
        <Route path={TODO_ROUTES} element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
