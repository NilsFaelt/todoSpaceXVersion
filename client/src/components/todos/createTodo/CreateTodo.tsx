import { useAuth0, User } from "@auth0/auth0-react";
import Btn from "../../btn/Btn";
import * as styles from "./createTodo.style";

const CreateTodo = () => {
  const { isLoading, user } = useAuth0();
  return (
    <styles.CreateContainer>
      {!isLoading && (
        <styles.Form>
          <styles.Input placeholder='NAME' value={user?.given_name} />
          <styles.Input placeholder='EMAIL' value={user?.email} />
          <styles.Input placeholder='ADD TODO' />
          <styles.Input placeholder='ADD DESCRIPTION' />
          <styles.Input placeholder='ADD COLAB' />
          <Btn BtnText='CREATE' />
        </styles.Form>
      )}
    </styles.CreateContainer>
  );
};

export default CreateTodo;
