import axios from "axios";

export const getUser = async () => {
  try {
    const data = await axios(`http://localhost:4003/users/`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
