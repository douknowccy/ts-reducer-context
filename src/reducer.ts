import { GET_DATA } from "./action";
import { InitialStateType } from "./context/context";
export type Actions = { type: GET_DATA; payload: any };
// | { type: DECREASE_LEVEL; count?: number };

const reducer = (state: InitialStateType, action: Actions) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload };
  }
};

export default reducer;
