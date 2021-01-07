import React from "react";
import { INCREASE_LEVEL, DECREASE_LEVEL } from "./action";

export type Actions =
  | { type: INCREASE_LEVEL; count?: number }
  | { type: DECREASE_LEVEL; count?: number };

interface Count {
  count: number;
}

const reducer = (state: Count, action: Actions) => {
  switch (action.type) {
    case DECREASE_LEVEL:
      return { ...state, count: state.count - 1 };
    case INCREASE_LEVEL:
      return { ...state, count: state.count + 1 };
  }
};

export default reducer;
