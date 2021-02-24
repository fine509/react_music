import React, { memo } from "react";
import { Provider } from "react-redux";
import { useNavigate, Navigate, Routes, Route, useRoutes, Outlet } from 'react-router-dom'

import store from "@/redux/index";

import MHAppHeader from "./components/app-header/index";
import MHAppFooter from "./components/app-footer/index";
import AppPlay from './views/player/app-play-bar/index'
export default function App(props: any) {

  return (
    <Provider store={store}>
       <MHAppHeader />
      <Outlet/>
      <MHAppFooter />
      <AppPlay />
    </Provider>
  );
}

// export default memo(function (props) {
//   const { route } = props;
//   return (
//     <App>
//       <RenderRoutes routes={route.children} />
//     </App>
//   );
// });
