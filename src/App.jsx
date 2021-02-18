import React, { memo } from "react";
import { Provider } from "react-redux";
import store from "@/redux/index";
import RenderRoutes from "./router/routerRender";
import MHAppHeader from "./components/app-header/index";
import MHAppFooter from "./components/app-footer/index";
function App(props) {
  return (
    <Provider store={store}>
       <MHAppHeader />
      {props.children}
      <MHAppFooter />
    </Provider>
  );
}

export default memo(function (props) {
  const { route } = props;
  return (
    <App>
      <RenderRoutes routes={route.children} />
    </App>
  );
});
