import React, { memo } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/redux/index";
import MHAppHeader from "components/app-header/index";
import MHAppFooter from "components/app-footer/index";
import MHDiscover from "views/discover/index.tsx";
import MHFriends from "views/friends/index.jsx";
import MHMine from "views/mine/index.jsx";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MHAppHeader />
        <Switch>
          <Route path="/discover" component={MHDiscover} exact />
          <Route path="/friends" component={MHFriends} exact />
          <Route path="/mine" component={MHMine} exact />
          <Redirect from="/" to="/discover" exact></Redirect>
        </Switch>
        <MHAppFooter />
      </HashRouter>
    </Provider>
  );
});
