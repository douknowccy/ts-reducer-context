import React from "react";
import { INCREASE_LEVEL, DECREASE_LEVEL } from "./action";
import reducer from "./reducer";
import { Actions } from "./reducer";
interface DataState {
  count: number;
  addCount?: () => void;
  decreaseCount?: () => void;
  dispatch?: React.Dispatch<Actions>;
}
interface Props {
  children: React.ReactNode;
}
const DataContext = React.createContext<DataState | undefined>(undefined);

const initialState: DataState = {
  count: 0,
};

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const addCount = () => {
    dispatch({ type: INCREASE_LEVEL });
  };
  const decreaseCount = () => {
    dispatch({ type: DECREASE_LEVEL });
  };
  return (
    <DataContext.Provider value={{ ...state, addCount, decreaseCount }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => React.useContext(DataContext);
export default useDataContext;
