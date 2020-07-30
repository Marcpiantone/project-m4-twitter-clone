import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import HomeFeed from "./components/HomeFeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomeFeed />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
          <Route exact path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route exact path="/tweet/:tweetId">
            <TweetDetails />
          </Route>
          <Route exact path="/:profileId">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
