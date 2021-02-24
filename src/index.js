import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, Navigate, Routes, Route, useRoutes, Outlet, BrowserRouter } from 'react-router-dom'

import "assets/css/reset.scss" 
import App from './router/index1'

ReactDOM.render(
  <BrowserRouter>
  <React.Suspense fallback={<div>loading....</div>}>
      <App/>
   </React.Suspense>
  </BrowserRouter>
  

,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

