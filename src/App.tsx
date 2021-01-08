import useDataContext from "./context/context";
import React from "react";

const App = () => {
  const { state, fetchData } = useDataContext()!;
  console.log(state);
  return (
    <div>
      <button onClick={fetchData}>fetch data</button>
    </div>
  );
};
export default App;
