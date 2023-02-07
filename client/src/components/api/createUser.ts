import axios from "axios";
import { IUser } from "../../types/IUser";

export const createUser = async (user: IUser) => {
  try {
    const data = await axios.post(`http://localhost:4003/users/addUser`, user);
  } catch (err) {
    console.log(err);
  }
};
