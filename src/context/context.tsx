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
  fetchData?: () => void;
};
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
  return (
    <DataContext.Provider value={{ state, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => React.useContext(DataContext);
export default useDataContext;
