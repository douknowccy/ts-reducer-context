import useDataContext from "./context/context";
import React from "react";
import styled from "styled-components";
import LayoutPage from "./components/layout";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import sidebarList from "./constant/sidebarList";
const App = () => {
  const {
    state: { data },
    fetchData,
    setData,
  } = useDataContext()!;

  return (
    <AppWrapper>
      <Router>
        <Switch>
          <LayoutPage>
            <Route exact path="/">
              <Home />
            </Route>
            {sidebarList.map((item) => {
              const { component, path } = item;
              return <Route path={path}>{component}</Route>;
            })}
          </LayoutPage>
        </Switch>
      </Router>
    </AppWrapper>
  );
};
export default App;

const AppWrapper = styled.main`
  height: 100vh;
  width: 100vw;
`;
