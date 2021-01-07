import React, { useState, useEffect } from "react";
import useDataContext from "./context";
interface Props {
  name: string;
  level: number;
}

const App = () => {
  const { count, addCount } = useDataContext()!;

  return (
    <div>
      {count}
      <button onClick={addCount}>+</button>
    </div>
  );
};
export default App;
