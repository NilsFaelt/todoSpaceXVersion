import axios from "axios";
import { ITodo } from "../../types/todo";

export const addTodo = async (todo: ITodo) => {
  try {
    const data = await axios.post(`http://localhost:4003/add`, todo);
  } catch (err) {
    console.log(err);
  }
};
