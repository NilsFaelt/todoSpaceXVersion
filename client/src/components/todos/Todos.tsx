import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import Spinner from "../../ui/spinner/Spinner";
import LoginBtn from "../loginBtnLoggoutBtn/LoginBtn";
import TodoNavBar from "./todoNavBar/TodoNavBar";
import * as styles from "./todos.style";

const Todos = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <styles.TodoContainer>
      {isAuthenticated ? (
        <TodoNavBar />
      ) : (
        <>
          <styles.Title>LOGIN TO GET ACCESS</styles.Title>
          <LoginBtn />
        </>
      )}
      <Outlet />
      {isLoading && <Spinner />}
    </styles.TodoContainer>
  );
};

export default Todos;
