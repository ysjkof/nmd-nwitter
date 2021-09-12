import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 375px;
  height: 100vh;
  margin: auto;
`;
const Main = styled.main``;

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Container>
      <Router>
        {isLoggedIn && <Navigation userObj={userObj} />}
        <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path="/">
                <Main>
                  <Home userObj={userObj} />
                </Main>
              </Route>
              <Route path="/profile">
                <Main>
                  <Profile refreshUser={refreshUser} userObj={userObj} />
                </Main>
              </Route>
            </>
          ) : (
            <Route exact path="/">
              <Main>
                <Auth />
              </Main>
            </Route>
          )}
        </Switch>
      </Router>
    </Container>
  );
};

export default AppRouter;
