import * as styles from "./allTodos.style";
import { Title } from "../../displayUser/displayUser.style";
import { useGetTodos } from "../../hooks/useGetTodos";
import { Spinner } from "../../../ui/spinner/spinner.style";

const AllTodos = () => {
  const { error, loading, data } = useGetTodos();
  console.log(error);
  return (
    <styles.Container>
      {loading && <Spinner />}
      {error && <Title>Something went wrong when fetching todos</Title>}
    </styles.Container>
  );
};

export default AllTodos;
