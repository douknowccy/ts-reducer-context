import React from "react";
import { GET_DATA } from "../action";
import reducer from "../reducer";
import { Actions } from "../reducer";
import { getData } from "../helper/getData";

type DataType = {
  id: number;
  name: string;
  price: number;
  address: string;
  amount: number;
};
export type InitialStateType = {
  data: DataType[];
};
type Props = {
  children: React.ReactChild;
};

type ContextType = {
  state: InitialStateType;
  dispatch?: React.Dispatch<Actions>;
  setData?: () => void;
  fetchData?: () => void;
};

//get localstorage data
function getUserFromLocalStorage(key: string) {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : { username: null, token: null };
}

//  const userLogin = (user) => {
//    setUser(user);
//    localStorage.setItem("user", JSON.stringify(user));
//  };

//  const userLogout = () => {
//    setUser({ username: null, token: null });
//    localStorage.removeItem("user");
//  };

const initialState = {
  data: [],
};

const DataContext = React.createContext<ContextType | undefined>(undefined);

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const fetchData = () => {
    getData()
      .then((res) => {
        dispatch({ type: GET_DATA, payload: res });
      })
      .catch((error) => console.error(error));
  };
  const setData = () => {
    localStorage.setItem("user", JSON.stringify(state.data));
  };
  return (
    <DataContext.Provider value={{ state, fetchData, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => React.useContext(DataContext);
export default useDataContext;
