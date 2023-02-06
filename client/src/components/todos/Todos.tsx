import { Outlet } from "react-router-dom";
import TodoNavBar from "./todoNavBar/TodoNavBar";
import * as styles from "./todos.style";

const Todos = () => {
  return (
    <styles.TodoContainer>
      <TodoNavBar />
      <Outlet />
    </styles.TodoContainer>
  );
};

export default Todos;
