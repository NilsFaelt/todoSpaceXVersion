import axios from "axios";

export const getTodos = async () => {
  try {
    const data = await axios("http://localhost:4003/");
    return data;
  } catch (err) {
    console.log(err);
  }
};
