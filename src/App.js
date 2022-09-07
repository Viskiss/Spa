import { Route, Routes } from "react-router";
import { Navigation } from "./Navigation/Navigation";
import Counter from "./UseState/Counter/Counter";
import Input from "./UseState/Input/Input";
import styles from "./App.module.css";
import Todo from "./UseState/Todo/Todo";

function App() {
  return (
    <div className={styles.body}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/list" element={<Input />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
