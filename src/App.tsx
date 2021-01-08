import useDataContext from "./context/context";
import React from "react";

const App = () => {
  const {
    state: { data },
    fetchData,
  } = useDataContext()!;

  return (
    <div>
      {data.length > 0 ? (
        <div>
          {data.map(({ id, address, amount, name, price }) => {
            return (
              <article key={id}>
                <h1>{name}</h1>
                <p>{amount}</p>
                <p>${price}</p>
                <span>{address}</span>
              </article>
            );
          })}
        </div>
      ) : (
        <h2>no data</h2>
      )}
      <button onClick={fetchData}>fetch data</button>
    </div>
  );
};
export default App;
