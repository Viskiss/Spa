import { Route, Routes } from "react-router-dom";
import { TODO_ROUTES } from "../../../constans/Routes";
import Todo from "../Todo";
import { Nav } from "./nav";
import TodoContextProvider from "../Context/context";

export function NavigationTodo() {
  return (
    <nav>
      <TodoContextProvider>
        <Nav />
        <Routes>
          <Route path={TODO_ROUTES} element={<Todo />} />
        </Routes>
      </TodoContextProvider>
    </nav>
  );
}
