import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { addTodo } from "../../api/index";
import Btn from "../../btn/Btn";
import * as styles from "./createTodo.style";

const CreateTodo = () => {
  const { isLoading, user } = useAuth0();
  const [todo, setTodo] = useState({
    userName: user?.given_name || "Missing Name",
    email: user?.email || "Missing Email",
    addTodo: "",
    addDesc: "",
    addColab: "",
  });
  const setTodoOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const createToDoOnClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const adta = await addTodo(todo);
    console.log("test");
  };
  return (
    <styles.CreateContainer>
      {!isLoading && (
        <styles.Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            createToDoOnClick(e)
          }
        >
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodoOnChange(e)
            }
            readOnly
            name='userName'
            placeholder='NAME'
            value={user?.given_name}
          />
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodoOnChange(e)
            }
            readOnly
            name='email'
            placeholder='EMAIL'
            value={user?.email}
          />
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodoOnChange(e)
            }
            required
            name='addTodo'
            placeholder='ADD TODO'
          />
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodoOnChange(e)
            }
            name='addDesc'
            placeholder='ADD DESCRIPTION'
          />
          <styles.Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodoOnChange(e)
            }
            name='addColab'
            placeholder='ADD COLAB'
          />
          <Btn BtnText='CREATE' />
        </styles.Form>
      )}
    </styles.CreateContainer>
  );
};

export default CreateTodo;
