import axios from "axios";
import { URL } from "./URL";

const getData = async () => {
  try {
    const response = await axios(`${URL}courses`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getData };
