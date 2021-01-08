import useDataContext from "./context/context";
import React from "react";
import styled from "styled-components";

const App = () => {
  const {
    state: { data },
    fetchData,
    setData,
  } = useDataContext()!;

  return (
    <AppWrapper>
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
      <button onClick={setData}>set user data</button>
    </AppWrapper>
  );
};
export default App;

const AppWrapper = styled.main`
  height: 100vh;
  width: 100vw;
`;
